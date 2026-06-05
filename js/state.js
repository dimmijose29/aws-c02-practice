const state = {
  mode: 0,
  practiceMode: false,   // true = practice, false = exam
  questions: [],
  current: 0,
  answers: {},
  revealed: new Set(),   // question ids already revealed in practice mode
  flagged: new Set(),
  timer: null,
  secondsLeft: 0,
  submitted: false
};

function resetState() {
  state.mode = 0;
  state.practiceMode = false;
  state.questions = [];
  state.current = 0;
  state.answers = {};
  state.revealed = new Set();
  state.flagged = new Set();
  state.timer = null;
  state.secondsLeft = 0;
  state.submitted = false;
}
