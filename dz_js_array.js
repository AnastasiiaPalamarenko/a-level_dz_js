/* Збережіть у масив відповіді на запитання, задані за допомогою confirm.
 Використовуйте літеральний (декларативний) синтаксис масивів ([....,....,....]) */

 /*
 let arr = [];

 arr.push(confirm("Тебе есть 18?"));
 arr.push(confirm("Будешь пиво?"));
 console.log(arr);
*/

 /* Збережіть у масив відповіді запитаннь, задані з допомогою prompts.
  Використовуйте доступ до масиву за індексом та присвоєння (arr[....] = ....) */

  /*
let arr = [];

arr[0] = prompt("Сколько тебе лет?");
arr[1] = prompt("Что хочешь пить?");

console.log(arr);
*/

/* Попросіть користувача ввести (prompt) індекс у масиві.
 Виведіть значення елемента за цим індексом. Спробуйте також ввести індекс "length". */

 /*
 let arr = ["пиво" , "сидр" , "водка" , "настойка" , "ликер" , "виски"];

 alert(arr);
 userIndex = prompt("Введите индекс, того что хотите ");

 alert(arr[userIndex]);
*/

/* Попросіть користувача ввести (prompt) індекс у масиві, а також
 значення для цього індексу. Присвойте у введений індекс введене значення */

 /*
 let arr = [];

 userIndex = prompt("Введите индекс массива");
 userElement = prompt("Введите что будет под этим индексом");
 arr[userIndex] = userElement;

 console.log(arr);
*/

/* Створіть таблицю множення 5x5, як масив в пам'ятi, використовуючи декларативний синтаксис
 вкладених масивів const arr = [[....], [....], [....], .....]. Числа у вкладених масивах повинні
  дорівнювати добутку індексу зовнішнього масиву на індекс внутрішнього масиву: arr[2][3] === 6 */

  /*
  let arr = [ [0, 0, 0, 0, 0] , [0, 1, 2, 3, 4] , [0, 2, 4, 6, 8] , [0, 3, 6, 9, 12] , [0, 4, 8, 12, 16]];
*/

/* Використовуючи slice, створіть масив масивів (іншу таблицю/матрицю) з таблиці множення, в якій не буде нулів */

/*
let arr = [ [0, 0, 0, 0, 0] , [0, 1, 2, 3, 4] , [0, 2, 4, 6, 8] , [0, 3, 6, 9, 12] , [0, 4, 8, 12, 16]];

console.log(arr.slice(1));
*/

/* Запитайте у користувача рядок із кількох слів. Запитайте в нього потрібне слово.
 Виведіть, яким за рахунком є це слово у рядку з кількох слів. Якщо слово не знайдено,
  виведіть повідомлення про це (а не -1) */

  /*
let userStr = prompt("Введите рандомный набор слов");
let userWord = prompt("Введите ОДНО из слов, что вводили до этого");

let arr = userStr.split(' ');

let result = arr.indexOf(userWord);
if (result !== -1) {
    alert(result)
} else {
    alert("Не было такого")
}
*/

/* Додайте до масиву п'ять введених користувачем через prompt елементів (використовуйте push).
 Створіть інший масив із цими ж елементами в зворотньому напрямку.
  Для цього витягайте елементи з першого масиву використовуючи pop, додайте їх до другого використовуючи push. */

  /*
  let arr = [];
  
  for (let i = 0; i < 5; i++){
    let userElement = prompt("Введите элемент массива");
    arr.push(userElement);
  }

  let arr2 = [];

  while (arr.length > 0) {
    let reverse = arr.pop();
    arr2.push(reverse);
  }
  
  console.log("Ориг:", arr);
console.log("В обратном порядке:", arr2);
*/

/* Переверніть другий масив із попереднього завдання ще раз (послідовність буде як у першому масиві),
 використовуючи shift та unshift. */

