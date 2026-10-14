// ===== STATS — localStorage persistence =====

const MAX_SESSIONS  = 50;
const MAX_MISSED    = 15;

let statsView = 'sessions'; // 'sessions' | 'missed'

function saveSession(session) {
  const sessions = loadSessions();
  sessions.unshift(session);
  if (sessions.length > MAX_SESSIONS) sessions.pop();
  try { localStorage.setItem(cert.statsKey, JSON.stringify(sessions)); } catch(e) {}
}

function loadSessions() {
  try {
    const raw = localStorage.getItem(cert.statsKey);
    return raw ? JSON.parse(raw) : [];
  } catch(e) { return []; }
}

function clearStats() {
  localStorage.removeItem(cert.statsKey);
}

// ===== STATS PANEL RENDERING =====

function renderStatsPanel() {
  const el = document.getElementById('stats-panel');
  if (!el) return;

  document.querySelectorAll('.st-tab').forEach(t =>
    t.classList.toggle('st-tab-active', t.dataset.view === statsView));

  const sessions = loadSessions();
  if (sessions.length === 0) {
    el.innerHTML = '<p class="stats-empty">No sessions yet — complete a quiz to see your history.</p>';
    return;
  }

  if (statsView === 'missed') { renderMissedQuestions(el, sessions); return; }

  // Aggregates (exam mode only for meaningful stats)
  const examSessions = sessions.filter(s => s.modeType === 'exam');
  const avg  = examSessions.length
    ? Math.round(examSessions.reduce((s, x) => s + x.score, 0) / examSessions.length)
    : null;
  const best = examSessions.length
    ? Math.max(...examSessions.map(s => s.score))
    : null;

  // Weakest domain across all exam sessions
  const domainTotals = {};
  examSessions.forEach(s => {
    Object.entries(s.domains || {}).forEach(([d, v]) => {
      if (!domainTotals[d]) domainTotals[d] = { correct: 0, total: 0 };
      domainTotals[d].correct += v.correct;
      domainTotals[d].total   += v.total;
    });
  });
  let weakest = null, weakestPct = 101;
  Object.entries(domainTotals).forEach(([d, v]) => {
    if (v.total > 0) {
      const pct = Math.round((v.correct / v.total) * 100);
      if (pct < weakestPct) { weakestPct = pct; weakest = d; }
    }
  });

  // Summary metrics
  const metricsHtml = [
    avg  !== null ? `<div class="stats-metric"><span class="sm-val">${avg}%</span><span class="sm-lbl">Avg Score</span></div>`  : '',
    best !== null ? `<div class="stats-metric"><span class="sm-val">${best}%</span><span class="sm-lbl">Best Score</span></div>` : '',
    weakest       ? `<div class="stats-metric"><span class="sm-val sm-val-weak">${weakestPct}%</span><span class="sm-lbl">Weakest: ${esc(domainShort(weakest))}</span></div>` : '',
    `<div class="stats-metric"><span class="sm-val">${sessions.length}</span><span class="sm-lbl">Sessions</span></div>`,
  ].join('');

  // Sessions list with accordion
  const MODE_LABEL  = { 65: 'Full', 35: 'Short', 15: 'Flash' };

  const sessionsHtml = sessions.map((s, idx) => {
    const color    = scoreColor(s.score);
    const date     = new Date(s.date).toLocaleDateString('it-IT', { day: '2-digit', month: 'short', year: '2-digit' });
    const typeIcon = s.modeType === 'practice' ? '📖' : '🎯';
    const label    = MODE_LABEL[s.mode] || s.mode;

    // Domain breakdown rows (accordion body)
    const domainRows = Object.entries(s.domains || {}).map(([d, v]) => {
      const dpct  = v.total > 0 ? Math.round((v.correct / v.total) * 100) : 0;
      const dcolor = scoreColor(dpct);
      return `
        <div class="sr-domain-row">
          <span class="sr-domain-name">${esc(domainShort(d))}</span>
          <div class="sr-domain-bar-wrap"><div class="sr-domain-bar" style="width:${dpct}%;background:${dcolor}"></div></div>
          <span class="sr-domain-score" style="color:${dcolor}">${v.correct}/${v.total} · ${dpct}%</span>
        </div>`;
    }).join('');

    return `
      <div class="stats-session" data-idx="${idx}">
        <div class="stats-row sr-clickable">
          <span class="sr-date">${date}</span>
          <span class="sr-mode">${typeIcon} ${label}</span>
          <span class="sr-fraction">${s.correct}/${s.total}</span>
          <div class="sr-bar-wrap"><div class="sr-bar-fill" style="width:${s.score}%;background:${color}"></div></div>
          <span class="sr-score" style="color:${color}">${s.score}%</span>
          <span class="sr-chevron">▸</span>
        </div>
        <div class="sr-accordion" style="display:none">${domainRows}</div>
      </div>`;
  }).join('');

  el.innerHTML = `
    <div class="stats-summary">${metricsHtml}</div>
    <div class="stats-recent">${sessionsHtml}</div>
    <button class="btn-clear-stats" id="btn-clear-stats">Clear history</button>
  `;

  bindAccordions(el);

  document.getElementById('btn-clear-stats').addEventListener('click', () => {
    if (confirm('Clear all session history?')) { clearStats(); renderStatsPanel(); }
  });
}

