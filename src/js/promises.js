// Проміси

//Життєвий цикл проміса

//Створення проміса

/*
const promise = new Promise((resolve, reject) => {
  // Asynchronous operation
});

*/

const isSuccess = true;

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isSuccess) {
      resolve('Success! Value passed to resolve function');
    } else {
      reject('Error! Error passed to reject function');
    }
  }, 2000);
});

console.log(promise); // Об'єкт промісу

//Метод then()

/*
promise.then(onResolve, onReject)
*/
// Registering promise callbacks

/*
promise.then(
  value => {
    console.log(value); // "Success! Value passed to resolve function"
  },
  error => {
    console.log(error); // "Error! Error passed to reject function"
  }
);
*/

// Метод catch()

/*
promise
	.then(value => {
		// Promise fulfilled
	})
	.catch(error => {
	  // Promise rejected
	});

*/

// Registering promise callbacks
/*
promise
  .then(value => {
    console.log(value); // "Success! Value passed to resolve function"
  })
  .catch(error => {
    console.log(error); // "Error! Error passed to reject function"
  });
  */

//Метод finally()

/*
promise
	.then(value => {
	  // Promise fulfilled
	})
	.catch(error => {
	  // Promise rejected
	})
	.finally(() => {
	  // Promise fulfilled or rejected
	});

*/

// Registering promise callbacks
promise
  .then(value => console.log(value)) // "Success! Value passed to resolve function"
  .catch(error => console.log(error)) // "Error! Error passed to reject function"
  .finally(() => console.log('Promise settled')); // "Promise settled"

//Ланцюжки промісів

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(5);
  }, 2000);
});

promise1
  .then(value => {
    console.log(value); // 5
    return value * 2;
  })
  .then(value => {
    console.log(value); // 10
    return value * 3;
  })
  .then(value => {
    console.log(value); // 30
  })
  .catch(error => {
    console.log(error);
  })
  .finally(() => {
    console.log('finally');
  });
