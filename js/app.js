// ===== MODE TYPE SELECTION (start screen) =====

let selectedModeType = 'exam'; // 'exam' | 'practice'

// ===== SHUFFLE =====

function shuffleOptionsWithMapping(q) {
  const indices = q.options.map((_, i) => i);
  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }
  return {
    texts:        indices.map(i => q.options[i]),
    correctNew:   indices.map(i => q.correct.includes(i)),
    explanations: q.optionExplanations ? indices.map(i => q.optionExplanations[i]) : null
  };
}

// ===== START =====

function startQuiz(mode) {
  state.mode         = mode;
  state.practiceMode = selectedModeType === 'practice';
  state.submitted    = false;
  state.answers      = {};
  state.revealed     = new Set();
  state.flagged      = new Set();
  state.current      = 0;

  const pool = [...QUESTION_BANK];
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  const shuffled = pool;
  state.questions = shuffled.slice(0, mode).map(q => ({
    ...q,
    options: shuffleOptionsWithMapping(q)
  }));
  state.secondsLeft = mode === 65 ? 90 * 60 : mode === 35 ? 50 * 60 : 20 * 60;

  // Apply/remove practice mode class (controls layout via CSS)
  document.getElementById('quiz-screen')
    .classList.toggle('practice-mode', state.practiceMode);

  showScreen('quiz-screen');
  buildGrid();
  renderQuestion();

  // Show/hide practice score bar
  const scoreBar = document.getElementById('practice-score-bar');
  if (scoreBar) scoreBar.style.display = state.practiceMode ? 'flex' : 'none';

  if (!state.practiceMode) startTimer(submitExam);
}

// ===== OPTION SELECTION =====

function selectOption(idx) {
  const q            = state.questions[state.current];
  const correctCount = q.options.correctNew.filter(Boolean).length;
  let   selected     = state.answers[q.id] ? [...state.answers[q.id]] : [];

  if (q.type === 'multiple') {
    const pos = selected.indexOf(idx);
    if (pos > -1)                            selected.splice(pos, 1);
    else if (selected.length < correctCount) selected.push(idx);
  } else {
    selected = [idx];
  }

  state.answers[q.id] = selected;
  renderQuestion();
}

// ===== FLAG (exam mode only) =====

function toggleFlag() {
  if (state.practiceMode) return;
  const q = state.questions[state.current];
  if (state.flagged.has(q.id)) state.flagged.delete(q.id);
  else                          state.flagged.add(q.id);
  renderQuestion();
}

// ===== NAVIGATION =====

function prevQuestion() {
  if (state.current > 0) { state.current--; renderQuestion(); }
}

function nextQuestion() {
  if (state.practiceMode) {
    const q          = state.questions[state.current];
    const isRevealed = state.revealed.has(q.id);
    const isLast     = state.current === state.questions.length - 1;

    if (!isRevealed) {
      // First click: reveal answer and explanations, stay on question
      state.revealed.add(q.id);
      renderQuestion();
    } else if (isLast) {
      // Last question already revealed: go to results
      submitExam();
    } else {
      // Advance to next question
      state.current++;
      renderQuestion();
    }
  } else {
    if (state.current < state.questions.length - 1) { state.current++; renderQuestion(); }
  }
}

function goToQuestion(idx) {
  state.current = idx;
  renderQuestion();
  // Close sidebar on mobile after selection
  document.getElementById('q-nav').classList.remove('nav-open');
}

// ===== SUBMIT & RESTART =====

function submitExam() {
  stopTimer();
  state.submitted = true;
  closeReviewModal();
  calculateResults();
  showScreen('results-screen');
}

function restartQuiz() {
  stopTimer();
  // Reset quiz-screen layout classes
  document.getElementById('quiz-screen').classList.remove('practice-mode');
  resetState();
  showScreen('start-screen');
}

// ===== EVENT WIRING =====

// Mode type toggle (Exam / Practice)
document.querySelectorAll('.mtt-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    selectedModeType = btn.dataset.type;
    document.querySelectorAll('.mtt-btn').forEach(b => b.classList.remove('mtt-active'));
    btn.classList.add('mtt-active');
  });
});

// Start screen: mode cards
document.querySelectorAll('.mode-card').forEach(card => {
  card.addEventListener('click', () => startQuiz(Number(card.dataset.mode)));
});

// Mobile sidebar toggle (exam mode only)
document.getElementById('btn-nav-toggle').addEventListener('click', () => {
  document.getElementById('q-nav').classList.toggle('nav-open');
});
document.getElementById('nav-close-btn').addEventListener('click', () => {
  document.getElementById('q-nav').classList.remove('nav-open');
});

// Quiz screen controls
document.getElementById('flag-btn').addEventListener('click', toggleFlag);
document.querySelector('.btn-submit-exam').addEventListener('click', showReviewModal);
document.getElementById('prev-btn').addEventListener('click', prevQuestion);
document.getElementById('next-btn').addEventListener('click', nextQuestion);

// Option selection — event delegation (ignore clicks when revealed in practice mode)
document.getElementById('options-list').addEventListener('click', e => {
  const item = e.target.closest('.option-item');
  if (!item) return;
  const q = state.questions[state.current];
  if (state.practiceMode && state.revealed.has(q.id)) return; // locked after reveal
  selectOption(Number(item.dataset.idx));
});

// Sidebar grid — event delegation (disabled in practice mode)
document.getElementById('question-grid').addEventListener('click', e => {
  if (state.practiceMode) return;
  const btn = e.target.closest('.grid-btn');
  if (btn) goToQuestion(Number(btn.dataset.idx));
});

// Review modal
document.getElementById('review-list').addEventListener('click', e => {
  const item = e.target.closest('.review-item');
  if (item) { goToQuestion(Number(item.dataset.idx)); closeReviewModal(); }
});
document.querySelector('.modal-actions .btn-secondary').addEventListener('click', closeReviewModal);
document.querySelector('.modal-actions .btn-danger').addEventListener('click', submitExam);

// Results screen
document.querySelector('.results-footer .btn-primary').addEventListener('click', restartQuiz);

// ===== KEYBOARD SHORTCUTS =====

document.addEventListener('keydown', e => {
  if (!document.getElementById('quiz-screen').classList.contains('active')) return;
  if (document.getElementById('review-modal').style.display !== 'none') return;

  if (e.key === 'ArrowRight' || e.key === 'ArrowDown') { nextQuestion(); return; }
  if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp') {
    if (!state.practiceMode) { prevQuestion(); } return;
  }
  if (e.key === 'f' || e.key === 'F') { toggleFlag(); return; }

  // Number/letter shortcuts disabled when revealed (answer locked)
  const q = state.questions && state.questions[state.current];
  if (q && state.practiceMode && state.revealed.has(q.id)) return;

  const numMap = { '1': 0, '2': 1, '3': 2, '4': 3, 'a': 0, 'b': 1, 'c': 2, 'd': 3 };
  const mapped = numMap[e.key.toLowerCase()];
  if (mapped !== undefined) selectOption(mapped);
});
