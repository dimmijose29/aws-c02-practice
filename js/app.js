// ===== MODE TYPE & DOMAIN SELECTION (start screen) =====

let selectedModeType = 'exam'; // 'exam' | 'practice'

let selectedDomains = new Set(); // filled by applyCert() — all domains selected by default

// ===== CERTIFICATION =====

// Rebuild every cert-specific part of the start screen for the active `cert`
function applyCert() {
  selectedDomains = new Set(cert.domains.map(d => d.name));

  document.title = `${cert.name} — Practice Exam`;
  document.getElementById('favicon').href = cert.favicon;
  ['start-logo', 'hdr-logo'].forEach(id => {
    const img = document.getElementById(id);
    img.style.visibility = '';
    img.onerror = () => { img.style.visibility = 'hidden'; }; // logo file not added yet
    img.src = cert.logo;
    img.alt = cert.name;
  });
  document.querySelectorAll('.cert-code').forEach(el => { el.textContent = cert.code; });
  document.getElementById('cs-title').textContent = `${cert.code} Study Cheat Sheet`;
  document.getElementById('btn-cheatsheet').style.display = cert.cheatsheet() ? '' : 'none';

  document.getElementById('cert-switch').querySelectorAll('.cert-btn').forEach(b =>
    b.classList.toggle('cert-btn-active', b.dataset.cert === cert.id));

  document.getElementById('domains-grid').innerHTML = cert.domains.map(d => `
    <div class="domain-pill">
      <span class="d-pct">${d.weight}%</span>
      <span class="d-name">${esc(d.name)}</span>
    </div>`).join('');

  document.getElementById('domain-filter').innerHTML = cert.domains.map(d =>
    `<button class="df-pill df-pill-active" data-domain="${esc(d.name)}">${d.icon} ${esc(d.label)}</button>`
  ).join('');

  document.querySelectorAll('.mode-card').forEach(card => {
    card.querySelector('.mode-t').textContent = `⏱ ${cert.minutes[card.dataset.mode]} min`;
  });

  const passText = `Passing score: ${cert.passScore} / 1000 (≈ ${cert.passPct}%)`;
  document.getElementById('passing-note').textContent        = passText;
  document.getElementById('passing-note-result').textContent = passText;

  renderStatsPanel();
}

function selectCert(id) {
  if (!CERTS[id]) return;
  cert = CERTS[id];
  try { localStorage.setItem(CERT_STORAGE_KEY, id); } catch (e) {}
  applyCert();
}

// ?cert=<id> in the URL wins, then the last choice, then the first cert
function initialCertId() {
  const fromUrl = new URLSearchParams(location.search).get('cert');
  if (CERTS[fromUrl]) return fromUrl;
  try {
    const saved = localStorage.getItem(CERT_STORAGE_KEY);
    if (CERTS[saved]) return saved;
  } catch (e) {}
  return Object.keys(CERTS)[0];
}

// ===== SHUFFLE =====

// Fisher-Yates, in place
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// `order` (original option indices in display order) is given when resuming a saved quiz
function shuffleOptionsWithMapping(q, order) {
  const indices = order || shuffle(q.options.map((_, i) => i));
  return {
    order:        indices,
    texts:        indices.map(i => q.options[i]),
    correctNew:   indices.map(i => q.correct.includes(i)),
    explanations: q.optionExplanations ? indices.map(i => q.optionExplanations[i]) : null
  };
}

// ===== QUESTION SELECTION =====

// Draw `count` questions from the selected domains, split by the official domain
// weights (largest remainder rounding), then shuffle the final order.
// Within each domain, questions not seen in earlier quizzes come first; once the whole
// bank has been seen the cycle starts over.
function pickQuestions(count) {
  const bank = cert.questions();
  let seen = loadSeen();
  if (bank.every(q => seen.has(q.id))) { clearSeen(); seen = new Set(); }
  const unseenFirst = qs => [...shuffle(qs.filter(q => !seen.has(q.id))), ...shuffle(qs.filter(q => seen.has(q.id)))];

  const domains = cert.domains.filter(d => selectedDomains.has(d.name));
  const pools   = new Map(domains.map(d => [d.name, unseenFirst(bank.filter(q => q.domain === d.name))]));
  const total   = Math.min(count, [...pools.values()].reduce((n, p) => n + p.length, 0));
  const weight  = domains.reduce((n, d) => n + d.weight, 0);

  const quotas = domains.map(d => {
    const exact = total * d.weight / weight;
    return { name: d.name, n: Math.floor(exact), rest: exact % 1 };
  });
  let missing = total - quotas.reduce((n, q) => n + q.n, 0);
  [...quotas].sort((a, b) => b.rest - a.rest).forEach(q => { if (missing > 0) { q.n++; missing--; } });

  // A domain with too few questions hands its shortfall to the others
  const picked = [];
  quotas.forEach(q => picked.push(...pools.get(q.name).splice(0, q.n)));
  const leftovers = unseenFirst([...pools.values()].flat());
  picked.push(...leftovers.slice(0, total - picked.length));

  return shuffle(picked);
}

