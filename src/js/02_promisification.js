/*
 * Промісифікація:
 * - Проблема доступу до результату проміса з колбеком
 * - Функція, яка повертає проміс
 */

// const makeOrder = (dish, onSucces, onError) => {
//   const random = Math.random();

//   setTimeout(() => {
//     if (random > 0.5) {
//       onSucces(`Ваше замовлення: ${dish}`);
//       return;
//     }

//     onError('Закінчилися продукти');
//   }, 1000);
// };

// makeOrder(
//   'пиріжок',
//   str => {
//     console.log('onSucces:', str);
//   },
//   err => {
//     console.log('onError:', err);
//   }
// );

console.log('*********************');

// const makeOrder1 = dish => {
//   return new Promise((resolve, reject) => {
//     const random = Math.random();

//     setTimeout(() => {
//       if (random > 0.5) {
//         resolve(`Ваше замовлення: ${dish}`);
//       }

//       reject('Закінчилися продукти');
//     }, 1000);
//   });
// };

// // console.log(makeOrder1()); //Promise {<pending>}

// makeOrder1('пиріжок')
//   .then(res => {
//     console.log('then:', res);
//   })
//   .catch(error => {
//     console.log('catch:', error);
//   });

/*
 * Промісифікація «синхронних» функцій
 * - Promise.resolve()
 * - Promise.reject()
 */

// const makeOrder1 = dish => {
//   const random = Math.random();

//   if (random > 0.5) {
//     return Promise.resolve(`Ваше замовлення: ${dish}`);
//   }

//   return Promise.reject('Закінчилися продукти');
// };

// makeOrder1('пиріжок')
//   .then(res => {
//     console.log('then:', res);
//   })
//   .catch(error => {
//     console.log('catch:', error);
//   });

console.log('**************');

// ************************************
// Promise.all

const startTime = Date.now();

const res1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const currentTime = Date.now();
      const deltaTime = currentTime - startTime;

      resolve({ title: 'first', time: deltaTime });
    }, 3000);
  });
};

const res2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const currentTime = Date.now();
      const deltaTime = currentTime - startTime;

      resolve({ title: 'second', time: deltaTime });
    }, 1000);
  });
};

const res3 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const currentTime = Date.now();
      const deltaTime = currentTime - startTime;

      resolve({ title: 'third', time: deltaTime });
    }, 5000);
  });
};

// res1()
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.log(error);
//   });

// res2()
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.log(error);
//   });

// res3()
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.log(error);
//   });

// Promise.all([res1(), res2(), res3()])
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.log(error);
//   });

// console.log([res1(), res2(), res3()]);

console.log('**************');
// Promise.race;

// Promise.race([res1(), res2(), res3()])
//   .then(data => {
//     console.log('then:', data);
//   })
//   .catch(error => {
//     console.log('catch:', error);
//   });
