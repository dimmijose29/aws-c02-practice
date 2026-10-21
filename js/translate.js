// ===== ITALIAN TRANSLATION =====
// Translations live in js/questions*-it.js (cert.translations(), keyed by question id, same fields as the bank).
// The Italian text is always rendered next to the English one as `.it-text`; the toggle only flips the
// `show-it` class on <body>, so no screen has to be rebuilt (except matching dropdowns, see matchingHtml).

const SHOW_IT_KEY = 'aws_show_it';

let showItalian = false;
try { showItalian = localStorage.getItem(SHOW_IT_KEY) === '1'; } catch (e) {}

function translationOf(q) {
  const bank = cert.translations && cert.translations();
  return bank ? bank[q.id] || null : null;
}

// Translated field of a question (string, or one item of an array field), null if missing
function tr(q, field, idx) {
  const t = translationOf(q);
  if (!t || t[field] === undefined) return null;
  return idx === undefined ? t[field] : t[field][idx] || null;
}

// Translated option for a displayed (shuffled) option index of a runtime choice question
function trOption(q, field, displayIdx) {
  return tr(q, field, q.options.order[displayIdx]);
}

// <span> (styled display:block) so it can also sit inside <span> and <p> elements
function itHtml(text, tag = 'span') {
  return text ? `<${tag} class="it-text" lang="it">${esc(text)}</${tag}>` : '';
}

// Translation of an explanation, styled like the explanation box it follows
function itExpHtml(text) {
  return text ? `<span class="it-text it-exp" lang="it">${esc(text)}</span>` : '';
}

function itElement(text) {
  if (!text) return null;
  const el = document.createElement('div');
  el.className   = 'it-text';
  el.lang        = 'it';
  el.textContent = text;
  return el;
}

function hasTranslations() {
  return !!(cert.translations && cert.translations());
}

function applyTranslationToggle() {
  document.body.classList.toggle('show-it', showItalian);
  document.querySelectorAll('.tr-btn').forEach(b => {
    b.style.display = hasTranslations() ? '' : 'none';
    b.classList.toggle('tr-btn-active', showItalian);
    b.setAttribute('aria-pressed', String(showItalian));
  });
}

function toggleTranslation() {
  showItalian = !showItalian;
  try { localStorage.setItem(SHOW_IT_KEY, showItalian ? '1' : '0'); } catch (e) {}
  applyTranslationToggle();
  // Matching dropdown labels include the translation only while it is shown
  const q = state.questions && state.questions[state.current];
  if (q && q.type === 'matching' && document.getElementById('quiz-screen').classList.contains('active')) renderQuestion();
}
