// console.log("Пройти прямо ");
// console.log("Повернути на 90 град наліво");
// console.log("Пройти прямо ");
// console.log("Повернути на 90 град наліво");
// console.log("Пройти прямо ");
// console.log("Повернути на 90 град наліво");
// console.log("Пройти прямо ");
// console.log("Повернути на 90 град наліво");

// while (умова) { цикл з передумовою
//   тіло циклу
// }

// змінна цикла
// 1 прохід циклу - ітерація

// let currentStep = 1;
// const STEPS_COUNT = 4;

// while (currentStep <= STEPS_COUNT) {
//   // console.log(currentStep);
//   console.log("Пройти прямо ");
//   console.log("Повернути на 90 град наліво");
//   currentStep++; //currentStep = currentStep + 1;
// }
// console.log("Next line");

// Вивести номери сторінок з 10 до 20

// let startPage = 10;
// const END_PAGE = 20;

// while (startPage <= END_PAGE) {
//   console.log(startPage++);
//   //   startPage++;
// }

// Вивести тільки парні номери сторінок

// let currentPage = 10;
// const pageCount = 20;

// while (currentPage <= pageCount) {
//   console.log(currentPage);
//   currentPage = currentPage + 2;
// }
// console.log("Next line");
//  10-20: 10, 12, 14, ...
// let currentPage = 10;
// const END_PAGE = 20;

// while (currentPage <= END_PAGE) {
//   console.log("Current page: ", currentPage);
//   currentPage += 2;
// }

// ВВести початкову і кінцеву сторінку і вивести парні номери

// let currentPage = Number(prompt("Input start page"));
// const endPage = Number(prompt("Input end page"));

// while (currentPage <= endPage) {
//   if (currentPage % 2 === 0) {
//     console.log(currentPage);
//   }
//   currentPage += 1;
// }

// ВВести число і, якщо воно коректне, вивести число в квадраті

// 1 ввести число
// 2 перевірити, чи воно скінченне
// 3 якщо нескінченне, то ввести заново - > step 2
// 4 якщо скінченне, то піднести до квадрату

// let inputNumber = Number(prompt("Input number"));

// // isFinite - false, if Infinity, NaN
// while (!Number.isFinite(inputNumber)) {
//   inputNumber = Number(prompt("Input number"));
// }

// console.log(`${inputNumber} ** 2 = ${inputNumber ** 2}`);

// let inputNumber = Number(prompt("Input number"));
// // якщо є break або continue - спробувати переписати без них
// while (true) {
//   if (Number.isFinite(inputNumber)) {
//     console.log(`${inputNumber} ** 2 = ${inputNumber ** 2}`);
//     break;
//   } else {
//     inputNumber = Number(prompt("Input number"));
//   }
// }

// do..while

// do {
//   // тіло циклу
// } while (умова); // цикл з післяумовою

// let inputNumber = null;

// do {
//   inputNumber = Number(prompt("Input number"));
// } while (!Number.isFinite(inputNumber));

// console.log(`${inputNumber} ** 2 = ${inputNumber ** 2}`);

// Вивести числа з 50 до 40 do..while

// let currentPage = 50;
// const END_PAGE = 40;

// do {
//   console.log(`Current page ${currentPage}`);
//   currentPage--;
// } while (END_PAGE <= currentPage);

// Користувач має 3 спроби ввести пароль
// Якщо пароль вірний, то вивести "Пароль вірний"
// Інакше "Пароль невірний"

// const RIGHT_PASSWORD = "qwerty";
// const TRY_LIMIT = 3;
// let isPasswordCorrect = false;

// let currentTry = 1;

// do {
//   let inputPassword = prompt("Input password");

//   if (inputPassword === RIGHT_PASSWORD) {
//     console.log("Password is correct");
//     isPasswordCorrect = true;
//     break;
//   }
// } while (++currentTry <= TRY_LIMIT);

// if (!isPasswordCorrect) {
//   console.log("Password is wrong");
// }

// const RIGHT_PASSWORD = "qwerty";
// const TRY_LIMIT = 3;
// let isPasswordCorrect = false;
// let currentTry = 1;

