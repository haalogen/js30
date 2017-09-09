const MSECS_IN_SEC = 1000;
const SECS_IN_MIN = 60;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');
const audio = document.querySelector(`audio`);
let countdown;
let alarmSound;



function timer (seconds) {
  // clear any existing timers
  clearInterval(countdown);
  audio.pause(); // pause alarm sound

  const now = Date.now(); // when timer started
  const then = now + seconds * MSECS_IN_SEC;
  displayTimeLeft(seconds); // dislpay once
  displayEndTime(then); // dislpay once

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / MSECS_IN_SEC);
    // check if we should stop it
    if (secondsLeft < 0) {
      clearInterval(countdown);
      loopAlarmSound();
      return;
    }
    // display it
    displayTimeLeft(secondsLeft);
  }, MSECS_IN_SEC);
}

function displayTimeLeft (seconds) {
  const minutes = Math.floor(seconds / SECS_IN_MIN);
  const remainderSeconds = seconds % SECS_IN_MIN;

  // padding with zero if `remainderSeconds` is less than 10
  const displayTime = `${minutes}:` +
    `${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
  timerDisplay.textContent = displayTime;
  document.title = displayTime;
}

function displayEndTime (timestamp) {
  const end = new Date(timestamp);
  const hour = end.getHours();
  const minutes = end.getMinutes();
  const adjustedHour = hour > 12 ? hour - 12 : hour
  const paddedMinutes = ((minutes < 10) ? '0' : '') + minutes;
  // with time conversion to 12-hour format
  endTime.textContent = `Be back at ${adjustedHour}:${paddedMinutes}`;
}

function loopAlarmSound () {
  if (!audio) return;

  audio.currentTime = 0; // rewind audio file to the start
  audio.loop = true;
  audio.play();
}

function startTimer () {
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}

buttons.forEach(button => button.addEventListener('click', startTimer));
document.customForm.addEventListener('submit', function (e) {
  e.preventDefault(); // prevent page reloading
  const mins = this.minutes.value;
  timer(mins * SECS_IN_MIN);
  this.reset(); // clear input value
})