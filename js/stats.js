// ===== STATS — localStorage persistence =====

const MAX_SESSIONS  = 50;
const MAX_MISSED    = 15;

let statsView = 'sessions'; // 'sessions' | 'progress' | 'missed'

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
  clearSeen();
}

// ===== STATS PANEL RENDERING =====

function renderStatsPanel() {
  const el = document.getElementById('stats-panel');
  if (!el) return;

  document.querySelectorAll('.st-tab').forEach(t =>
    t.classList.toggle('st-tab-active', t.dataset.view === statsView));
  el.classList.toggle('stats-panel-tall', statsView === 'progress');

  const sessions = loadSessions();
  if (sessions.length === 0) {
    el.innerHTML = '<p class="stats-empty">No sessions yet — complete a quiz to see your history.</p>';
    return;
  }

  if (statsView === 'missed')   { renderMissedQuestions(el, sessions); return; }
  if (statsView === 'progress') { renderProgress(el, sessions); return; }

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
    `<div class="stats-metric"><span class="sm-val">${loadSeen().size}/${cert.questions().length}</span><span class="sm-lbl">Questions seen</span></div>`,
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

// ===== PROGRESS (score over time + per-domain trend) =====

const PROGRESS_SESSIONS = 20;  // points on the chart
const TREND_WINDOW      = 5;   // sessions compared: last N vs the N before

function renderProgress(el, sessions) {
  const chrono = sessions.slice(0, PROGRESS_SESSIONS).reverse();   // oldest → newest
  if (chrono.length < 2) {
    el.innerHTML = '<p class="stats-empty">Complete at least two quizzes to see your progress.</p>';
    return;
  }
  el.innerHTML = `${progressChart(chrono)}${domainTrend(sessions)}`;
  bindProgressTooltip(el, chrono);
}

// Single-series line chart, 0–100% y axis, dashed line at the passing threshold
function progressChart(points) {
  const W = 400, H = 140, L = 30, R = 8, T = 10, B = 18;
  const x = i => L + (points.length === 1 ? 0 : i * (W - L - R) / (points.length - 1));
  const y = v => T + (100 - v) * (H - T - B) / 100;
  const path = points.map((s, i) => `${i ? 'L' : 'M'}${x(i).toFixed(1)},${y(s.score).toFixed(1)}`).join(' ');
  const grid = [0, 50, 100].map(v => `
    <line class="pg-grid" x1="${L}" x2="${W - R}" y1="${y(v)}" y2="${y(v)}"/>
    <text class="pg-axis" x="${L - 6}" y="${y(v) + 3}" text-anchor="end">${v}%</text>`).join('');
  const dots = points.map((s, i) => `
    <circle class="pg-dot" cx="${x(i)}" cy="${y(s.score)}" r="4"/>
    <circle class="pg-hit" cx="${x(i)}" cy="${y(s.score)}" r="12" data-i="${i}"/>`).join('');
  return `
    <div class="pg-chart">
      <div class="pg-title">Score per session (last ${points.length})</div>
      <svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Score per session over time">
        ${grid}
        <line class="pg-pass" x1="${L}" x2="${W - R}" y1="${y(cert.passPct)}" y2="${y(cert.passPct)}"/>
        <text class="pg-pass-label" x="${L + 4}" y="${y(cert.passPct) - 4}">pass ${cert.passPct}%</text>
        <path class="pg-line" d="${path}"/>
        ${dots}
      </svg>
      <div class="pg-tip" style="display:none"></div>
    </div>`;
}

function bindProgressTooltip(el, points) {
  const tip = el.querySelector('.pg-tip');
  const MODE_LABEL = { 65: 'Full', 35: 'Short', 15: 'Flash' };
  el.querySelectorAll('.pg-hit').forEach(hit => {
    hit.addEventListener('mouseenter', () => {
      const s    = points[Number(hit.dataset.i)];
      const date = new Date(s.date).toLocaleDateString('it-IT', { day: '2-digit', month: 'short' });
      tip.textContent = `${date} · ${s.modeType === 'practice' ? 'Practice' : 'Exam'} ${MODE_LABEL[s.mode] || s.mode} · ${s.correct}/${s.total} · ${s.score}%`;
      const box = el.querySelector('.pg-chart').getBoundingClientRect();
      const dot = hit.getBoundingClientRect();
      tip.style.display = 'block';
      tip.style.left = `${Math.min(dot.left - box.left + dot.width / 2, box.width - tip.offsetWidth / 2)}px`;
      tip.style.top  = `${dot.top - box.top - 6}px`;
    });
    hit.addEventListener('mouseleave', () => { tip.style.display = 'none'; });
  });
}

// Per domain: accuracy over the last TREND_WINDOW sessions vs the TREND_WINDOW before
function domainTrend(sessions) {
  const accuracy = (list, d) => {
    let c = 0, t = 0;
    list.forEach(s => { const v = (s.domains || {})[d]; if (v) { c += v.correct; t += v.total; } });
    return t ? Math.round(100 * c / t) : null;
  };
  const recent = sessions.slice(0, TREND_WINDOW);
  const before = sessions.slice(TREND_WINDOW, TREND_WINDOW * 2);

  const rows = cert.domains.map(d => {
    const now  = accuracy(recent, d.name);
    if (now === null) return '';
    const prev  = accuracy(before, d.name);
    const delta = prev === null ? null : now - prev;
    const trend = delta === null ? '<span class="pg-delta">—</span>'
      : delta > 0 ? `<span class="pg-delta pg-up">▲ +${delta}</span>`
      : delta < 0 ? `<span class="pg-delta pg-down">▼ ${delta}</span>`
      : '<span class="pg-delta">= 0</span>';
    const color = scoreColor(now);
    return `
      <div class="sr-domain-row">
        <span class="sr-domain-name">${esc(d.short)}</span>
        <div class="sr-domain-bar-wrap"><div class="sr-domain-bar" style="width:${now}%;background:${color}"></div></div>
        <span class="pg-domain-pct">${now}%</span>
        ${trend}
      </div>`;
  }).join('');

  return `
    <div class="pg-domains">
      <div class="pg-title">By domain — last ${Math.min(TREND_WINDOW, sessions.length)} sessions vs previous ${TREND_WINDOW}</div>
      ${rows}
    </div>`;
}
