// ===== HELPERS =====

function esc(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// ===== SCREEN =====

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo(0, 0);
}

// ===== QUESTION RENDERING =====

function renderQuestion() {
  const q     = state.questions[state.current];
  const total = state.questions.length;
  const isRevealed = state.practiceMode && state.revealed.has(q.id);

  // Header progress
  document.getElementById('progress-text').textContent =
    `Question ${state.current + 1} of ${total}`;
  document.getElementById('progress-fill').style.width =
    `${((state.current + 1) / total) * 100}%`;

  // Meta
  document.getElementById('q-domain-badge').textContent = q.domain;
  document.getElementById('q-number').textContent = `Question ${state.current + 1}`;
  document.getElementById('q-text').textContent = q.question;

  // Multi-select hint (hidden when revealed — answer is locked)
  const hintEl       = document.getElementById('q-hint');
  const correctCount = q.options.correctNew.filter(Boolean).length;
  if (q.type === 'multiple' && !isRevealed) {
    hintEl.style.display = 'flex';
    const word = correctCount === 2 ? 'TWO' : correctCount === 3 ? 'THREE' : correctCount;
    document.getElementById('q-hint-count').textContent = word;
  } else {
    hintEl.style.display = 'none';
  }

  // Flag button (exam mode only)
  if (!state.practiceMode) {
    const isFlagged = state.flagged.has(q.id);
    document.getElementById('flag-btn').classList.toggle('flagged', isFlagged);
    document.getElementById('flag-label').textContent =
      isFlagged ? 'Flagged' : 'Flag for Review';
  }

  // Options
  const selected = state.answers[q.id] || [];
  const list     = document.getElementById('options-list');
  list.innerHTML = '';

  if (isRevealed) {
    renderRevealedOptions(q, selected, list);
  } else {
    renderNormalOptions(q, selected, list);
  }

  // Inline explanation box (practice mode only)
  const expBox = document.getElementById('practice-explanation');
  if (isRevealed) {
    expBox.innerHTML = `<strong>Correct answer:</strong> ${esc(q.explanation)}`;
    expBox.style.display = 'block';
  } else {
    expBox.style.display = 'none';
  }

  // Live score (practice mode only)
  if (state.practiceMode) updatePracticeScore();

  // Navigation buttons
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');

  if (state.practiceMode) {
    prevBtn.style.display = 'none';
    const isLast = state.current === state.questions.length - 1;
    nextBtn.disabled = false;
    if (!isRevealed) {
      nextBtn.textContent = (selected.length > 0) ? 'Check Answer ✓' : 'Skip →';
    } else {
      nextBtn.textContent = isLast ? '📊 View Results' : 'Next Question →';
    }
  } else {
    prevBtn.style.display = '';
    prevBtn.disabled = state.current === 0;
    nextBtn.disabled  = state.current === state.questions.length - 1;
    nextBtn.textContent = 'Next →';
  }

  updateGridHighlight();
}

function renderNormalOptions(q, selected, list) {
  q.options.texts.forEach((text, idx) => {
    const div      = document.createElement('div');
    div.className  = 'option-item' +
      (q.type === 'multiple' ? ' multi' : '') +
      (selected.includes(idx) ? ' opt-selected' : '');
    div.dataset.idx = idx;

    const marker       = document.createElement('div');
    marker.className   = 'option-marker';
    marker.textContent = String.fromCharCode(65 + idx);

    const textEl       = document.createElement('div');
    textEl.className   = 'option-text';
    textEl.textContent = text;

    div.append(marker, textEl);
    list.appendChild(div);
  });
}

function renderRevealedOptions(q, selected, list) {
  q.options.texts.forEach((text, idx) => {
    const isCorrect  = q.options.correctNew[idx];
    const isSelected = selected.includes(idx);

    let extraClass = '';
    let mark = String.fromCharCode(65 + idx);

    if (isCorrect)              { extraClass = ' opt-rev-correct'; mark = '✓'; }
    else if (isSelected)        { extraClass = ' opt-rev-wrong';   mark = '✗'; }
    else                        { extraClass = ' opt-rev-neutral'; }

    const div      = document.createElement('div');
    div.className  = 'option-item option-revealed' + extraClass;

    const marker       = document.createElement('div');
    marker.className   = 'option-marker';
    marker.textContent = mark;

    const content      = document.createElement('div');
    content.className  = 'option-content';

    const textEl       = document.createElement('div');
    textEl.className   = 'option-text';
    textEl.textContent = text;
    content.appendChild(textEl);

    // Per-option explanation (if available on this question)
    if (q.options.explanations && q.options.explanations[idx]) {
      const expEl       = document.createElement('div');
      expEl.className   = 'option-inline-exp';
      expEl.textContent = q.options.explanations[idx];
      content.appendChild(expEl);
    }

    div.append(marker, content);
    list.appendChild(div);
  });
}

