//Промісифікація

//Колбеки vs проміси

//Промісифікація функцій

/*
const fetchUserFromServer = (username, onSuccess, onError) => {
  console.log(`Fetching data for ${username}`);

  setTimeout(() => {
    // Change value of isSuccess variable to simulate request status
    // const isSuccess = false;
    const isSuccess = true;

    if (isSuccess) {
      onSuccess('success value');
    } else {
      onError('error');
    }
  }, 2000);
};

fetchUserFromServer(
  'Mango',
  user => console.log(user),
  error => console.error(error)
);
*/

// ****************************
console.log('***************');

/*
const fetchUserFromServer1 = username => {
  return new Promise((resolve, reject) => {
    console.log(`Fetching data for ${username}`);

    setTimeout(() => {
      // Change value of isSuccess variable to simulate request status
      const isSuccess = true;

      if (isSuccess) {
        resolve('success value'); // значенням параметра resolve буде колбек-функція методу then()
      } else {
        reject('error'); // значенням параметра reject буде колбек-функція методу catch()
      }
    }, 2000);
  });
};

const userPromise = fetchUserFromServer1('Mango');
console.log('userPromise:', userPromise);

fetchUserFromServer1('Mango') // результатом виклику fetchUserFromServer1("Mango") буде проміс
  .then(user => console.log(user)) // проміс обробляємо в методі then()
  .catch(error => console.error(error)); // проміс обробляємо в методі catch()
*/

//Promise.resolve() і Promise.reject()

/*
new Promise(resolve => resolve("success value"))
	.then(value => console.log(value));
	.catch(error => console.log(error));
*/

// Promise.resolve('success value')
//   .then(value => console.log(value))
//   .catch(error => console.log(error));

/*
new Promise((resolve, reject) => reject("error"));
	.then(value => console.log(value));
	.catch(error => console.log(error));
*/

// Promise.reject('error')
//   .then(value => console.log(value))
//   .catch(error => console.log(error));

//Промісифікація синхронних функцій

/*
const makeGreeting = (guestName, onSuccess, onError) => {
  if (!guestName) {
    onError('Guest name must not be empty');
  } else {
    onSuccess(`Welcome ${guestName}`);
  }
};

makeGreeting(
  'Mango',
  greeting => console.log(greeting),
  error => console.error(error)
);
*/

//Зробимо промісифікацію функції makeGreeting =>

/*
const makeGreeting = guestName => {
  return new Promise((resolve, reject) => {
    if (!guestName) {
      reject('Guest name must not be empty');
    } else {
      resolve(`Welcome ${guestName}`);
    }
  });
};

makeGreeting('Mango')
  .then(greeting => console.log(greeting))
  .catch(error => console.error(error));
*/

//використаємо методи класу Promise =>
/*
const makeGreeting = guestName => {
  if (!guestName) {
    return Promise.reject('Guest name must not be empty');
  } else {
    return Promise.resolve(`Welcome ${guestName}`);
  }
};

makeGreeting('Mango')
  .then(greeting => console.log(greeting))
  .catch(error => console.error(error));
*/

// ********************************
console.log('******************');

//Створення промісів із затримкою

/*
const makePromise = options => {
  return new Promise((resolve, reject) => {
    // ...
  });
};

makePromise({
  value: 'Some value',
  delay: 2000,
  shouldResolve: true,
});
*/
// =>

const makePromise = ({ value, delay, shouldResolve = true }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(value);
      } else {
        reject(value);
      }
    }, delay);
  });
};

makePromise({ value: 'A', delay: 1000 })
  .then(value => console.log(value)) // "A"
  .catch(error => console.log(error));

makePromise({ value: 'B', delay: 3000 })
  .then(value => console.log(value)) // "B"
  .catch(error => console.log(error));

makePromise({ value: 'C', delay: 2000, shouldResolve: false })
  .then(value => console.log(value))
  .catch(error => console.log(error)); // "C"
