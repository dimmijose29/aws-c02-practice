<div align="center">
  <img src="img/logo.png" alt="AWS Certified Cloud Practitioner" width="180"/>

  # AWS Cloud Practitioner — Practice Exam
  
  **Simulatore d'esame per la certificazione AWS Certified Cloud Practitioner (CLF-C02)**

  ![Questions](https://img.shields.io/badge/questions-500-orange)
  ![Domains](https://img.shields.io/badge/domains-4-blue)
  ![No Backend](https://img.shields.io/badge/backend-none-green)
  ![License](https://img.shields.io/badge/license-MIT-lightgrey)

</div>

---

## Cosa è

Un simulatore d'esame client-side per prepararsi alla certificazione **AWS Certified Cloud Practitioner (CLF-C02)**. Gira interamente nel browser — nessun backend, nessuna installazione, nessun account richiesto.

## Modalità d'esame

| Modalità | Domande | Tempo | 
|---|---|---|
| ⚡ Flash Quiz | 15 | 20 min |
| 📝 Short Practice | 35 | 50 min |
| 🎯 Official Simulation | 65 | 90 min |

Ogni simulazione estrae le domande casualmente dalla bank, rispettando i pesi ufficiali dei domini CLF-C02.

## Domini e distribuzione

| Dominio | Peso ufficiale | Domande nel bank |
|---|---|---|
| Cloud Concepts | 24% | 120 |
| Security & Compliance | 30% | 150 |
| Cloud Technology & Services | 34% | 170 |
| Billing, Pricing & Support | 12% | 60 |
| **Totale** | **100%** | **500** |

## Funzionalità

- ✅ 500 domande originali con spiegazione dettagliata per ogni opzione
- ✅ Storico delle sessioni con le domande sbagliate più spesso
- ✅ Domande singole e multi-risposta
- ✅ Timer con avvisi visivi (arancione < 10 min, rosso < 5 min)
- ✅ Griglia di navigazione laterale con stato per ogni domanda
- ✅ Possibilità di segnare le domande con flag per rivederle
- ✅ Schermata risultati con punteggio, breakdown per dominio e revisione di tutte le risposte
- ✅ Soglia di superamento al 70% (come l'esame reale)
- ✅ Scorciatoie da tastiera (frecce, F per flag, 1–5 / A–E per rispondere)
- ✅ Funziona offline e via `file://` — nessun server necessario

## Come usarlo

### Online
Visita il sito deployato su Vercel *(link in arrivo)*.

### In locale
```bash
git clone https://github.com/dimmijose29/aws-c02-practice.git
cd aws-c02-practice
# Apri index.html nel browser — non serve nient'altro
open index.html
```

## Scorciatoie da tastiera

| Tasto | Azione |
|---|---|
| `→` / `↓` | Domanda successiva |
| `←` / `↑` | Domanda precedente |
| `F` | Aggiungi/rimuovi flag |
| `1`–`5` o `A`–`E` | Seleziona risposta |

## Struttura del progetto

```
aws-c02-practice/
├── index.html          # Struttura HTML (3 schermate: start, quiz, risultati)
├── css/
│   └── style.css       # Tutti gli stili
├── js/
│   ├── questions.js    # Bank da 500 domande
│   ├── state.js        # Stato globale dell'applicazione
│   ├── timer.js        # Logica timer
│   ├── render.js       # Rendering UI
│   ├── stats.js        # Storico sessioni (localStorage)
│   ├── cheatsheet.js   # Cheat sheet di studio
│   ├── results.js      # Calcolo e visualizzazione risultati
│   └── app.js          # Entry point, logica e event listeners
└── img/
    ├── logo.png
    └── favicon.png
```

---

<div align="center">
  <sub>Progetto personale per la preparazione all'esame CLF-C02 · Non affiliato con Amazon Web Services</sub>
</div>
