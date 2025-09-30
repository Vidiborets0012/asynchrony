//Асинхронний код

// console.log('First log');
// console.log('Second log');
// console.log('Third log');

// Виконується першою
// console.log('First log');

// setTimeout(() => {
//   // Виконується третьою, через 2000 мілісекунд (2 секунди)
//   console.log('Second log');
// }, 2000);

// // Виконується другою
// console.log('Third log');

//Тайм-аут

/*
const timerId = setTimeout(callback, delay, arg1, arg2, ...);

*/

const button = document.querySelector('button');

const onClick = () => {
  const timerId = setTimeout(() => {
    console.log('I love async JS!');
  }, 2000);

  console.log(timerId);
};

button.addEventListener('click', onClick);

//Скасування тайм-ауту

/*
clearTimeout(id)
*/

const greet = () => {
  console.log('Hello!');
};

const timerId = setTimeout(greet, 3000);

clearTimeout(timerId);

console.log('***************');

const setBtn = document.querySelector('.js-set');
const clearBtn = document.querySelector('.js-clear');
let timeoutId;

setBtn.addEventListener('click', () => {
  timeoutId = setTimeout(() => {
    console.log('I love async JS!');
  }, 2000);
});

clearBtn.addEventListener('click', () => {
  clearTimeout(timeoutId);
  console.log(`Timeout with id ${timeoutId} has stopped!`);
});

//Інтервал

/*
const intervalId = setInterval(callback, delay, arg1, arg2, ...);

*/

const startBtn = document.querySelector('.js-start');

startBtn.addEventListener('click', () => {
  const intervalId = setInterval(() => {
    console.log(`Interval ID: ${intervalId}, ${Math.random()}`);
  }, 1000);
});

//Скасування інтервалу
/*
clearInterval(id)
*/

const greet1 = () => {
  console.log('Hello!');
};

const intervalId1 = setInterval(greet1, 3000);

clearInterval(intervalId1);
// ************************

const startBtn1 = document.querySelector('.js-start1');
const stopBtn1 = document.querySelector('.js-stop1');
let intervalId2 = null;

startBtn1.addEventListener('click', () => {
  intervalId2 = setInterval(() => {
    console.log(`Interval ID: ${intervalId2}, ${Math.random()}`);
  }, 1000);
});

stopBtn1.addEventListener('click', () => {
  clearInterval(intervalId2);
  console.log(`Interval with id ${intervalId2} has stopped!`);
});