// do {
//   isPasswordCorrect = prompt("Input password") === RIGHT_PASSWORD;
// } while (++currentTry <= TRY_LIMIT && !isPasswordCorrect);

// console.log(`Password is ${isPasswordCorrect ? "correct" : "wrong"}`);

// якщо тіло циклу має виконатися хоч 1 раз, то do..while
// інакше while

// --- for ---
// for(початкове-значення; умова-продовження; зміна-лічильника){
//   тіло циклу
// }
// startPage = 1;
// stopPage = 10;
// step = 1;

// for (let startPage = 1; startPage <= stopPage; startPage++) {
//   console.log(startPage);
// }

// let startPage = 1;
// while (startPage <= stopPage) {
//   body;
//   startPage++;
// }

// вивести всі (непарні) значення з 101 до 91 (101, 99, 97, ...)
// const stopPage = 80;
// for (let startPage = 101; startPage >= stopPage; startPage -= 2) {
//   console.log(startPage);
// }

// const END_NUM = 91;

// for (let startNum = 101; startNum >= END_NUM; startNum -= 2) {
//   console.log(startNum);
// }

// let startNumber = 101;
// let endNumber = 91;
// for (let i = startNumber; i >= endNumber; i--) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }

// 0 (ініціалізація лічильника) виконується 1 раз до циклу
// 1 (умова продовження циклу)  якщо умова істинна, то виконуємо тіло циклу 2, інакше вихід
// 2 (тіло циклу)               виконується, якщо умова 1 істинна
// 3 (зміна лічильника)         виконується після кожної ітерації. Потім перехід на 1

// Знайти суму чисел від 1 до 20
// 1+2+3+4+....+20
// const startNumber = 1;
// const endNumber = 3;
// let sum = 0; // 0+1+2+... // accumulator

// for (let i = startNumber; i <= endNumber; i++) {
//   sum = sum + i;
// }
// console.log(sum);

// 0+1 = 1
// 1+2 = 3
// 3+3 = 6

// // Накопичити добуток (парних) чисел від 5 до 12 (6 8 10 12 = 5760)
// // 1*6*8*...
// const startNumber = 5;
// const endNumber = 12;
// let dob = 1;

// for (let i = startNumber; i <= endNumber; i++) {
//   dob *= i;
// }
// console.log(dob);

// const startNumber = 5;
// const endNumber = 12;
// let mul = 1;

// for (let i = startNumber; i <= endNumber; i++) {
//   if (i % 2 === 0) {
//     mul *= i;
//   }
// }
// console.log("Mul:", mul);

// сформувати табличку з стовпчиками - датами від поточної до кінця місяця

// 'yyyy-mm-dd'
const currentDate = new Date("2024-02-10");
const startDate = currentDate.getDate();
const monthNumber = currentDate.getMonth();
л;
const isLeapYear = true;

// 0, 2, 4, 6, 7, 9, 11 - 31;
// 3, 5, 8, 10 - 30;
// 1 - isLeapYear 29/28;
let endDate = null;
if (
  monthNumber === 0 ||
  monthNumber === 2 ||
  monthNumber === 4 ||
  monthNumber === 6 ||
  monthNumber === 7 ||
  monthNumber === 9 ||
  monthNumber === 11
) {
  endDate = 31;
} else if (
  monthNumber === 3 ||
  monthNumber === 5 ||
  monthNumber === 8 ||
  monthNumber === 10
) {
  endDate = 30;
} else if (isLeapYear) {
  endDate = 29;
} else {
  endDate = 28;
}
// 2
// const currentYear = currentDate.getFullYear(); //2024
// const nextMonth = monthNumber + 1;
// const lastMonthDate = new Date(currentYear, nextMonth, 0);
// const endDate = lastMonthDate.getDate();

document.write("<table><thead><tr>");
for (let date = startDate; date <= endDate; date++) {
  document.write(`<th>${date}</th>`);
}
document.write("</tr></thead></table>");
const isLogin = confirm("????");
console.log("isLogin :>> ", isLogin);