// ===== MOST MISSED QUESTIONS =====

// Per-question tally across all sessions that recorded outcomes (older sessions are skipped)
function aggregateMissed(sessions) {
  const tally = {};
  const add = (ids, missed) => (ids || []).forEach(id => {
    if (!tally[id]) tally[id] = { seen: 0, missed: 0 };
    tally[id].seen++;
    if (missed) tally[id].missed++;
  });
  sessions.forEach(s => {
    if (!s.questions) return;
    add(s.questions.correct, false);
    add(s.questions.wrong,   true);
    add(s.questions.skipped, true);
  });
  return Object.entries(tally)
    .filter(([, v]) => v.missed > 0)
    .map(([id, v]) => ({ id: Number(id), ...v }))
    .sort((a, b) => b.missed - a.missed || b.missed / b.seen - a.missed / a.seen);
}

function renderMissedQuestions(el, sessions) {
  const byId   = new Map(cert.questions().map(q => [q.id, q]));
  const missed = aggregateMissed(sessions).filter(m => byId.has(m.id)).slice(0, MAX_MISSED);

  if (missed.length === 0) {
    el.innerHTML = '<p class="stats-empty">No missed questions recorded yet — they will appear here after your next quiz.</p>';
    return;
  }

  el.innerHTML = `<div class="stats-recent">${missed.map(m => {
    const q       = byId.get(m.id);
    const answers = q.correct.map(i => `<li>${esc(q.options[i])}</li>`).join('');
    return `
      <div class="stats-session">
        <div class="stats-row sr-clickable">
          <span class="mq-text">${esc(q.question)}</span>
          <span class="mq-count">${m.missed}/${m.seen} missed</span>
          <span class="sr-chevron">▸</span>
        </div>
        <div class="sr-accordion mq-detail" style="display:none">
          <span class="mq-domain">${esc(q.domain)}</span>
          <p class="mq-question">${esc(q.question)}</p>
          <ul class="mq-answers">${answers}</ul>
          <p class="mq-exp">${esc(q.explanation || '')}</p>
        </div>
      </div>`;
  }).join('')}</div>`;

  bindAccordions(el);
}

function bindAccordions(el) {
  el.querySelectorAll('.sr-clickable').forEach(row => {
    row.addEventListener('click', () => {
      const accordion = row.closest('.stats-session').querySelector('.sr-accordion');
      const chevron   = row.querySelector('.sr-chevron');
      const isOpen    = accordion.style.display !== 'none';
      accordion.style.display = isOpen ? 'none' : 'block';
      chevron.style.transform = isOpen ? '' : 'rotate(90deg)';
    });
  });
}
