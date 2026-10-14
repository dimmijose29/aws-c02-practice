function startTimer(onExpire) {
  stopTimer();
  // Wall-clock deadline: background-tab throttling can't make the timer drift
  state.endTime = Date.now() + state.secondsLeft * 1000;
  updateTimerDisplay();
  state.timer = setInterval(() => {
    state.secondsLeft = Math.max(0, Math.ceil((state.endTime - Date.now()) / 1000));
    updateTimerDisplay();
    if (state.secondsLeft <= 0) {
      stopTimer();
      onExpire();
    }
  }, 250);
}

function stopTimer() {
  clearInterval(state.timer);
  state.timer = null;
}

function updateTimerDisplay() {
  const m = Math.floor(state.secondsLeft / 60);
  const s = state.secondsLeft % 60;
  document.getElementById('timer-display').textContent =
    `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;

  const box = document.getElementById('timer-box');
  box.classList.remove('timer-warn', 'timer-urgent');
  if (state.secondsLeft <= 300)      box.classList.add('timer-urgent');
  else if (state.secondsLeft <= 600) box.classList.add('timer-warn');
}
