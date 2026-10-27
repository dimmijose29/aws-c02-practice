// ===== SCORING =====

function computeScore() {
  let correct = 0, incorrect = 0, skipped = 0;
  const domainMap = {};
  const outcomes  = { correct: [], wrong: [], skipped: [] }; // question ids, for the stats history

  state.questions.forEach(q => {
    if (!domainMap[q.domain]) domainMap[q.domain] = { correct: 0, total: 0 };
    domainMap[q.domain].total++;

    const userAnswers = state.answers[q.id] || [];

    if (!isAnswered(q)) {
      skipped++;
      outcomes.skipped.push(q.id);
    } else if (isAnswerCorrect(q)) {
      correct++;
      domainMap[q.domain].correct++;
      outcomes.correct.push(q.id);
    } else {
      incorrect++;
      outcomes.wrong.push(q.id);
    }
  });

  const total = state.questions.length;
  const score = Math.round((correct / total) * 100);
  return { correct, incorrect, skipped, total, score, domainMap, outcomes };
}

function calculateResults() {
  const { correct, incorrect, skipped, total, score, domainMap, outcomes } = computeScore();
  const pct    = score;
  const passed = pct >= cert.passPct;

  // Save session to stats
  saveSession({
    date:     new Date().toISOString(),
    mode:     state.mode,
    modeType: state.practiceMode ? 'practice' : 'exam',
    score:    pct,
    correct,
    total,
    domains:  domainMap,
    questions: outcomes,
  });

  // Refresh stats panel on start screen
  renderStatsPanel();

  // Hero section
  document.getElementById('result-badge').textContent    = passed ? '🎉' : '📚';
  document.getElementById('result-title').textContent    = passed
    ? 'Congratulations! You Passed!'
    : "Keep Studying — You'll Get There!";
  document.getElementById('result-subtitle').textContent = passed
    ? `You scored ${pct}%, which meets the ${cert.passPct}% passing threshold. Well done!`
    : `You scored ${pct}%. Review the questions below and focus on your weaker domains.`;

  // Score stats
  document.getElementById('score-pct').textContent      = pct + '%';
  document.getElementById('stat-correct').textContent   = correct;
  document.getElementById('stat-incorrect').textContent = incorrect;
  document.getElementById('stat-skip').textContent      = skipped;

  // Animated score arc
  const circ = 326.7;
  const arc  = document.getElementById('score-arc');
  arc.style.stroke = passed ? 'var(--correct)' : (pct >= 50 ? 'var(--orange)' : 'var(--incorrect)');
  setTimeout(() => { arc.style.strokeDashoffset = circ - (pct / 100) * circ; }, 100);

  // Domain breakdown
  const breakdown = document.getElementById('domain-breakdown');
  breakdown.innerHTML = '';
  Object.entries(domainMap).forEach(([domain, data]) => {
    const dpct  = data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0;
    const color = dpct >= cert.passPct ? 'var(--correct)' : dpct >= 50 ? 'var(--orange)' : 'var(--incorrect)';
    breakdown.innerHTML += `
      <div class="domain-row">
        <div class="domain-row-header">
          <span class="domain-row-name">${esc(domain)}</span>
          <span class="domain-row-score">${data.correct} / ${data.total} (${dpct}%)</span>
        </div>
        <div class="domain-bar-wrap">
          <div class="domain-bar-fill" style="width:0%;background:${color}" data-width="${dpct}%"></div>
        </div>
      </div>`;
  });
  setTimeout(() => {
    document.querySelectorAll('.domain-bar-fill').forEach(bar => {
      bar.style.transition = 'width 1s ease';
      bar.style.width = bar.dataset.width;
    });
  }, 150);

  renderAnswersReview();
}

// ===== ANSWERS REVIEW =====

let reviewFilter = { status: 'all', domain: 'all' };

