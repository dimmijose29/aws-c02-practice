// ===== CERTIFICATIONS =====
// Everything that differs between exams lives here; the start screen, quiz,
// results and stats are all driven by the active entry (`cert`).

const CERTS = {
  clf: {
    id:        'clf',
    code:      'CLF-C02',
    name:      'AWS Certified Cloud Practitioner',
    shortName: 'Cloud Practitioner',
    logo:      'img/logo.png',
    passPct:   70,
    passScore: 700,
    statsKey:  'aws_clf_stats_v1',
    minutes:   { 15: 20, 35: 50, 65: 90 },   // exam time per mode (question count)
    domains: [
      { name: 'Cloud Concepts',              short: 'Cloud Concepts',  label: 'Cloud Concepts',        icon: '☁️', weight: 24 },
      { name: 'Security & Compliance',       short: 'Security',        label: 'Security & Compliance', icon: '🔒', weight: 30 },
      { name: 'Cloud Technology & Services', short: 'Tech & Services', label: 'Tech & Services',       icon: '⚙️', weight: 34 },
      { name: 'Billing, Pricing & Support',  short: 'Billing',         label: 'Billing & Pricing',     icon: '💰', weight: 12 },
    ],
    // Functions, so banks and cheat sheets can live in scripts loaded after this one
    questions:  () => QUESTION_BANK,
    cheatsheet: () => CHEATSHEET,
  },
};

const CERT_STORAGE_KEY = 'aws_cert_selected';

let cert = CERTS.clf;

function domainShort(name) {
  const d = cert.domains.find(d => d.name === name);
  return d ? d.short : name;
}

// Green at/above the cert's passing threshold, orange 50+, red below
function scoreColor(pct) {
  return pct >= cert.passPct ? 'var(--correct)' : pct >= 50 ? 'var(--flagged)' : 'var(--incorrect)';
}
