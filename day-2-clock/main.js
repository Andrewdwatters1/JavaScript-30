const hour = window.document.getElementById('hour');
const min = window.document.getElementById('min');
const sec = window.document.getElementById('sec');
const display = window.document.getElementById('time-display');

window.onload = loadTransition();

function loadTransition() {
  getCurrentDate();
  sec.style.transition = 'all 1.25s';
  min.style.transition = 'all 1.25s';
  hour.style.transition = 'all 1.25s';
  setTimeout(() => {
    sec.style.transitionTimingFunction = 'cubic-bezier(0.1, 3, 0.5, 1)'
    min.style.transitionTimingFunction = 'cubic-bezier(0.1, 3, 0.5, 1)'
    hour.style.transitionTimingFunction = 'cubic-bezier(0.1, 3, 0.5, 1)'
    sec.style.transition = 'all 0.1s'
    min.style.transition = 'all 0.1s'
    hour.style.transition = 'all 0.1s'
  }, 1250)
}

function getCurrentDate() {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const date = new Date();
  display.innerHTML = `${daysOfWeek[date.getDay()]},  ${monthsOfYear[date.getMonth()]} ${date.getDay()}, ${date.getFullYear()} at ${date.getHours() + 1}:${date.getMinutes() + 1}:${date.getSeconds() + 1}`
}

function setDate() {
  const now = new Date();
  console.log(now);
  const seconds = now.getSeconds();
  const minutes = now.getMinutes(); // 60 mins
  const hours = now.getHours();
  if (seconds === 59 || minutes === 59 || hours === 11) {
    sec.style.transition = 'none';
    min.style.transition = 'none';
    hour.style.transition = 'none';
    setTimeout(() => {
      sec.style.transition = 'all 0.1sec'
      min.style.transition = 'all 0.1sec'
      hour.style.transition = 'all 0.1sec'
    }, 150)
  }
  const secToDeg = ((seconds / 60) * 360) + 1;
  const minToDeg = (minutes * 6) + 1;
  const hourToDeg = (hours * 30) + 1;
  sec.style.transform = `rotate(${secToDeg}deg)`
  min.style.transform = `rotate(${minToDeg}deg)`
  hour.style.transform = `rotate(${hourToDeg}deg)`
}

setInterval(setDate, 1000);
setInterval(getCurrentDate, 1000);
setInterval(setDate, 60000);
setInterval(setDate, 3600000);