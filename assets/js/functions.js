// ім'я - найчастіше дієслово
// одна функція - одна дія

// 1
// function sayHello() {
//   document.write(`<p>Hello User!</p>`);
// }

// sayHello();
// 2
// function sayHello(user, surname) {
//   // параметри
//   document.write(`<p>Hello ${user} ${surname}!</p>`);
// }

// sayHello("Test", "Testovych"); // аргументи
// sayHello("Wally", "Robot"); // аргументи

// 3
// function sayHello(user, surname) {
//     return `Hello ${user} ${surname}!`;
//   }

//   const helloString = sayHello("Test", "Testovych"); // "Hello Test Testovych"
//   console.log("helloString :>> ", helloString);
//   document.write(`<p>${helloString}</p>`);

// Прописати функцію, яка повертає суму двох чисел

// function sum(a, b) {
//   return a + b;
// }
// console.log(sum(2, 3));

// function sum(a, b) {
//   return a + b;
// }
// const c = sum(2, 3);
// console.log(c);
// function sum(a, b) {
//   return a + b;
// }

// function inputSummand(summandNumber) {
//   let summand;

//   do {
//     summand = prompt(`Enter ${summandNumber} number`);
//   } while (!Number.isFinite(+summand) || summand === "");

//   return Number(summand);
// }

// const firstSummand = inputSummand(1);
// const secondSummand = inputSummand(2);

// const result = sum(firstSummand, secondSummand);
// console.log(result);

// function sumNumber(a, b) {
//   return a + b;
// }
// const sum = sumNumber(4, 5);
// console.log(sum);

// Написати функцію isAdult для визначення чи повнолітній, чи ні (=> false/true)

// function isAdult(age) {
//   return age >= 18;
// }

// const age = 2;
// console.log(isAdult(age));

// згенерувати розмітку для 3х новин (заголовок, тіло, дата)
// вивести попередження, якщо новини переглядає неповнолітній
// для сьогонішніх новин (підсвітити червоним заголок, New!)

const age = 16;

// Змінні для заголовка новини
// const newsTitle1 = "Lorem ipsum dolor sit amet";
// const newsTitle2 = "Consectetur adipiscing elit";
// const newsTitle3 = "Sed do eiusmod tempor";

// // Змінні для тіла новини
// const newsBody1 =
//   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
// const newsBody2 =
//   "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
// const newsBody3 =
//   "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";

// // Змінні для дати новини
// const newsDate1 = new Date("2024-05-20");
// const newsDate2 = new Date("2024-05-17");
// const newsDate3 = new Date("2024-05-16");

// function news(newsTitle, newsBody, newsDate) {
//   const nowSpan =
//     newsDate.toLocaleDateString() === new Date().toLocaleDateString()
//       ? " <span class='todayNews'>New!</span>"
//       : "";

//   return `
//               <article>
//                 <h3>${newsTitle}${nowSpan}</h3>
//                 <p>${newsBody}</p>
//                 <p>${newsDate.toDateString()}</p>
//               </article>`;
// }
// if (age < 18) {
//   document.write("Контент може містити ...");
// }
// document.write(
//   news(newsTitle1, newsBody1, newsDate1),
//   news(newsTitle2, newsBody2, newsDate2),
//   news(newsTitle3, newsBody3, newsDate3)
// );

// Значення за замовчуванням, типові значення

// pow(4) // 16
// pow(4, 3) // 64

// /**
//  * @function pow
//  * @param {number} a - Power base
//  * @param {number} [exp = 2] - Power exp
//  * @returns {number} Base a in power exp
//  */

// function pow(a, exp = 2) {
//   //   if (exp === undefined) {
//   //     exp = 2;
//   //   }
//   return a ** exp;
// }
// console.log(pow(4));
// console.log(pow(4, 3));

// // Написати функцію, яка приймає ім'я і прізвище користувача і генерує картку
// // Якщо прізвище не задано, то виводити Anonimus

// /**
//  *@function userCard
//  * @param {string} name - User name
//  * @param {string} [surname="anonimus"] - User surname
//  * @returns {string} - Making user card
//  */

// function userCard(name, surname = "anonimus") {
//   return `
//     <article>
//       <h2>${name} ${surname}</h2>
//     </article>`;
// }
// document.write(userCard("Alex"));

// function userCard(name, surname = "anonimus") {
//   const userCard = `
//     <artcle>
//        <h2>${name} ${surname}</h2>
//     </artcle>`;
//   return userCard;
// }

// document.write(userCard("Alex"));
// fName();
// Function Declaration - можна використовувати до оголошення
// function fName(par1, par2) {
//   console.log("TEST fName:>> ");
// }

// Function Expression - не можна використовувати до оголошення
// const fName1 = function (par1, par2) {
//   console.log("TEST fName1:>> ");
// };

// fName1();

// function userCard(name, surname = "anonimus") {
//   return `
//     <article>
//       <h2>${name} ${surname}</h2>
//     </article>`;
// }

// const userCard = function (name, surname = "anonimus") {
//   return `
//     <article>
//       <h2>${name} ${surname}</h2>
//     </article>`;
// };
// userCard();

// // Чисті функції
// // 1) детерміновані - при одних і тих самих параметрах повертатимуть одне і те саме значення
// // 2) без побічних ефектів - завантаження/localStorage

// let b = 10;

// function notDeterm(a) {
//   //   return a * Math.random();
//   return a * b;
// }

// console.log(notDeterm(100));

// b = 200;
// console.log(notDeterm(100));