// ===== START =====

function startQuiz(mode) {
  if (loadInProgress() &&
      !confirm('You have an unfinished quiz. Start a new one and discard it?')) return;

  state.mode         = mode;
  state.practiceMode = selectedModeType === 'practice';
  state.submitted    = false;
  state.answers      = {};
  state.revealed     = new Set();
  state.flagged      = new Set();
  state.current      = 0;

  state.questions = pickQuestions(mode).map(q => buildRuntimeQuestion(q));
  // Scale the time when the domain filter leaves fewer questions than the mode asks for
  const baseSeconds = cert.minutes[mode] * 60;
  state.secondsLeft = Math.ceil((baseSeconds * state.questions.length / mode) / 60) * 60;
  state.endTime     = Date.now() + state.secondsLeft * 1000;

  openQuizScreen();
}

// Shared by a new quiz and a resumed one: show the quiz screen for the current state
function openQuizScreen() {
  // Apply/remove practice mode class (controls layout via CSS)
  document.getElementById('quiz-screen')
    .classList.toggle('practice-mode', state.practiceMode);

  showScreen('quiz-screen');
  buildGrid();
  update();

  // Show/hide practice score bar
  const scoreBar = document.getElementById('practice-score-bar');
  if (scoreBar) scoreBar.style.display = state.practiceMode ? 'flex' : 'none';

  if (!state.practiceMode) {
    if (state.endTime <= Date.now()) { submitExam(); return; } // time ran out while away
    startTimer(submitExam);
  }
}

// Re-render after any change to the quiz state and persist it
function update() {
  renderQuestion();
  saveInProgress();
}

// ===== RESUME =====

function resumeQuiz() {
  const saved = loadInProgress();
  if (!saved) { renderResumeBanner(); return; }
  if (saved.cert !== cert.id) selectCert(saved.cert);

  const bank = new Map(cert.questions().map(q => [q.id, q]));
  resetState();
  state.mode         = saved.mode;
  state.practiceMode = saved.practiceMode;
  state.current      = saved.current;
  state.endTime      = saved.endTime;
  state.answers      = saved.answers;
  state.revealed     = new Set(saved.revealed);
  state.flagged      = new Set(saved.flagged);
  state.questions    = saved.questions.map(({ id, order }) => buildRuntimeQuestion(bank.get(id), order));
  openQuizScreen();
}

function renderResumeBanner() {
  const banner = document.getElementById('resume-banner');
  const saved  = loadInProgress();
  if (!saved) { banner.style.display = 'none'; return; }

  const c     = CERTS[saved.cert];
  const kind  = saved.practiceMode ? 'practice' : 'exam';
  const left  = Math.max(0, Math.ceil((saved.endTime - Date.now()) / 60000));
  const time  = saved.practiceMode ? '' : left > 0 ? ` · ${left} min left` : ' · time is up';
  document.getElementById('resume-text').textContent =
    `Unfinished ${c.code} ${kind} — question ${saved.current + 1} of ${saved.questions.length}${time}`;
  banner.style.display = '';
}

// ===== OPTION SELECTION =====

function selectOption(idx) {
  const q            = state.questions[state.current];
  if (!isChoiceType(q)) return;
  const correctCount = q.options.correctNew.filter(Boolean).length;
  if (idx >= q.options.texts.length) return;
  let   selected     = state.answers[q.id] ? [...state.answers[q.id]] : [];

  if (q.type === 'multiple') {
    const pos = selected.indexOf(idx);
    if (pos > -1)                            selected.splice(pos, 1);
    else if (selected.length < correctCount) selected.push(idx);
  } else {
    selected = [idx];
  }

  state.answers[q.id] = selected;
  update();
}

