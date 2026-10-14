// ===== HELPERS =====

function esc(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function sortedIndices(boolArray) {
  return boolArray
    .map((c, i) => (c ? i : -1))
    .filter(i => i >= 0)
    .sort((a, b) => a - b);
}

// ===== SCORING =====

function computeScore() {
  let correct = 0, incorrect = 0, skipped = 0;
  const domainMap = {};
  const outcomes  = { correct: [], wrong: [], skipped: [] }; // question ids, for the stats history

  state.questions.forEach(q => {
    if (!domainMap[q.domain]) domainMap[q.domain] = { correct: 0, total: 0 };
    domainMap[q.domain].total++;

    const userAnswers  = state.answers[q.id] || [];
    const correctIdxs  = sortedIndices(q.options.correctNew);
    const userSorted   = [...userAnswers].sort((a, b) => a - b);
    const isExactMatch = JSON.stringify(userSorted) === JSON.stringify(correctIdxs);

    if (userAnswers.length === 0) {
      skipped++;
      outcomes.skipped.push(q.id);
    } else if (isExactMatch) {
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
  const passed = pct >= 70;

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
    ? `You scored ${pct}%, which meets the 70% passing threshold. Well done!`
    : `You scored ${pct}%. Review the questions below and focus on your weaker domains.`;

  // Score stats
  document.getElementById('score-pct').textContent      = pct + '%';
  document.getElementById('stat-correct').textContent   = correct;
  document.getElementById('stat-incorrect').textContent = incorrect;
  document.getElementById('stat-skip').textContent      = skipped;

  // Animated score arc
  const circ = 326.7;
  const arc  = document.getElementById('score-arc');
  arc.style.stroke = passed ? '#1E8A44' : (pct >= 50 ? '#FF9900' : '#D13212');
  setTimeout(() => { arc.style.strokeDashoffset = circ - (pct / 100) * circ; }, 100);

  // Domain breakdown
  const breakdown = document.getElementById('domain-breakdown');
  breakdown.innerHTML = '';
  Object.entries(domainMap).forEach(([domain, data]) => {
    const dpct  = data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0;
    const color = dpct >= 70 ? 'var(--correct)' : dpct >= 50 ? 'var(--orange)' : 'var(--incorrect)';
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

function renderAnswersReview() {
  const container = document.getElementById('answers-review');
  container.innerHTML = '';

  state.questions.forEach((q, idx) => {
    const userAnswers = state.answers[q.id] || [];
    const correctIdxs = sortedIndices(q.options.correctNew);
    const userSorted  = [...userAnswers].sort((a, b) => a - b);
    const isSkipped   = userAnswers.length === 0;
    const isCorrect   = !isSkipped && JSON.stringify(userSorted) === JSON.stringify(correctIdxs);

    let statusClass, statusText;
    if (isSkipped)      { statusClass = 'skipped';   statusText = 'Not Answered'; }
    else if (isCorrect) { statusClass = 'correct';   statusText = '✓ Correct'; }
    else                { statusClass = 'incorrect'; statusText = '✗ Incorrect'; }

    // Build options with color coding
    let optionsHtml = '';
    q.options.texts.forEach((text, i) => {
      const isCorrectOpt   = q.options.correctNew[i];
      const isUserSelected = userAnswers.includes(i);
      let cls = 'opt-normal', mark = '';
      if (isCorrectOpt)                         { cls = 'opt-correct'; mark = '✓'; }
      else if (isUserSelected && !isCorrectOpt) { cls = 'opt-wrong';   mark = '✗'; }

      // Per-option explanation shown for ALL options (if available)
      const optExp = q.options.explanations ? q.options.explanations[i] : null;
      const optExpHtml = optExp
        ? `<div class="rc-opt-exp">${esc(optExp)}</div>`
        : '';

      optionsHtml += `
        <div class="rc-opt ${cls}">
          <div class="rc-opt-left">
            <span class="rc-opt-mark">${mark || String.fromCharCode(65 + i)}</span>
            <span>${esc(text)}</span>
          </div>
          ${optExpHtml}
        </div>`;
    });

    container.innerHTML += `
      <div class="review-card">
        <div class="rc-header">
          <span class="rc-num">Question ${idx + 1} · ${esc(q.domain)}</span>
          <span class="rc-status ${statusClass}">${statusText}</span>
        </div>
        <div class="rc-body">
          <div class="rc-question">${esc(q.question)}</div>
          <div class="rc-options">${optionsHtml}</div>
        </div>
      </div>`;
  });
}