/*
let arr3 = [];

 for (let i = 0; i < 5; i++){
  let shifted = arr2.shift();
  let unshifted = arr3.unshift(shifted);
 }

 console.log("arr3:", arr3);
 */

 /* Скопіюйте масив створений у завданні Multiply table неглибоко */

 /*
 let arr = [ [0, 0, 0, 0, 0] , [0, 1, 2, 3, 4] , [0, 2, 4, 6, 8] , [0, 3, 6, 9, 12] , [0, 4, 8, 12, 16]];

 console.log(arr.slice());
*/


 /* Скопіюйте масив, створений у Multiply table, включаючи вкладені масиви (глибока копія).
  Не треба шукати якесь складне готове рiшення, зробiть це максимально простим чином за умови,
   що вам треба скопiювати 6 масивiв - загальний масив та п'ять масивiв у ньому; */

   /*
   console.log(...arr);
*/

/* Створіть код, в якому буде дві змінні з масивами (arr і arr2), які рівні один одному (arr1 === arr2) */

/*
let arr1 = [1, 2, 3];
let arr2 = arr1;
console.log(arr2 === arr1);
*/

/* Зберіть усі елементи всіх вкладених масивів із завдання Multiply table в один масив.
 Його довжина повинна дорівнювати 25. Використовуйте spread-оператор */

 /*
 let arr = [ [0, 0, 0, 0, 0] , [0, 1, 2, 3, 4] , [0, 2, 4, 6, 8] , [0, 3, 6, 9, 12] , [0, 4, 8, 12, 16]];

 let arr2 = [...arr];
 console.log(arr2.length);
*/
/* Вийміть першу, п'яту та дев'яту літеру з рядка, введеного користувачем, використовуючи деструктуризацію. Виведіть їх */

/*
let userStr = prompt("Введите любое слово");

let arrUser = userStr.split('');

let [a,,,,b,,,,c] = arrUser;

console.log(arrUser);
console.log(a, b, c);
*/

/* Вийміть другу, четверту та п'яту літеру з рядка, введеного користувачем, використовуючи
 деструктуризацію. Якщо у рядку таких букв не виявиться задайте змінним значення за умовчанням ! (знак оклику).
  Виведіть ці змінні */

/*
let userStr = prompt("Введите любое слово");
let arrUser = userStr.split('');
let [,a = '!',,b = '!',c = '!'] = arrUser;

console.log(arrUser);
console.log(a, b, c);
*/

/* Реалізуйте завдання Multiply table slice, використовуючи оператор rest при деструктуризації.
 Використовуйте вкладену деструктуризацію. Після отримання чотирьох обрізаних вкладених масивів - зберіть
  загальний масив без нулів */

/*
 let arr = [ [0, 0, 0, 0, 0] , [0, 1, 2, 3, 4] , [0, 2, 4, 6, 8] , [0, 3, 6, 9, 12] , [0, 4, 8, 12, 16]];
 let [ ,...somethingElse] = arr;

 let arr2 = somethingElse;
 console.log(arr2);
*/

/* Є масив ["John", "Paul", "George", "Ringo"]. Виведіть кожне ім'я окремим alert(),
 використовуючи цикл for .... of */

 /*
 let arr = ["John", "Paul", "George", "Ringo"];

 for (name of arr){
  alert(name);
 }
*/

 /* Використовуючи код вище, створіть список, що випадає, з валютами.
  Елементи списку, що випадає, створюються за допомогою тега <option> */

  /*
  const currencies = ["USD", "EUR", "GBP", "UAH"];
  let   str = "<select>";
  for (const currency of currencies){
  str += `<option> ${currency} </option>`;
 
  }
  str+= "</select>";
  document.write(str); 
  */

  /* Аналогічно, виконайте виведення імен в осередки таблиці по горизонталі (один рядок з чотирма осередками) */
/*
  const names = ["John", "Paul", "George", "Ringo"]
let   str = "<table>"
for (const name of names){
  str += `<td> ${name} </td>`
}
str+= "</table>"
document.write(str) //document.write отобразит ваш HTML на странице
*/

/* Аналогічно, досягніть виведення імен в осередки таблиці по вертикалі
 (одна колонка з чотирма рядками, у кожному рядку - один осередок) */

 /*
 const names = ["John", "Paul", "George", "Ringo"]
let   str = "<table>"
for (const name of names){
  str += `<tr><td> ${name} </td></tr>`;
}
str+= "</table>"
document.write(str) //document.write відобразить ваш HTML на сторінці
*/

