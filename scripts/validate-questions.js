#!/usr/bin/env node
// Validates the question banks. Run from the project root:
//   node scripts/validate-questions.js
// Exits with code 1 if any bank has structural errors.

const fs   = require('fs');
const path = require('path');

const root  = path.join(__dirname, '..');
const BANKS = [
  {
    file: 'js/questions.js', global: 'QUESTION_BANK',
    domains: ['Cloud Concepts', 'Security & Compliance', 'Cloud Technology & Services', 'Billing, Pricing & Support'],
  },
  {
    file: 'js/questions-saa.js', global: 'SAA_QUESTION_BANK',
    domains: ['Design Secure Architectures', 'Design Resilient Architectures',
              'Design High-Performing Architectures', 'Design Cost-Optimized Architectures'],
  },
];

function load(bank) {
  const src = fs.readFileSync(path.join(root, bank.file), 'utf8');
  return new Function(`${src}; return ${bank.global};`)();
}

function words(text) {
  return new Set(text.toLowerCase().replace(/[^a-z0-9 ]/g, ' ').split(/\s+/).filter(w => w.length > 3));
}

function similarity(a, b) {
  let shared = 0;
  a.forEach(w => { if (b.has(w)) shared++; });
  return shared / (a.size + b.size - shared);
}

let failed = false;

for (const bank of BANKS) {
  const questions = load(bank);
  const errors    = [];
  const ids       = new Set();
  const byDomain  = {};
  let multi = 0, singles = 0, longestCorrect = 0;

  questions.forEach(q => {
    const t = `#${q.id}`;
    if (ids.has(q.id)) errors.push(`${t} duplicate id`);
    ids.add(q.id);

    if (!bank.domains.includes(q.domain)) errors.push(`${t} unknown domain "${q.domain}"`);
    byDomain[q.domain] = (byDomain[q.domain] || 0) + 1;

    if (!q.question || !q.explanation) errors.push(`${t} missing question or explanation`);
    if (!Array.isArray(q.options) || !Array.isArray(q.correct)) { errors.push(`${t} options/correct must be arrays`); return; }
    if (new Set(q.options).size !== q.options.length) errors.push(`${t} duplicate options`);
    if (q.correct.some(i => !Number.isInteger(i) || i < 0 || i >= q.options.length)) errors.push(`${t} correct index out of range`);
    if (q.optionExplanations && q.optionExplanations.length !== q.options.length) errors.push(`${t} optionExplanations length differs from options`);

    if (q.type === 'single') {
      singles++;
      if (q.correct.length !== 1) errors.push(`${t} single question must have exactly 1 correct answer`);
      const lengths = q.options.map(o => o.length);
      if (lengths.indexOf(Math.max(...lengths)) === q.correct[0]) longestCorrect++;
    } else if (q.type === 'multiple') {
      multi++;
      if (q.correct.length < 2) errors.push(`${t} multiple question needs at least 2 correct answers`);
    } else {
      errors.push(`${t} unknown type "${q.type}"`);
    }
  });

  // Near-duplicate questions (same wording and same correct answer)
  const signatures = questions.map(q => words(q.question + ' ' + q.correct.map(i => q.options[i]).join(' ')));
  const similar = [];
  for (let i = 0; i < questions.length; i++) {
    for (let j = i + 1; j < questions.length; j++) {
      const s = similarity(signatures[i], signatures[j]);
      if (s > 0.5) similar.push(`#${questions[i].id} ~ #${questions[j].id} (${s.toFixed(2)})`);
    }
  }

  console.log(`\n${bank.file}: ${questions.length} questions, ${multi} multiple-response`);
  Object.entries(byDomain).forEach(([d, n]) => console.log(`  ${d}: ${n}`));
  console.log(`  correct option is the longest in ${longestCorrect}/${singles} single questions ` +
              `(${Math.round(100 * longestCorrect / singles)}% — aim for ≤ 25%)`);
  if (similar.length) console.log(`  possible near-duplicates: ${similar.join(', ')}`);

  if (errors.length) {
    failed = true;
    console.log(`  ${errors.length} error(s):`);
    errors.forEach(e => console.log(`    ${e}`));
  } else {
    console.log('  no structural errors');
  }
}

process.exit(failed ? 1 : 0);
