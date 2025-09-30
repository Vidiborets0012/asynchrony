/*
Напишемо клас Timer, який буде запускати за зупиняти відлік часу
*/

const startBtn = document.querySelector('button[data-action-start]');
const stopBtn = document.querySelector('button[data-action-stop]');
// console.log(startBtn);
// console.log(stopBtn);

const clockface = document.querySelector('.clockface');
// console.log(clockface);

class Timer {
  constructor({ onTick }) {
    this.onTick = onTick;
    this.isActive = false;
    this.intervalId = null;

    this.init();
  }

  init() {
    const time = this.getTimeComponents(0);
    this.onTick(time);
  }

  start() {
    if (this.isActive) {
      return;
    }

    this.isActive = true;

    const startTime = Date.now();

    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = currentTime - startTime;
      // console.log('deltaTime:', deltaTime);
      const time = this.getTimeComponents(deltaTime);

      this.onTick(time);
      // console.log('time:', time);
    }, 1000);
  }

  stop() {
    clearInterval(this.intervalId);
    this.init();
    this.isActive = false;
  }

  getTimeComponents(time) {
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const minutes = this.pad(
      Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))
    );
    const seconds = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { hours, minutes, seconds };
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }
}

const timer = new Timer({ onTick: updateClockface });
// console.log('timer:', timer);

startBtn.addEventListener('click', timer.start.bind(timer));
stopBtn.addEventListener('click', timer.stop.bind(timer));

function updateClockface({ hours, minutes, seconds }) {
  clockface.textContent = `${hours}:${minutes}:${seconds}`;
}
