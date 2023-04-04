/* Запитайте у користувача ім'я та привітайте його за допомогою alert. */
/*
let name = prompt('Как вас звут?');
alert('Привет, ' + name);
*/

/* Попросіть користувача ввести рядок через 'prompt'.
 Використовуючи split та join зробіть що б після будь-якої коми слід було слово блін, . */

/*
 let str = prompt('Введите какое-то предложение');
 let newStr = str.split(',').join(', блин');
 alert(newStr);
 */

/* Перетворіть рядок,
  введений користувачем, таким чином, щоб перша літера ставала великою, а решта - маленькими: */
/*
let str = "cANBerRa";
let result = str[0].toUpperCase() + str.slice(1).toLowerCase();

console.log(result); //Canberra
*/

/* Порахуйте кількість слів у рядку.
 Використовуйте розбиття за пробілами. Довжина масиву називається так само, як і довжина рядка. */
/*
 let str = "Привет я тут";

 let result = str.split(' ');
 console.log(`Символов ${result.length}`);
*/

/* 1. Запитайте у користувача ПІБ, використовуючи prompt тричі. Викиньте зайві прогалини,
 використовуючи .trim
2. Використовуючи String: capitalize зробіть так, щоб кожне слово у ПІБ було з великої літери,
 а решта - маленькі
3. Об'єднайте ці три рядки в один змінний fullName і виведіть кудись (alert, console.log).
 Не забудьте прогалини між словами. */

/*
 let surname = prompt('Введите свою фамилию').trim();
 let name = prompt('ВВедите свое имя').trim();
 let secondName = prompt('Введите свое отчество').trim();
 
 let resultSurname = surname[0].toUpperCase() + surname.slice(1).toLowerCase();
 let resultName = name[0].toUpperCase() + name.slice(1).toLowerCase();
 let resultSecondName = secondName[0].toUpperCase() + secondName.slice(1).toLowerCase();

let fullName = `${resultSurname} ${resultName} ${resultSecondName}`;
alert(fullName);
*/

/* Не використовуючи .replace замініть слово пиво у рядку на слово чай */
/*
let str = "Було жарко. Василь пив пиво вприкуску з креветками";
let newStr = str.split("пиво").join("чай");
console.log(newStr);
*/

/* Знайдіть у рядку HTML тег. Видаліть, тобто виріжте його - створіть інший рядок,
 в якому будуть всі символи до тега і після нього Тег може бути будь-яким.
  split і join не використовуйте, натомість використовуйте indexOf і slice. .replace не використовуйте */
/*
  let str = "якийсь текст, в якому є один тег <br /> і всяке інше";
let tagStart = str.indexOf('<');
let tagEnd = str.indexOf('>');
let result = str.slice(0, tagStart) + str.slice(tagEnd + 1);
console.log(result);
*/

/*Нехай користувач введе будь-який текст із посиланням на youtube. Використовуючи регулярний вираз вийміть із посилання ідентифікатор видосу і створіть рядок із вбудованим блоком HTML. Додайте блок на сторінку.
оголосіть константу з регулярним виразом
використовуйте метод match, який поверне вам масив
вийміть із масиву елемент із ідентифікатором відео
вивчіть HTML код вбудовування відео на сторінку на youtube.
використовуючи інтерполяцію рядків, вклейте ідентифікатор відео в HTML код вбудовування відео
використовуючи document.write відправте отриманий рядок на сторінку. */

const regex =
  /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]+)/;

const userInput = prompt("Введіть текст із посиланням на youtube:");
const match = userInput.match(regex);

if (match) {
  const videoId = match[1];
  const embedHtml = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  document.write(embedHtml);
} else {
  document.write("Посилання на youtube не знайдено");
}
