//Створення промісу

// const prom = new Promise((resolve, reject) => {});
// console.log('prom:', prom);//Promise {<pending>}

// const prom = new Promise((resolve, reject) => {
//   resolve('lalala');
// });
// console.log('prom:', prom);//Promise {<fulfilled>: 'lalala'}

// const prom = new Promise((resolve, reject) => {
//   reject('tototo'); //Uncaught (in promise) tototo
// });
// console.log('prom:', prom); //Promise {<rejected>: 'tototo'}

//створення =>
// const prom = new Promise((resolve, reject) => {
//   const random = Math.random();

//   setTimeout(() => {
//     if (random > 0.5) {
//       resolve('OK! lalala');
//     }

//     reject('Oooooops!');
//   }, 1000);
// });

// console.log('prom:', prom);

//обробка і повернення результату =>
// prom
//   .then(res => {
//     console.log('then:', res);
//   })
//   .catch(error => {
//     console.log('catch:', error);
//   })
//   .finally(() => {
//     console.log('finally');
//   });

// ****************************
console.log('*****************');

//Ланцюги промісів

// const promise = new Promise(resolve => {
//   resolve(5);
// });

// promise
//   .then(data => {
//     console.log('data:', data); //5
//     return data * 2;
//   })
//   .then(result => {
//     console.log('result:', result); //10
//     return result * 10;
//   })
//   .then(data => {
//     console.log('data:', data); //100
//   });
// console.log('promise:', promise); //Promise {<fulfilled>: 5}

// ****************************
console.log('*****************');

// const promiseX = new Promise(resolve => {
//   resolve(10);
// });

// promiseX
//   .then(resX => {
//     console.log('resX:', resX); //10
//     new Promise(resolve => {
//       resolve(resX * 2);
//     });
//   })
//   .then(res => {
//     console.log('res:', res); //undefined
//   });

// ****************************
console.log('*****************');

// console.log('step 1');

// setTimeout(() => {
//   console.log('step 2');
// }, 0);

// new Promise(resolve => {
//   resolve('step 3');
// }).then(data => {
//   console.log(data);
// });

// setTimeout(() => {
//   console.log('step 4');
// }, 0);

// //step 1
// //step 3
// //step 2
// //step 4

// ****************************
console.log('*****************');

// console.log('step 1');

// setTimeout(() => {
//   console.log('step 2');
// }, 0);

// new Promise(resolve => {
//   resolve('step 3');
// })
//   .then(data => {
//     console.log(data);
//     return 'step 4';
//   })
//   .then(data => {
//     console.log(data);
//   });

// setTimeout(() => {
//   console.log('step 5');
// }, 0);

// //step 1
// //step 3
// //step 4
// //step 2
// //step 5

console.log('*****************');

// setTimeout(() => {
//   console.log('step 1');
// }, 0);

// new Promise(resolve => {
//   resolve('step 2');
// }).then(data => {
//   console.log(data);
//   setTimeout(() => {
//     console.log('step 3');
//   }, 0);
// });

// setTimeout(() => {
//   console.log('step 4');
// }, 0);

// // //step 2
// // //step 1
// // //step 4
// // //step 3

console.log('*****************');

// setTimeout(() => {
//   console.log('step 1');
// }, 0);

// setTimeout(() => {
//   console.log('step 2');

//   new Promise(resolve => {
//     resolve('step 3');
//   }).then(data => {
//     console.log(data);
//   });
// }, 0);

// new Promise(resolve => {
//   resolve('step 4');
// }).then(data => {
//   console.log(data);
// });

// setTimeout(() => {
//   console.log('step 5');
// }, 0);

// //step 4
// //step 1
// //step 2
// //step 3
// //step 5