function renderAnswersReview() {
  const container = document.getElementById('answers-review');
  container.innerHTML = '';
  reviewFilter = { status: 'all', domain: 'all' };
  const counts = { all: 0, incorrect: 0, skipped: 0, correct: 0, flagged: 0 };

  state.questions.forEach((q, idx) => {
    const userAnswers = state.answers[q.id] || [];
    const isSkipped   = !isAnswered(q);
    const isCorrect   = !isSkipped && isAnswerCorrect(q);
    const isFlagged   = state.flagged.has(q.id);

    let statusClass, statusText;
    if (isSkipped)      { statusClass = 'skipped';   statusText = 'Not Answered'; }
    else if (isCorrect) { statusClass = 'correct';   statusText = '✓ Correct'; }
    else                { statusClass = 'incorrect'; statusText = '✗ Incorrect'; }
    counts.all++; counts[statusClass]++; if (isFlagged) counts.flagged++;

    // Build options with color coding (ordering/matching have their own result view)
    let optionsHtml = '';
    if (q.type === 'ordering') optionsHtml = orderingResultHtml(q, state.answers[q.id]);
    if (q.type === 'matching') optionsHtml = matchingResultHtml(q, state.answers[q.id]);
    if (isChoiceType(q)) q.options.texts.forEach((text, i) => {
      const isCorrectOpt   = q.options.correctNew[i];
      const isUserSelected = userAnswers.includes(i);
      let cls = 'opt-normal', mark = '';
      if (isCorrectOpt)                         { cls = 'opt-correct'; mark = '✓'; }
      else if (isUserSelected && !isCorrectOpt) { cls = 'opt-wrong';   mark = '✗'; }

      // Per-option explanation shown for ALL options (if available)
      const optExp = q.options.explanations ? q.options.explanations[i] : null;
      const optExpHtml = optExp
        ? `<div class="rc-opt-exp">${esc(optExp)}</div>${itExpHtml(trOption(q, 'optionExplanations', i))}`
        : '';

      optionsHtml += `
        <div class="rc-opt ${cls}">
          <div class="rc-opt-left">
            <span class="rc-opt-mark">${mark || String.fromCharCode(65 + i)}</span>
            <span>${esc(text)}${itHtml(trOption(q, 'options', i))}</span>
          </div>
          ${optExpHtml}
        </div>`;
    });

    container.innerHTML += `
      <div class="review-card" data-status="${statusClass}" data-flagged="${isFlagged}" data-domain="${esc(q.domain)}">
        <div class="rc-header">
          <span class="rc-num">Question ${idx + 1} · ${esc(q.domain)}</span>
          <span class="rc-tags">
            ${isFlagged ? '<span class="rc-flag">⚑ Flagged</span>' : ''}
            <span class="rc-status ${statusClass}">${statusText}</span>
          </span>
        </div>
        <div class="rc-body">
          <div class="rc-question">${esc(q.question)}${itHtml(tr(q, 'question'))}</div>
          <div class="rc-options">${optionsHtml}</div>
        </div>
      </div>`;
  });

  renderReviewFilters(counts);
}

// ===== REVIEW FILTERS =====

function renderReviewFilters(counts) {
  const chips = [
    ['all', 'All'], ['incorrect', 'Incorrect'], ['skipped', 'Unanswered'], ['correct', 'Correct'],
    ...(counts.flagged ? [['flagged', '⚑ Flagged']] : []),
  ].map(([key, label]) =>
    `<button class="rf-chip${reviewFilter.status === key ? ' rf-chip-active' : ''}" data-status="${key}">${label} <span class="rf-count">${counts[key]}</span></button>`
  ).join('');

  const domains = [...new Set(state.questions.map(q => q.domain))];
  const options = ['<option value="all">All domains</option>', ...domains.map(d =>
    `<option value="${esc(d)}"${reviewFilter.domain === d ? ' selected' : ''}>${esc(d)}</option>`)].join('');

  document.getElementById('review-filters').innerHTML = `
    <div class="rf-chips">${chips}</div>
    <select class="rf-domain" aria-label="Filter by domain">${options}</select>
    <p class="rf-showing"></p>`;
  applyReviewFilter();
}

function applyReviewFilter() {
  const cards = document.querySelectorAll('#answers-review .review-card');
  let shown = 0;
  cards.forEach(card => {
    const statusOk = reviewFilter.status === 'all' ||
      (reviewFilter.status === 'flagged' ? card.dataset.flagged === 'true' : card.dataset.status === reviewFilter.status);
    const domainOk = reviewFilter.domain === 'all' || card.dataset.domain === reviewFilter.domain;
    card.style.display = statusOk && domainOk ? '' : 'none';
    if (statusOk && domainOk) shown++;
  });
  document.querySelectorAll('.rf-chip').forEach(c =>
    c.classList.toggle('rf-chip-active', c.dataset.status === reviewFilter.status));
  document.querySelector('.rf-showing').textContent =
    shown === cards.length ? '' : shown ? `Showing ${shown} of ${cards.length} questions` : 'No questions match these filters.';
  const copyBtn = document.getElementById('copy-review-btn');
  copyBtn.disabled = shown === 0;
  copyBtn.textContent = `📋 Copy ${shown === cards.length ? 'all' : shown} for review`;
}

