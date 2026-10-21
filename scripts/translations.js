#!/usr/bin/env node
// Manages the Italian translations of the question banks (js/questions*-it.js).
// Run from the project root:
//   node scripts/translations.js                          check: missing, stale and malformed translations
//   node scripts/translations.js export <cert> <dir> [n]  write the English text still to translate as JSON chunks of n questions
//   node scripts/translations.js import <cert> <file...>  merge translated JSON chunks into the cert's -it.js file
// Each translation stores `h`, a hash of the English text it was made from: when a question is edited
// its translation becomes stale and is reported (and exported again) until it is re-translated.
// Exits with code 1 if any translation is malformed.

const fs   = require('fs');
const path = require('path');

const root  = path.join(__dirname, '..');
const BANKS = {
  clf: { file: 'js/questions.js',     global: 'QUESTION_BANK',     itFile: 'js/questions-it.js',     itGlobal: 'QUESTION_BANK_IT' },
  saa: { file: 'js/questions-saa.js', global: 'SAA_QUESTION_BANK', itFile: 'js/questions-saa-it.js', itGlobal: 'SAA_QUESTION_BANK_IT' },
  aif: { file: 'js/questions-aif.js', global: 'AIF_QUESTION_BANK', itFile: 'js/questions-aif-it.js', itGlobal: 'AIF_QUESTION_BANK_IT' },
};

// Translatable fields per question type (strings or string arrays)
const FIELDS = {
  single:   ['question', 'options', 'explanation', 'optionExplanations'],
  multiple: ['question', 'options', 'explanation', 'optionExplanations'],
  ordering: ['question', 'items', 'explanation', 'itemExplanations'],
  matching: ['question', 'prompts', 'responses', 'explanation', 'promptExplanations'],
};

function loadGlobal(file, global, fallback) {
  const full = path.join(root, file);
  if (!fs.existsSync(full)) return fallback;
  return new Function(`${fs.readFileSync(full, 'utf8')}; return ${global};`)();
}

function english(q) {
  const out = {};
  FIELDS[q.type].forEach(f => { if (q[f] !== undefined) out[f] = q[f]; });
  return out;
}

// FNV-1a 32-bit of the English text, as 8 hex digits
function hash(q) {
  const s = JSON.stringify(english(q));
  let h = 0x811c9dc5;
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 0x01000193); }
  return (h >>> 0).toString(16).padStart(8, '0');
}

// Problems of a translation against its English question ([] = ok)
function problems(q, t) {
  const errs = [];
  FIELDS[q.type].forEach(f => {
    if (q[f] === undefined) return;
    if (Array.isArray(q[f])) {
      if (!Array.isArray(t[f]) || t[f].length !== q[f].length) errs.push(`${f}: expected ${q[f].length} items`);
      else if (t[f].some(s => typeof s !== 'string' || !s.trim())) errs.push(`${f}: empty item`);
    } else if (typeof t[f] !== 'string' || !t[f].trim()) errs.push(`${f}: missing`);
  });
  return errs;
}

function loadCert(id) {
  const bank = BANKS[id];
  if (!bank) { console.error(`Unknown cert "${id}" (use ${Object.keys(BANKS).join(', ')})`); process.exit(1); }
  return { bank, questions: loadGlobal(bank.file, bank.global), it: loadGlobal(bank.itFile, bank.itGlobal, {}) };
}

function writeIt(bank, questions, it) {
  const lines = questions.filter(q => it[q.id]).map(q => {
    const t = { h: it[q.id].h };
    FIELDS[q.type].forEach(f => { if (it[q.id][f] !== undefined) t[f] = it[q.id][f]; });
    return `  ${JSON.stringify(String(q.id))}: ${JSON.stringify(t)},`;
  });
  fs.writeFileSync(path.join(root, bank.itFile),
    `// Italian translations of ${bank.global}, keyed by question id — managed with scripts/translations.js.\n` +
    `// AWS service and feature names stay in English. h = hash of the English text the translation was made from.\n\n` +
    `const ${bank.itGlobal} = {\n${lines.join('\n')}\n};\n`);
}

function check() {
  let failed = false;
  Object.keys(BANKS).forEach(id => {
    const { questions, it } = loadCert(id);
    const missing = [], stale = [], bad = [];
    questions.forEach(q => {
      const t = it[q.id];
      if (!t) return missing.push(q.id);
      const errs = problems(q, t);
      if (errs.length) bad.push(`  #${q.id}: ${errs.join('; ')}`);
      if (t.h !== hash(q)) stale.push(q.id);
    });
    const orphans = Object.keys(it).filter(k => !questions.some(q => String(q.id) === k));
    console.log(`${id.toUpperCase()}: ${questions.length - missing.length}/${questions.length} translated` +
      (stale.length ? `, ${stale.length} stale (${stale.slice(0, 10).join(', ')}${stale.length > 10 ? '…' : ''})` : '') +
      (orphans.length ? `, ${orphans.length} orphan (${orphans.join(', ')})` : ''));
    if (bad.length) { failed = true; console.log(bad.join('\n')); }
  });
  process.exit(failed ? 1 : 0);
}

function exportChunks(id, dir, size = 40) {
  const { questions, it } = loadCert(id);
  const todo = questions.filter(q => !it[q.id] || it[q.id].h !== hash(q));
  fs.mkdirSync(dir, { recursive: true });
  for (let i = 0; i < todo.length; i += size) {
    const chunk = {};
    todo.slice(i, i + size).forEach(q => { chunk[q.id] = english(q); });
    const file = path.join(dir, `${id}-${String(i / size + 1).padStart(2, '0')}.json`);
    fs.writeFileSync(file, JSON.stringify(chunk, null, 1));
    console.log(`${file}: ${Object.keys(chunk).length} questions`);
  }
  if (!todo.length) console.log(`${id}: nothing to translate`);
}

function importChunks(id, files) {
  const { bank, questions, it } = loadCert(id);
  const byId = new Map(questions.map(q => [String(q.id), q]));
  let added = 0, failed = false;
  files.forEach(file => {
    const chunk = JSON.parse(fs.readFileSync(file, 'utf8'));
    Object.entries(chunk).forEach(([qid, t]) => {
      const q = byId.get(qid);
      if (!q) { console.log(`${file}: #${qid} not in the ${id} bank`); failed = true; return; }
      const errs = problems(q, t);
      if (errs.length) { console.log(`${file}: #${qid}: ${errs.join('; ')}`); failed = true; return; }
      it[qid] = { ...t, h: hash(q) };
      added++;
    });
  });
  writeIt(bank, questions, it);
  console.log(`${id}: imported ${added} translations into ${bank.itFile}`);
  process.exit(failed ? 1 : 0);
}

const [cmd, ...args] = process.argv.slice(2);
if (!cmd || cmd === 'check') check();
else if (cmd === 'export') exportChunks(args[0], args[1], Number(args[2]) || undefined);
else if (cmd === 'import') importChunks(args[0], args.slice(1));
else { console.error('Usage: translations.js [check | export <cert> <dir> [n] | import <cert> <file...>]'); process.exit(1); }
