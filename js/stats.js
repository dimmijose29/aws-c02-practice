// ===== STATS — localStorage persistence =====

const STATS_KEY     = 'aws_clf_stats_v1';
const MAX_SESSIONS  = 50;

function saveSession(session) {
  const sessions = loadSessions();
  sessions.unshift(session);
  if (sessions.length > MAX_SESSIONS) sessions.pop();
  try { localStorage.setItem(STATS_KEY, JSON.stringify(sessions)); } catch(e) {}
}

function loadSessions() {
  try {
    const raw = localStorage.getItem(STATS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch(e) { return []; }
}

function clearStats() {
  localStorage.removeItem(STATS_KEY);
}

// ===== STATS PANEL RENDERING =====

function renderStatsPanel() {
  const el = document.getElementById('stats-panel');
  if (!el) return;

  const sessions = loadSessions();
  if (sessions.length === 0) {
    el.innerHTML = '<p class="stats-empty">No sessions yet — complete a quiz to see your history.</p>';
    return;
  }

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

  // Shorten domain name for display
  const shortDomain = d => {
    if (!d) return '';
    const map = {
      'Cloud Concepts':                 'Cloud Concepts',
      'Security & Compliance':          'Security',
      'Cloud Technology & Services':    'Tech & Services',
      'Billing, Pricing & Support':     'Billing',
    };
    return map[d] || d;
  };

  // Summary metrics
  const metricsHtml = [
    avg  !== null ? `<div class="stats-metric"><span class="sm-val">${avg}%</span><span class="sm-lbl">Avg Score</span></div>`  : '',
    best !== null ? `<div class="stats-metric"><span class="sm-val">${best}%</span><span class="sm-lbl">Best Score</span></div>` : '',
    weakest       ? `<div class="stats-metric"><span class="sm-val sm-val-weak">${weakestPct}%</span><span class="sm-lbl">Weakest: ${shortDomain(weakest)}</span></div>` : '',
    `<div class="stats-metric"><span class="sm-val">${sessions.length}</span><span class="sm-lbl">Sessions</span></div>`,
  ].join('');

  // Recent sessions list
  const MODE_LABEL = { 65: 'Full', 35: 'Short', 15: 'Flash' };
  const recentHtml = sessions.slice(0, 5).map(s => {
    const color    = s.score >= 70 ? 'var(--correct)' : s.score >= 50 ? 'var(--flagged)' : 'var(--incorrect)';
    const date     = new Date(s.date).toLocaleDateString('it-IT', { day: '2-digit', month: 'short' });
    const typeIcon = s.modeType === 'practice' ? '📖' : '🎯';
    const label    = MODE_LABEL[s.mode] || s.mode;
    return `
      <div class="stats-row">
        <span class="sr-date">${date}</span>
        <span class="sr-mode">${typeIcon} ${label}</span>
        <div class="sr-bar-wrap"><div class="sr-bar-fill" style="width:${s.score}%;background:${color}"></div></div>
        <span class="sr-score" style="color:${color}">${s.score}%</span>
      </div>`;
  }).join('');

  el.innerHTML = `
    <div class="stats-summary">${metricsHtml}</div>
    <div class="stats-recent">${recentHtml}</div>
    <button class="btn-clear-stats" id="btn-clear-stats">Clear history</button>
  `;

  document.getElementById('btn-clear-stats').addEventListener('click', () => {
    if (confirm('Clear all session history?')) { clearStats(); renderStatsPanel(); }
  });
}
