// const sum = function (a, b) {
//   return a + b;
// }

const sum = (a, b) => {
  return a + b;
};

// Task: Записати isAdult у вигляді стрілочної функції
// Приймає вік
// Повертає істину для повнолітнього, false для неповнолітнього

const isAdult = (age) => {
  return age >= 18;
};

// Спрощення при запису стрілочної функції -------------
// 1 Якщо параметр 1, то можна не брати його у дужки
const isAdult = (age) => {
  return age >= 18;
};

// 2 Якщо в тілі функції тільки повернення значення,
//        то дужки і return можна опустити
const sum = (a, b) => a + b;

// 3 Якщо в скороченому записі вигляду 2 повертається об'єкт,
//        то його портібно взяти в ()

const packObject = (firstName, lastName) => ({
  firstName: firstName,
  lastName: lastName,
});
// Обмеження: ----------------------------------------
// 1 Нема arguments
// 2 Нема свого this. Бере з середовища,
//   тому не використовується як метод об'єкта

const a = {
  key: 10,
  meth: () => {
    console.log("this :>> ", this); // взяв з середовища - window
  },
};
a.meth();

// Task: Функція greeting(lang, userName), яка має повертати
// 'Hello' + userName, if lang==='en'
// 'Вітаю' + userName, if lang==='ua'

// greeting('ua', "Ivo") => "Вітаю Ivo"
// greeting('en',"Ivo") => "Hello Ivo"

// const greeting = (lang, userName) =>
//   lang === "ua" ? "Вітаю" + userName : "Hello" + userName;
const greetingOptions = {
  en: "Hello",
  ua: "Вітаю",
};

// const lang = "ua";

const greeting = (lang, userName) => `${greetingOptions[lang]} ${userName}`;

console.log(greeting("en", "Ivo"));
console.log(greeting("ua", "Іво"));