// ===== COPY FOR REVIEW =====
// Plain text of questions with options, answers and explanations, to paste into a chat and go over the doubts

// One question (runtime shape) as text; idx = its position in state.questions
function questionText(q, idx) {
  const a      = state.answers[q.id] || [];
  const letter = i => String.fromCharCode(65 + i);
  const status = !isAnswered(q) ? 'NOT ANSWERED' : isAnswerCorrect(q) ? 'CORRECT' : 'INCORRECT';
  const lines  = [`### Question ${idx + 1} · ${q.domain} · ${status}${state.flagged.has(q.id) ? ' · flagged' : ''}`, q.question, ''];

  if (isChoiceType(q)) {
    q.options.texts.forEach((text, i) => {
      const tags = [q.options.correctNew[i] && 'correct', a.includes(i) && 'my answer'].filter(Boolean);
      lines.push(`${letter(i)}) ${text}${tags.length ? `  [${tags.join(', ')}]` : ''}`);
    });
    if (q.options.explanations) {
      lines.push('', 'Explanations:');
      q.options.explanations.forEach((exp, i) => lines.push(`${letter(i)}) ${exp}`));
    }
  }
  if (q.type === 'ordering') {
    lines.push('My order:', ...(a.length ? a.map((item, pos) => `${pos + 1}. ${q.items[item]}`) : ['(not answered)']));
    lines.push('', 'Correct order:', ...q.items.map((text, i) =>
      `${i + 1}. ${text}${q.itemExplanations ? ` — ${q.itemExplanations[i]}` : ''}`));
  }
  if (q.type === 'matching') {
    q.prompts.forEach((prompt, k) => {
      const chosen = a[k];
      lines.push(`- ${prompt} → ${q.responses[q.correct[k]]}` +
        (chosen === q.correct[k] ? '  [my answer]' : `  [my answer: ${chosen == null ? 'none' : q.responses[chosen]}]`));
      if (q.promptExplanations) lines.push(`  ${q.promptExplanations[k]}`);
    });
  }
  if (q.explanation) lines.push('', `Summary: ${q.explanation}`);
  return lines.join('\n');
}

// Results screen: the questions the review filters show
function reviewText() {
  const { score, correct, total } = computeScore();
  const cards = [...document.querySelectorAll('#answers-review .review-card')];
  const shown = state.questions.map((q, idx) => ({ q, idx })).filter(({ idx }) => cards[idx].style.display !== 'none');
  const header = `${cert.code} ${state.practiceMode ? 'practice' : 'exam'} — score ${score}% (${correct}/${total}). ` +
    `${shown.length} question${shown.length === 1 ? '' : 's'} to review:`;
  return [header, ...shown.map(({ q, idx }) => questionText(q, idx))].join('\n\n');
}

function copyForReview() {
  copyText(document.getElementById('copy-review-btn'), reviewText());
}

// Practice mode, after the reveal: the current question only
function copyCurrentQuestion() {
  const q = state.questions[state.current];
  copyText(document.getElementById('copy-q-btn'),
    `${cert.code} practice — question to review:\n\n${questionText(q, state.current)}`);
}

function copyText(btn, text) {
  const done = () => {
    if (!btn.classList.contains('copied')) btn.dataset.label = btn.textContent; // a second click keeps the real label
    btn.textContent = '✓ Copied — paste it in the chat';
    btn.classList.add('copied');
    clearTimeout(btn.copiedTimer);
    btn.copiedTimer = setTimeout(() => { btn.textContent = btn.dataset.label; btn.classList.remove('copied'); }, 2500);
  };
  const fallback = () => { // file:// or older browsers without the async clipboard API
    const ta = document.createElement('textarea');
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    ta.remove();
    done();
  };
  if (navigator.clipboard) navigator.clipboard.writeText(text).then(done, fallback);
  else fallback();
}