// ===== ORDERING & MATCHING ANSWERS =====

// Move the item at `pos` one step up (-1) or down (+1)
function moveOrderingItem(pos, dir) {
  const q     = state.questions[state.current];
  const order = [...currentOrder(q)];
  const to    = pos + dir;
  if (to < 0 || to >= order.length) return;
  [order[pos], order[to]] = [order[to], order[pos]];
  state.answers[q.id] = order;
  update();
}

// Accept the order as displayed without moving anything
function confirmOrdering() {
  const q = state.questions[state.current];
  state.answers[q.id] = [...currentOrder(q)];
  update();
}

function setMatch(k, value) {
  const q      = state.questions[state.current];
  const answer = state.answers[q.id] ? [...state.answers[q.id]] : q.prompts.map(() => null);
  answer[k] = value === '' ? null : Number(value);
  if (answer.every(r => r === null)) delete state.answers[q.id];
  else state.answers[q.id] = answer;
  update();
}

// ===== FLAG (exam mode only) =====

function toggleFlag() {
  if (state.practiceMode) return;
  const q = state.questions[state.current];
  if (state.flagged.has(q.id)) state.flagged.delete(q.id);
  else                          state.flagged.add(q.id);
  update();
}

// ===== NAVIGATION =====

function prevQuestion() {
  if (state.current > 0) { state.current--; update(); }
}

function nextQuestion() {
  if (state.practiceMode) {
    const q          = state.questions[state.current];
    const isRevealed = state.revealed.has(q.id);
    const isLast     = state.current === state.questions.length - 1;

    if (!isRevealed) {
      // First click: reveal answer and explanations, stay on question
      state.revealed.add(q.id);
      update();
    } else if (isLast) {
      // Last question already revealed: go to results
      submitExam();
    } else {
      // Advance to next question
      state.current++;
      update();
    }
  } else {
    if (state.current < state.questions.length - 1) { state.current++; update(); }
  }
}

function goToQuestion(idx) {
  state.current = idx;
  update();
  // Close sidebar on mobile after selection
  document.getElementById('q-nav').classList.remove('nav-open');
}

// ===== SUBMIT & RESTART =====

