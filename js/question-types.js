// ===== QUESTION TYPES =====
// single / multiple — options with one or more correct answers. Runtime: q.options = { order, texts, correctNew, explanations };
//                     answer = indices of the selected (displayed) options.
// ordering          — q.items listed in the correct order. Runtime: q.ordering = { order } (initial display order);
//                     answer = item indices in the order the user arranged them.
// matching          — q.prompts matched to q.responses via q.correct. Runtime: q.matching = { order } (display order of the
//                     responses in each dropdown); answer = chosen response index per prompt (null = not chosen yet).

function isChoiceType(q) {
  return q.type === 'single' || q.type === 'multiple';
}

// Bank question → runtime question. `order` is given when resuming a saved quiz.
function buildRuntimeQuestion(q, order) {
  if (q.type === 'ordering') {
    let start = order || shuffle(q.items.map((_, i) => i));
    if (!order && start.every((v, i) => v === i)) start = [...start.slice(1), start[0]]; // never start solved
    return { ...q, ordering: { order: start } };
  }
  if (q.type === 'matching') {
    return { ...q, matching: { order: order || shuffle(q.responses.map((_, i) => i)) } };
  }
  return { ...q, options: shuffleOptionsWithMapping(q, order) };
}

// Display order to persist for a runtime question, and the length it must have for a bank question
function displayOrder(q) {
  return q.options ? q.options.order : q.ordering ? q.ordering.order : q.matching.order;
}
function displayOrderLength(bankQ) {
  return bankQ.type === 'ordering' ? bankQ.items.length
       : bankQ.type === 'matching' ? bankQ.responses.length
       : bankQ.options.length;
}

function isAnswered(q) {
  const a = state.answers[q.id];
  if (!a) return false;
  return q.type === 'matching' ? a.some(r => r !== null && r !== undefined) : a.length > 0;
}

// Exact match only — no partial credit for any type
function isAnswerCorrect(q) {
  const a = state.answers[q.id] || [];
  if (q.type === 'ordering') return a.length === q.items.length && a.every((item, pos) => item === pos);
  if (q.type === 'matching') return q.correct.every((r, k) => a[k] === r);
  return a.length === q.options.correctNew.filter(Boolean).length &&
         a.every(i => q.options.correctNew[i]);
}

// Hint shown under the question text (null = no hint)
function questionHint(q) {
  if (q.type === 'multiple') {
    const n = q.options.correctNew.filter(Boolean).length;
    return `Select <strong>${n === 2 ? 'TWO' : n === 3 ? 'THREE' : n}</strong> answers.`;
  }
  if (q.type === 'ordering') return 'Put the items in the correct order with the <strong>↑ ↓</strong> buttons.';
  if (q.type === 'matching') return 'Choose the matching answer for <strong>each</strong> item.';
  return null;
}

// ===== ORDERING =====

function currentOrder(q) {
  return state.answers[q.id] || q.ordering.order;
}

function orderingHtml(q) {
  const order = currentOrder(q);
  const rows = order.map((item, pos) => `
    <div class="ord-row">
      <span class="ord-num">${pos + 1}</span>
      <span class="ord-text">${esc(q.items[item])}</span>
      <span class="ord-btns">
        <button class="ord-btn" data-pos="${pos}" data-dir="-1" aria-label="Move up" ${pos === 0 ? 'disabled' : ''}>↑</button>
        <button class="ord-btn" data-pos="${pos}" data-dir="1" aria-label="Move down" ${pos === order.length - 1 ? 'disabled' : ''}>↓</button>
      </span>
    </div>`).join('');
  const confirm = isAnswered(q) ? '' :
    '<button class="ord-confirm">This order is correct ✓</button>';
  return `<div class="ord-list">${rows}</div>${confirm}`;
}

// Practice reveal / results review: the user's order marked row by row, then the correct order with explanations
function orderingResultHtml(q, answer) {
  const order = answer && answer.length ? answer : null;
  const yours = order ? order.map((item, pos) => {
    const ok = item === pos;
    return `
      <div class="ord-row ${ok ? 'ord-ok' : 'ord-wrong'}">
        <span class="ord-num">${ok ? '✓' : '✗'}</span>
        <span class="ord-text">${esc(q.items[item])}</span>
        ${ok ? '' : `<span class="ord-should">should be #${item + 1}</span>`}
      </div>`;
  }).join('') : '<p class="qt-none">Not answered.</p>';
  const correct = q.items.map((text, i) => `
    <div class="ord-row ord-ok">
      <span class="ord-num">${i + 1}</span>
      <div class="option-content">
        <div class="ord-text">${esc(text)}</div>
        ${q.itemExplanations ? `<div class="option-inline-exp">${esc(q.itemExplanations[i])}</div>` : ''}
      </div>
    </div>`).join('');
  return `
    <div class="qt-label">Your order</div><div class="ord-list">${yours}</div>
    <div class="qt-label">Correct order</div><div class="ord-list">${correct}</div>`;
}

// ===== MATCHING =====

function matchingHtml(q) {
  const answer = state.answers[q.id] || [];
  const rows = q.prompts.map((prompt, k) => {
    const options = q.matching.order.map(r =>
      `<option value="${r}" ${answer[k] === r ? 'selected' : ''}>${esc(q.responses[r])}</option>`).join('');
    return `
      <div class="match-row">
        <span class="match-prompt">${esc(prompt)}</span>
        <select class="match-select" data-k="${k}" aria-label="Match for: ${esc(prompt)}">
          <option value="" ${answer[k] == null ? 'selected' : ''}>Choose…</option>${options}
        </select>
      </div>`;
  }).join('');
  return `<div class="match-list">${rows}</div>`;
}

function matchingResultHtml(q, answer) {
  answer = answer || [];
  return `<div class="match-list">${q.prompts.map((prompt, k) => {
    const chosen = answer[k];
    const ok = chosen === q.correct[k];
    return `
      <div class="match-row match-result ${ok ? 'ord-ok' : 'ord-wrong'}">
        <span class="ord-num">${ok ? '✓' : '✗'}</span>
        <div class="option-content">
          <div class="match-prompt">${esc(prompt)}</div>
          <div class="match-answer">→ ${esc(q.responses[q.correct[k]])}${ok ? '' :
            `<span class="match-yours"> (your answer: ${chosen == null ? 'none' : esc(q.responses[chosen])})</span>`}</div>
          ${q.promptExplanations ? `<div class="option-inline-exp">${esc(q.promptExplanations[k])}</div>` : ''}
        </div>
      </div>`;
  }).join('')}</div>`;
}

// ===== BANK-LEVEL HELPERS (stats, validator) =====

// The correct answer of a bank question as HTML, for the "Most missed" view
function correctAnswerHtml(q) {
  if (q.type === 'ordering') return `<ol class="mq-answers">${q.items.map(i => `<li>${esc(i)}</li>`).join('')}</ol>`;
  if (q.type === 'matching') return `<ul class="mq-answers">${q.prompts.map((p, k) =>
    `<li>${esc(p)} → ${esc(q.responses[q.correct[k]])}</li>`).join('')}</ul>`;
  return `<ul class="mq-answers">${q.correct.map(i => `<li>${esc(q.options[i])}</li>`).join('')}</ul>`;
}
