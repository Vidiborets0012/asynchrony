//Дата і час

//Створення дати

// const date = new Date();

// console.log(date);

//Встановлення дати

const date1 = new Date('2030-03-16');
console.log('date1:', date1); // Sat Mar 16 2030 02:00:00 GMT+0200 (Восточная Европа, стандартное время)

const date2 = new Date('2030-03-16T14:25:00');
console.log('date2:', date2); // "Sat Mar 16 2030 14:25:00 GMT+0200"

console.log(new Date('2030')); // "Tue Jan 01 2030 02:00:00 GMT+0200"
console.log(new Date('2030-03')); // "Fri Mar 01 2030 02:00:00 GMT+0200"
console.log(new Date('2030-03-16')); // "Sat Mar 16 2030 02:00:00 GMT+0200"
console.log(new Date('2030-03-16T14:25:00')); // "Sat Mar 16 2030 14:25:00 GMT+0200"

console.log('**********');

const date3 = new Date(2030, 2, 16, 14, 25, 0, 0);
console.log('date3:', date3); // "Sat Mar 16 2030 14:25:00 GMT+0200 "

console.log('**********');
//Unix час

console.log(new Date(0));
// "Thu Jan 01 1970 03:00:00 GMT+0300 (Eastern European Standard Time)"

console.log(new Date(15000));
// "Thu Jan 01 1970 03:00:15 GMT+0300 (Eastern European Standard Time)"

const date4 = new Date();
console.log('date4.getTime():', date4.getTime()); //

console.log('**********');
//Метод Date.now()

const time = Date.now();
console.log('time:', time);

/*
const startTime = Date.now();

// Твій код, виконуваний упродовж деякого часу
for (let i = 0; i <= 100; i += 1) {
  console.log(i);
}

const endTime = Date.now();
const elapsedTime = endTime - startTime;

console.log(`Elapsed time: ${elapsedTime} ms`);
*/

console.log('**********');
//Геттери і сеттери

const dateX = new Date('March 16, 2030 14:25:00');
console.log('Date: ', dateX); // "Sat Mar 16 2030 14:25:00 GMT+0200"

// Повертає день місяця від 1 до 31
console.log('Day: ', dateX.getDate()); // 16

// Повертає день тижня від 0 до 6, починається з неділі
console.log('Day of the week: ', dateX.getDay()); // 6

// Повертає місяць від 0 до 11
console.log('Month: ', dateX.getMonth()); // 2

// Повертає рік з 4 цифр
console.log('Full year: ', dateX.getFullYear()); // 2030

// Повертає години
console.log('Hours: ', dateX.getHours()); // 14

// Повертає хвилини
console.log('Minutes: ', dateX.getMinutes()); // 25

// Повертає секунди
console.log('Seconds: ', dateX.getSeconds()); // 0

// Повертає мілісекунди
console.log('Milliseconds: ', dateX.getMilliseconds()); // 0
