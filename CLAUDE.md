# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A client-side web app that simulates the AWS Certified Cloud Practitioner (CLF-C02) exam. No backend or build step — all logic runs in the browser.

## Running locally

Open `index.html` directly in any browser (works via `file://`), or serve via Laragon at `http://aws-certification.test`. No build step or npm install needed.

## File structure

| File | Responsibility |
|---|---|
| `index.html` | Three screens (`start-screen`, `quiz-screen`, `results-screen`) as `<div class="screen">` elements; only one has class `active` at a time |
| `css/style.css` | All styling via CSS custom properties (see `--orange`, `--navy`, `--correct`, `--incorrect`, etc. in `:root`) |
| `js/questions.js` | Exports `QUESTION_BANK` — 200 CLF-C02 questions |
| `js/state.js` | Exports `state` singleton object and `resetState()` |
| `js/timer.js` | Exports `startTimer(onExpire)`, `stopTimer()`, `updateTimerDisplay()` |
| `js/render.js` | Exports all quiz-screen rendering: `showScreen`, `renderQuestion`, `buildGrid`, `updateGridBtn`, `updateGridHighlight`, `showReviewModal`, `closeReviewModal` |
| `js/results.js` | Exports `calculateResults()` which scores the exam, renders the results screen, and calls `renderAnswersReview()` internally |
| `js/app.js` | ES module entry point — imports everything, defines all business logic (startQuiz, selectOption, toggleFlag, navigation, submit, restart) and wires all DOM event listeners |

## Script load order (`index.html`)

Scripts are loaded as classic `<script>` tags in dependency order — no ES modules, works via `file://`:

```
questions.js → state.js → timer.js → render.js → results.js → app.js
```

## State management (`state.js`)

Everything lives in a single exported `state` object (singleton — all modules share the same reference):

```js
{
  mode: 15 | 35 | 65,
  questions: [],        // shuffled subset of QUESTION_BANK, options already remapped
  current: 0,           // index into questions[]
  answers: {},          // { questionId: [shuffledOptionIndex, ...] }
  flagged: Set,         // Set of question ids
  timer: intervalId,
  secondsLeft: number,
  submitted: boolean
}
```

`startQuiz(mode)` in `app.js` resets the state, shuffles `QUESTION_BANK`, slices to `mode` questions, and calls `shuffleOptionsWithMapping()` on each.

## Options shape — important distinction

In `QUESTION_BANK`, `options` is a plain string array and `correct` holds zero-based indices into that array. The optional `optionExplanations` field (same length as `options`) provides per-option explanations of why each wrong answer is incorrect.

After `shuffleOptionsWithMapping()` the question stored in `state.questions` has a **different** shape:

```js
q.options = {
  texts:        string[],        // shuffled display texts
  correctNew:   boolean[],       // parallel array — true if this (shuffled) position is correct
  explanations: string[] | null  // shuffled per-option explanations, or null if not provided
}
```

All rendering and scoring code uses `q.options.texts` / `q.options.correctNew`. Never access `q.options[i]` as a string on a runtime question.

## Scoring logic

Multi-select questions require an **exact match** — all correct options selected and no wrong ones. There is no partial credit. Comparison is `JSON.stringify(sorted user answers) === JSON.stringify(sorted correct indices)`. Unanswered questions count as incorrect for the percentage but are tracked separately in the results display.

Passing threshold: **70%**. Score arc color: green ≥ 70%, orange 50–69%, red < 50%.

## Adding or editing questions

Each entry in `QUESTION_BANK` (`js/questions.js`):

```js
{
  id: <unique number>,
  domain: "Cloud Concepts" | "Security & Compliance" | "Cloud Technology & Services" | "Billing, Pricing & Support",
  type: "single" | "multiple",
  question: "...",
  options: ["A text", "B text", "C text", "D text"],  // original order
  correct: [0],              // zero-based indices into options[] above
  explanation: "...",        // shown after submission — explains the correct answer
  optionExplanations: ["...", "...", "...", "..."]  // optional — per-option explanation of why each wrong answer is wrong
}
```

`correct` and `optionExplanations` always refer to the **original** `options` array — shuffling is handled at runtime.

## Exam modes

| Mode | Questions | Time | Card label |
|---|---|---|---|
| Flash Quiz | 15 | 20 min | Flash |
| Short Practice | 35 | 50 min | Quick |
| Official Simulation | 65 | 90 min | Full Exam |

## Exam domain weights (CLF-C02)

| Domain | Weight | Questions in bank |
|---|---|---|
| Cloud Concepts | 24% | 48 |
| Security & Compliance | 30% | 60 |
| Cloud Technology & Services | 34% | 68 |
| Billing, Pricing & Support | 12% | 24 |
| **Total** | 100% | **200** |

## Timer states

| Threshold | CSS class | Visual |
|---|---|---|
| > 10 min | *(none)* | white on dark navy |
| ≤ 10 min | `timer-warn` | orange tint |
| ≤ 5 min | `timer-urgent` | red tint |

Timer auto-submits the exam when it reaches zero.

## Question grid (sidebar) button states

| CSS class | Meaning | Visual |
|---|---|---|
| *(none)* | Unanswered | grey |
| `gb-answered` | Answered | blue |
| `gb-flagged` | Flagged, not answered | orange |
| `gb-flagged-answered` | Flagged and answered | diagonal split — orange / blue |
| `gb-current` | Currently displayed question (stacked on top of any other class) | orange outline |

## Keyboard shortcuts (quiz screen only, disabled when review modal is open)

| Key | Action |
|---|---|
| `→` / `↓` | Next question |
| `←` / `↑` | Previous question |
| `F` | Toggle flag |
| `1`–`4` or `A`–`D` | Select answer option |

## Event wiring

All DOM event listeners are attached in `app.js` via `addEventListener` — there are **no inline `onclick` handlers** in `index.html`. Option clicks and grid/modal navigation use **event delegation** (listening on the container, matching with `closest()`). Mode cards are identified by their `data-mode` attribute.
