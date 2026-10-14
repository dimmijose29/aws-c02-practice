// ===== QUIZ IN PROGRESS (survives reloads, closed tabs, Back to Home) =====

const IN_PROGRESS_KEY = 'aws_quiz_in_progress_v1';

// Only ids and the option order are stored; questions are rebuilt from the bank,
// so later fixes to a question's text are picked up when resuming.
function saveInProgress() {
  if (!state.questions.length || state.submitted) return;
  const saved = {
    cert:         cert.id,
    mode:         state.mode,
    practiceMode: state.practiceMode,
    current:      state.current,
    endTime:      state.endTime,
    questions:    state.questions.map(q => ({ id: q.id, order: displayOrder(q) })),
    answers:      state.answers,
    revealed:     [...state.revealed],
    flagged:      [...state.flagged],
  };
  try { localStorage.setItem(IN_PROGRESS_KEY, JSON.stringify(saved)); } catch (e) {}
}

// Returns the saved quiz, or null if there is none or it no longer matches the bank
function loadInProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem(IN_PROGRESS_KEY));
    if (!saved || !CERTS[saved.cert]) return null;
    const bank = new Map(CERTS[saved.cert].questions().map(q => [q.id, q]));
    const ok = saved.questions.every(({ id, order }) =>
      bank.has(id) && order && order.length === displayOrderLength(bank.get(id)));
    return ok ? saved : null;
  } catch (e) { return null; }
}

function clearInProgress() {
  try { localStorage.removeItem(IN_PROGRESS_KEY); } catch (e) {}
}

// ===== SEEN QUESTIONS (new quizzes prefer questions not seen yet) =====

function seenKey() { return `${cert.statsKey}_seen`; }

function loadSeen() {
  try { return new Set(JSON.parse(localStorage.getItem(seenKey())) || []); }
  catch (e) { return new Set(); }
}

function markSeen(ids) {
  const seen = loadSeen();
  ids.forEach(id => seen.add(id));
  try { localStorage.setItem(seenKey(), JSON.stringify([...seen])); } catch (e) {}
}

function clearSeen() {
  try { localStorage.removeItem(seenKey()); } catch (e) {}
}