function submitExam() {
  stopTimer();
  state.submitted = true;
  clearInProgress();
  markSeen(state.questions.map(q => q.id));
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
  renderResumeBanner();
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

// Domain filter pills
document.getElementById('domain-filter').addEventListener('click', e => {
  const pill = e.target.closest('.df-pill');
  if (!pill) return;
  const domain = pill.dataset.domain;

  if (selectedDomains.has(domain)) {
    // Don't allow deselecting all
    if (selectedDomains.size > 1) selectedDomains.delete(domain);
  } else {
    selectedDomains.add(domain);
  }

  document.querySelectorAll('.df-pill').forEach(p => {
    p.classList.toggle('df-pill-active', selectedDomains.has(p.dataset.domain));
  });
});

// Cheat sheet navigation
document.getElementById('btn-cheatsheet').addEventListener('click', () => {
  activeDomain = 0;
  renderCheatsheet();
  showScreen('cheatsheet-screen');
});
document.getElementById('btn-cs-back').addEventListener('click', () => {
  showScreen('start-screen');
});

// Stats panel view tabs (Sessions / Most missed)
document.getElementById('stats-tabs').addEventListener('click', e => {
  const tab = e.target.closest('.st-tab');
  if (!tab) return;
  statsView = tab.dataset.view;
  renderStatsPanel();
});

// Certification switch (only shown when more than one cert is available)
const certSwitch = document.getElementById('cert-switch');
if (Object.keys(CERTS).length > 1) {
  // Ordered by exam version suffix (C01, C02, C03…), independent of the order in CERTS
  const byVersion = (a, b) => a.code.slice(-2).localeCompare(b.code.slice(-2)) || a.code.localeCompare(b.code);
  certSwitch.innerHTML = Object.values(CERTS).sort(byVersion).map(c =>
    `<button class="cert-btn" data-cert="${c.id}">
       <span class="cert-btn-name">${esc(c.shortName)}</span>
       <span class="cert-btn-code">${c.code}</span>
     </button>`).join('');
  certSwitch.style.display = '';
}
certSwitch.addEventListener('click', e => {
  const btn = e.target.closest('.cert-btn');
  if (btn) selectCert(btn.dataset.cert);
});

// Theme toggle: starts from the OS preference, a click stores an explicit choice
function isDarkTheme() {
  const t = document.documentElement.dataset.theme;
  return t ? t === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
}
function renderThemeToggle() {
  document.getElementById('theme-toggle').textContent = isDarkTheme() ? '☀️' : '🌙';
}
document.getElementById('theme-toggle').addEventListener('click', () => {
  const next = isDarkTheme() ? 'light' : 'dark';
  document.documentElement.dataset.theme = next;
  try { localStorage.setItem('aws_theme', next); } catch (e) {}
  renderThemeToggle();
});
matchMedia('(prefers-color-scheme: dark)').addEventListener('change', renderThemeToggle);
renderThemeToggle();

// Resume banner (unfinished quiz saved in localStorage)
document.getElementById('btn-resume').addEventListener('click', resumeQuiz);
document.getElementById('btn-discard').addEventListener('click', () => {
  if (confirm('Discard the unfinished quiz?')) { clearInProgress(); renderResumeBanner(); }
});

// Init start screen (domains, filter, timings, stats) for the initial cert
cert = CERTS[initialCertId()];
applyCert();
renderResumeBanner();

// Start screen: mode cards
document.querySelectorAll('.mode-card').forEach(card => {
  card.addEventListener('click', () => startQuiz(Number(card.dataset.mode)));
});

// Back to home button
document.getElementById('btn-home').addEventListener('click', restartQuiz);

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

// Ordering buttons and matching dropdowns (not available once revealed in practice mode)
document.getElementById('options-list').addEventListener('click', e => {
  const move = e.target.closest('.ord-btn');
  if (move) { moveOrderingItem(Number(move.dataset.pos), Number(move.dataset.dir)); return; }
  if (e.target.closest('.ord-confirm')) confirmOrdering();
});
document.getElementById('options-list').addEventListener('change', e => {
  if (e.target.matches('.match-select')) setMatch(Number(e.target.dataset.k), e.target.value);
});

// Keyboard access to options: Tab to focus, Enter/Space to select
document.getElementById('options-list').addEventListener('keydown', e => {
  if (e.key !== 'Enter' && e.key !== ' ') return;
  const item = e.target.closest('.option-item[tabindex]');
  if (!item) return;
  e.preventDefault();
  const idx = Number(item.dataset.idx);
  selectOption(idx);
  // renderQuestion() rebuilt the list — keep focus on the same option
  const again = document.querySelector(`#options-list .option-item[data-idx="${idx}"]`);
  if (again) again.focus();
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

// Results review filters — status chips and domain select (delegated: rebuilt on every result)
document.getElementById('review-filters').addEventListener('click', e => {
  const chip = e.target.closest('.rf-chip');
  if (!chip) return;
  reviewFilter.status = chip.dataset.status;
  applyReviewFilter();
});
document.getElementById('review-filters').addEventListener('change', e => {
  if (!e.target.matches('.rf-domain')) return;
  reviewFilter.domain = e.target.value;
  applyReviewFilter();
});

// ===== KEYBOARD SHORTCUTS =====

document.addEventListener('keydown', e => {
  if (!document.getElementById('quiz-screen').classList.contains('active')) return;
  if (document.getElementById('review-modal').style.display !== 'none') return;
  if (e.metaKey || e.ctrlKey || e.altKey) return; // leave browser shortcuts (Cmd+C, Cmd+F…) alone
  if (e.target.matches('select, input, textarea')) return; // arrows/letters belong to the form control

  if (e.key === 'ArrowRight' || e.key === 'ArrowDown') { nextQuestion(); return; }
  if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp') {
    if (!state.practiceMode) { prevQuestion(); } return;
  }
  if (e.key === 'f' || e.key === 'F') { toggleFlag(); return; }

  // Number/letter shortcuts disabled when revealed (answer locked)
  const q = state.questions && state.questions[state.current];
  if (q && state.practiceMode && state.revealed.has(q.id)) return;

  const numMap = { '1': 0, '2': 1, '3': 2, '4': 3, '5': 4, 'a': 0, 'b': 1, 'c': 2, 'd': 3, 'e': 4 };
  const mapped = numMap[e.key.toLowerCase()];
  if (mapped !== undefined) selectOption(mapped);
});