// ===== PRACTICE LIVE SCORE =====

function updatePracticeScore() {
  const bar      = document.getElementById('practice-score-bar');
  if (!bar) return;

  const revealed = [...state.revealed];
  const total    = revealed.length;
  let   correct  = 0;

  revealed.forEach(id => {
    const q = state.questions.find(q => q.id === id);
    if (!q) return;
    const userAnswers = state.answers[id] || [];
    const correctIdxs = q.options.correctNew
      .map((c, i) => c ? i : -1).filter(i => i >= 0).sort((a, b) => a - b);
    const userSorted  = [...userAnswers].sort((a, b) => a - b);
    if (JSON.stringify(userSorted) === JSON.stringify(correctIdxs)) correct++;
  });

  const pct = total > 0 ? Math.round((correct / total) * 100) : 0;
  const color = pct >= 70 ? 'var(--correct)' : pct >= 50 ? 'var(--flagged)' : 'var(--incorrect)';

  document.getElementById('ps-fraction').textContent = `${correct} / ${total}`;
  document.getElementById('ps-pct').textContent      = `${pct}%`;
  document.getElementById('ps-pct').style.color      = total > 0 ? color : 'var(--text-sec)';
  document.getElementById('ps-bar-fill').style.width  = `${pct}%`;
  document.getElementById('ps-bar-fill').style.background = total > 0 ? color : 'var(--border)';
}

// ===== QUESTION GRID =====

function buildGrid() {
  const grid = document.getElementById('question-grid');
  grid.innerHTML = '';
  state.questions.forEach((_, i) => {
    const btn       = document.createElement('button');
    btn.className   = 'grid-btn';
    btn.textContent = i + 1;
    btn.dataset.idx = i;
    grid.appendChild(btn);
  });
}

function updateGridBtn(idx) {
  const btn = document.querySelectorAll('.grid-btn')[idx];
  if (!btn) return;
  const q       = state.questions[idx];
  const answered = !!(state.answers[q.id] && state.answers[q.id].length);
  const flagged  = state.flagged.has(q.id);
  const revealed = state.revealed.has(q.id);

  btn.className = 'grid-btn';
  if (idx === state.current) btn.classList.add('gb-current');
  if (revealed)              btn.classList.add('gb-revealed');
  else if (flagged && answered) btn.classList.add('gb-flagged-answered');
  else if (flagged)          btn.classList.add('gb-flagged');
  else if (answered)         btn.classList.add('gb-answered');
}

function updateGridHighlight() {
  state.questions.forEach((_, i) => updateGridBtn(i));
}

// ===== REVIEW MODAL =====

function showReviewModal() {
  const total      = state.questions.length;
  const answered   = Object.values(state.answers).filter(a => a.length > 0).length;
  const unanswered = total - answered;
  const flagged    = state.flagged.size;

  document.getElementById('review-stats').innerHTML = `
    <div class="review-stat"><span class="rs-val">${total}</span><span class="rs-lbl">Total</span></div>
    <div class="review-stat"><span class="rs-val" style="color:var(--answered)">${answered}</span><span class="rs-lbl">Answered</span></div>
    <div class="review-stat"><span class="rs-val" style="color:var(--text-sec)">${unanswered}</span><span class="rs-lbl">Unanswered</span></div>
    <div class="review-stat"><span class="rs-val" style="color:var(--flagged)">${flagged}</span><span class="rs-lbl">Flagged</span></div>
  `;

  const list = document.getElementById('review-list');
  list.innerHTML = '';
  state.questions.forEach((q, i) => {
    const ans       = state.answers[q.id];
    const hasAnswer = !!(ans && ans.length);
    const isFlagged = state.flagged.has(q.id);
    const div       = document.createElement('div');
    div.className   = 'review-item' +
      (isFlagged ? ' ri-flagged' : hasAnswer ? ' ri-answered' : '');
    div.textContent = i + 1;
    div.dataset.idx = i;
    div.title = `Q${i + 1}: ${hasAnswer ? 'Answered' : 'Unanswered'}${isFlagged ? ' • Flagged' : ''}`;
    list.appendChild(div);
  });

  document.getElementById('review-modal').style.display = 'flex';
}

function closeReviewModal() {
  document.getElementById('review-modal').style.display = 'none';
}