/* Використовуючи код вище, створіть таблицю 3x4. У кожному рядку три осередки з літерами,
 чотири рядки, так як 4 валюти в масиві. */

 /*
 const currencies = ["USD", "EUR", "GBP", "UAH"];
let str = "<table>";

for (const currency of currencies) {
  str += "<tr>";
  for (const letter of currency) {
    str += `<td>${letter}</td>`;
  }
  str += "</tr>";
}

str += "</table>";
document.write(str);
*/

/* Виведіть таблицю множення 5x5 із завдання Multiply table в таблицю,
 використовуючи вкладені for.... of та document.write */

 /*
 let arr = [ [0, 0, 0, 0, 0] , [0, 1, 2, 3, 4] , [0, 2, 4, 6, 8] , [0, 3, 6, 9, 12] , [0, 4, 8, 12, 16]];
let str = "<table>";

for (let i = 0; i < arr.length; i++) {
  const element = arr[i];
  const rowColor = i % 2 === 0 ? "lightgray" : "white";
  str += `<tr style="background-color: ${rowColor}">`;
  
  for (const number of element) {
    str += `<td>${number}</td>`;
  }
  
  str += "</tr>";
}

str += "</table>";
document.write(str);
*/

/* Реалізуйте завдання String: capitalize як окрему функцію: */

/*
const capitalize = str => {
  let result = str[0].toUpperCase() + str.slice(1).toLowerCase();
  return result;
}
console.log(capitalize("cANBerRa"));
*/

/* Нехай користувач вводить рядок. Розбийте його за пробілами.
 Використовуючи map та capitalize створіть масив у якому кожне слово буде з великої літери.
  Зберіть масив у рядок назад */

  /*
  const capitalize = str => {
    let result = str[0].toUpperCase() + str.slice(1).toLowerCase();
    return result;
  }

  let userStr = prompt("Введите рядок");
  let arr = userStr.split(' ');
  let wordCapitalize = arr.map(capitalize);
  let result = wordCapitalize.join(' ');
  
  console.log(result);
*/

/* Нехай користувач вводить рядок. Розбийте його за пробілами. 
Використовуючи filter поверніть true якщо елемент масиву не полягає у визначеному масиві неприпустимих слів.
 Якщо елемент масиву - неприпустиме слово, функція, передана в filter повинна повертати false.
  Зберіть масив у рядок назад. */
   
  /*
  function filterWords(word) {
    let badWords = ["бля", "пиздец", "сука", "ебать"];
    return !badWords.includes(word);
  }

  let userStr = prompt("Введите рядок");
  let arr = userStr.split(' ');
  let filterArr = arr.filter(filterWords);
  let result = filterArr.join(' ');
  
  console.log(result);
*/

/* Нехай користувач вводить рядок. Розбийте його за пробілами.
 Використовуючи map та тернарний оператор поверніть з функції слово без змін, якщо воно не полягає в
  якомусь іншому масиві заборонених слів. Якщо слово полягає в цьому списку, функція повинна повернути
  слово BEEP. Зберіть масив назад у рядок через пробіл. Таким чином, ви зможете реалізувати заміну
  кількох заборонених слів на BEEP. */

/*
  function filterWords(word, badWords) {
    return badWords.includes(word) ? "BEEP" : word;
  }

  let badWords = ["бля", "пиздец", "сука", "ебать"];
  let userStr = prompt("Введите рядок");
  let arr = userStr.split(' ');
  let filterArr = arr.map(word => filterWords(word, badWords));
  let result = filterArr.join(' ');
  
  console.log(result);
*/

/* Реалізуйте завдання For Select Option використовуючи reduce: */

  const currencies = ["USD", "EUR", "GBP", "UAH"]
  let str          = "<select>"
  str             += currencies.reduce( (a,b) => a + `<option>${b}</option>`, "")
  str             += "</select>"
  document.write(str);


