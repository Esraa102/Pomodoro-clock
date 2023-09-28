let sessionIncrease = document.querySelector(".session .session-period");
let sessionArrowUp = document.querySelector(".session  i.up");
let sessionArrowDown = document.querySelector(".session  i.down");
let timer = document.querySelector(".timer .timer-clock");
let play = document.querySelector("span.play");
let pause = document.querySelector("span.pause");
let repeat = document.querySelector("span.repeat");
let breakUp = document.querySelector(".break i.up");
let breakDown = document.querySelector(".break i.down");
let breakIncrease = document.querySelector("span.break-period");

let mins = timer.innerHTML.split(":")[0];
let seconds = timer.innerHTML.split(":")[1];
let handler;
let start = false;

function main() {
  mins = parseFloat(mins) - 1;
  mins = mins < 10 ? `0${mins}` : mins;
  seconds = "59";
  timer.innerHTML = `${mins}:${seconds}`;

  handler = setInterval(() => {
    seconds--;
    seconds = seconds < 10 ? `0${seconds}` : seconds;
    if (seconds == 0 && mins != 0) {
      seconds = "59";
      mins = parseFloat(mins) - 1;
      mins = mins < 10 ? `0${mins}` : mins;
    }
    if (seconds == 0 && mins == 0) {
      clearInterval(handler);
    }

    timer.innerHTML = `${mins}:${seconds}`;
  }, 1000);
}
play.addEventListener("click", (e) => {
  main();
});

pause.onclick = () => {
  clearInterval(handler);
};
repeat.onclick = () => {
  clearInterval(handler);
  mins = 25;
  seconds = "00";
  timer.innerHTML = `${mins}:${seconds}`;
  sessionIncrease.innerHTML = 25;
};

sessionArrowUp.onclick = () => {
  if (mins >= 60) return;
  sessionIncrease.innerHTML = parseFloat(sessionIncrease.innerHTML) + 1;
  mins = parseFloat(mins) + 1;
  timer.innerHTML = `${mins}:${seconds}`;
};

sessionArrowDown.onclick = () => {
  if (mins == 1) return;
  sessionIncrease.innerHTML = parseFloat(sessionIncrease.innerHTML) - 1;
  mins = parseFloat(mins) - 1;
  mins = mins < 10 ? `0${mins}` : mins;
  timer.innerHTML = `${mins}:${seconds}`;
};

breakUp.onclick = () => {
  if (breakIncrease.innerHTML >= 25) return;
  breakIncrease.innerHTML = parseFloat(breakIncrease.innerHTML) + 1;
};
breakDown.onclick = () => {
  if (breakIncrease.innerHTML == 0) return;
  breakIncrease.innerHTML = parseFloat(breakIncrease.innerHTML) - 1;
};
