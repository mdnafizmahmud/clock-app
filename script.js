let hoursEl = document.getElementById("hours-num");
let minutesEl = document.getElementById("minutes-num");
let secondsEl = document.getElementById("seconds-num");
let ampmEl = document.getElementById("ampm");

function startClock() {
  const date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();

  if (h > 12) {
    h = h - 12;
    ampm = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hoursEl.textContent = h;
  minutesEl.textContent = m;
  secondsEl.textContent = s;
  ampmEl.textContent = ampm;

  setInterval(startClock, 1000);
}
startClock();
