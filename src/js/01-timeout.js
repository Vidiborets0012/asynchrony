/*
Метод window.setTimeout(callback, delay, args)
*/

// console.log('before');

// setTimeout(() => {
//   console.log('timeout-1');
// }, 2000);

// setTimeout(() => {
//   console.log('timeout-2');
// }, 1000);

// console.log('after');

/*
Очищення таймаута за допомогою clearTimeout(timeoutId)
*/

/*
const logger = time => {
  console.log(`Timer ${time}`); //Timer undefined
};

setTimeout(logger, 2000);
*/

const logger = time => {
  console.log(`Timer ${time}`); //Timer 2s
};

const timerId = setTimeout(logger, 2000, '2s');

clearTimeout(timerId);

/*
Можливість передати параметри для колбеку
*/

// setTimeout(
//   (name, city) => {
//     console.log(`${name} from ${city}`);
//   },
//   1000,
//   'Alice',
//   'Poltava'
// );

// setTimeout(
//   ({ name, city }) => {
//     console.log(`${name} from ${city}`);
//   },
//   2000,
//   {
//     name: 'Petya',
//     city: 'Poltava',
//   }
// );
