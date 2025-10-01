//Обробка множинних промісів

//Метод Promise.all()

/*
Promise.all([promise1, promise2, promise3, ...])
*/

const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = Promise.resolve(3);

Promise.all([p1, p2, p3])
  .then(values => console.log(values)) // [1, 2, 3]
  .catch(error => console.log(error));

const pr1 = Promise.resolve(1);
const pr2 = Promise.reject('Rejected promise 2');
const pr3 = Promise.resolve(3);

Promise.all([pr1, pr2, pr3])
  .then(values => console.log(values))
  .catch(error => console.log(error)); // "Rejected promise 2"

// ************************
//Метод Promise.allSettled()

/*
Promise.allSettled([promise1, promise2, promise3, ...])
*/

const prom1 = Promise.resolve(1);
const prom2 = Promise.reject('Rejected promise 2');
const prom3 = Promise.resolve(3);

Promise.allSettled([prom1, prom2, prom3]).then(values => console.log(values));
// [
//   { status: "fulfilled", value: 1},
//   { status: "rejected", value: "Rejected promise 2"},
//   { status: "fulfilled", value: 3}
// ]

console.log(Promise.allSettled([prom1, prom2, prom3]));

// *******************************
//Метод Promise.race()

/*
Promise.race([promise1, promise2, promise3, ...])
*/

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(2), 2000);
});

Promise.race([promise1, promise2])
  .then(value => console.log(value)) // 1
  .catch(error => console.log(error));

// **************************
const promise1_1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 2000);
});

const promise2_1 = new Promise((resolve, reject) => {
  setTimeout(() => reject(2), 1000);
});

Promise.race([promise1_1, promise2_1])
  .then(value => console.log(value))
  .catch(error => console.log(error)); // 2
