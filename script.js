const hoursEl = document.getElementById("hours-num");
const minutesEl = document.getElementById("minutes-num");
const secondsEl = document.getElementById("seconds-num");
const dateEl = document.getElementById("date");
const monthEl = document.getElementById("month");
const yearEl = document.getElementById("year");
const ampmEl = document.getElementById("ampm");

function startClock() {
  const date = new Date();
  let day, month, year, h, m, s, ampm;
  h = date.getHours();
  m = date.getMinutes();
  s = date.getSeconds();
  day = date.getDate();
  month = date.getMonth() + 1;
  year = date.getFullYear();
  ampm = "AM";

  ampm = h >= 12 ? "PM" : ampm;

  if (h > 12) {
    h -= 12;
  }
  if (h === 0) {
    h = 12;
  }

  day = day < 10 ? "0" + day : day;
  month = month < 10 ? "0" + month : month;
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  dateEl.textContent = day;
  monthEl.textContent = month;
  yearEl.textContent = year;
  hoursEl.textContent = h;
  minutesEl.textContent = m;
  secondsEl.textContent = s;
  ampmEl.textContent = ampm;
}

setInterval(startClock, 1000);
startClock();
