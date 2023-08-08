/* Знайдіть кілька навколишніх об'єктів реального світу та створіть відповідні об'єкти Javascript. */
/*
let salad = {
  potato: "200 g",
  onion: "100 g",
  tomato: "150 g",
  chicken: "400 g",
};

let Nastya = {
  name: "Nastya",
  surname: "Palamarenko",
  age: "21",
};
*/
/* Дайте можливість користувачеві додати будь-які дві властивості до цих об'єктів з будь-якими значеннями.
 Забезпечте введення назви ключа і значення через prompt прямо в літералі об'єкта {} */
/*
salad[prompt("Введите имя ключа")] = prompt("значение ключа");
salad[prompt("Введите имя ключа второго")] = prompt("значение ключа второго");
*/
/* Нехай користувач введе ще одну властивість змінну. Вставте цю змінну в новий об'єкт.
 Скопіюйте об'єкт із попереднього завдання на новий об'єкт. */
/*
let newSalad = { ...salad };
newSalad[prompt("Введите имя ключа нового объекта")] = prompt(
  "значение ключа нового объекта"
);
*/
/* 
 <body>
        <div>
            <span>Enter a data please:</span><br/>
            <input type='text' id='name'>
            <input type='text' id='surname'>
        </div>
        <div>
            <button id='ok'>OK</button>
            <button id='cancel'>Cancel</button>
        </div>
    </body>

 Зробіть декларативну JSON-структуру для тегів вище, у якій:
-кожен тэг буде об'єктом
-ім'я тега буде полем tagName
-Вкладені теги будуть у полі children
-Набір аттрибутів тега буде в полі attrs.
-Виведіть значення тексту в другій кнопці, використовуючи . та [].
-Виведіть значення атрибуту id у другому input, використовуючи . та [].
 */
/*
let body = {
  tagName: "body",
  children: [
    {
      tagName: "div",
      children: [
        {
          tagName: "span",
          children: ["Enter a data please:"],
        },
        {
          tagName: "/br",
        },
        {
          tagName: "input",
          attrs: {
            type: "text",
            id: "name",
          },
        },
        {
          tagName: "input",
          attrs: {
            type: "text",
            id: "surname",
          },
        },
      ],
    },
    {
      tagName: "div",
      children: [
        {
          tagName: "button",
          attrs: {
            id: "ok",
          },
          children: ["OK"],
        },
        {
          tagName: "button",
          attrs: {
            id: "cancel",
          },
          children: ["CANCEL"],
        },
      ],
    },
  ],
};

console.log(body.children[1].children[1].children[0]);
console.log(body.children[0].children[3].attrs.id);
*/
/* одайте кожному об'єкту тега з попереднього завдання зв'язок з батьком, використовуючи властивість parent та присвоєння */
/*
body.children[0].parent = body;
body.children[1].parent = body;
body.children[0].children[0].parent = body.children[0];
body.children[0].children[0].children.parent = body.children[0].children[0];
body.children[0].children[1].parent = body.children[0];
body.children[0].children[2].parent = body.children[0];
body.children[0].children[3].parent = body.children[0];
body.children[1].children[0].parent = body.children[1];
body.children[1].children[0].children.parent = body.children[1].children[0];
body.children[1].children[1].parent = body.children[1];
body.children[1].children[1].children.parent = body.children[1].children[1];
*/
/* Додайте (або змініть) будь-який введений користувачем атрибут тега <button id='ok'> із завдання HTML Tree. Також користувач вводить значення цього атрибута. */

/*
body.children[1].children[0].attrs[prompt("Введите атрибут")] = prompt("значение атрибута");
*/

/* Використовуючи деструктуризацію структури із завдання HTML Tree:
-Виведіть значення тексту у тезі span,
-Виведіть значення тексту в другій кнопці та
-Виведіть значення атрибуту id у другому input. */
/*
const {
  children: [
    {
      children: [
        {
          children: [spanText],
        },
      ],
    },
  ],
} = body;
console.log(spanText);

const {
  children: [
    ,
    {
      children: [
        ,
        {
          children: [buttonText],
        },
      ],
    },
  ],
} = body;

console.log(buttonText);

const {
  children: [
    {
      children: [
        ,
        ,
        ,
        {
          attrs: { id: textId },
        },
      ],
    },
  ],
} = body;

console.log(textId);
*/

/* напишіть код, який використовуючи деструктуризацію покладе:
-парні числа в змінні even1, even2,
-непарні в odd1, odd2, odd3,
-Букви в окремий масив */

/*
let arr = [1,2,3,4,5, "a", "b", "c"];
let [odd1, even1, odd2, even2, odd3, ...arr1] = arr;
*/

/* напишіть код, який використовуючи деструктуризацію покладе:
-Число в змінну number
-літеру a в змінну s1
-літеру b у змінну s2
-літеру c у змінну s3 */

/*
let arr = [1, "abc"];
let arr2 = (arr[0] + arr[1]).split("");
let [number, s1, s2, s3] = arr2;
*/

/* вийміть використовуючи деструктуризацію імена дітей у змінні name1 та name2 */

/*
let obj = {name: 'Ivan',
           surname: 'Petrov',
           children: [{name: 'Maria'}, {name: 'Nikolay'}]
        }

const {
    children: [
        {name: name1},
        {name: name2},
    ],
} = obj;
console.log( name1, name2);
*/

/* вийміть використовуючи деструктуризацію об'єктів два перші елементи та довжину масиву в змінні a, b та length */
 /*
let arr = [1,2,3,4,5,6,7,10];
let { 0: a, 1: b, length } = arr;
*/

/* Зробіть копію одного з об'єктів із завдання Literals без ключа, який введе користувач, з використанням деструктурiзацiї та rest. */
/*
let nastya = {
  name: "Nastya",
  surname: "Palamarenko",
  age: "21",
};


let {[[prompt("Введите имя ключа")]]:a, ...rest } = nastya;
console.log(rest);
*/

/* Нижче наведено код, який завантажує актуальну інформацію про курси валют. Скопіюйте посилання з нього вставте в браузер заради інтересу. Реалізуйте калькулятор обміну валют таким чином:
Користувач вводить вхідну валюту
Користувач вводить валюту, в яку відбувається конвертація
Користувач вводить суму у вхідній валюті
Користувач бачить результат конвертації
Врахуйте, що користувач може ввести якусь дичину або назву валют у неправильному регістрі
*/
/*
fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json())
     .then(data => {
      const {rates:currencies} = data;
      let firstCur = prompt("Введіть вхідну валюту").trim().toUpperCase();
      let secondCur = prompt("валюту, в яку відбувається конвертація").trim().toUpperCase();
      let sum = prompt("Введіть суму у вхідній валюті");
      
      if(firstCur in currencies &&
        secondCur in currencies &&
        !isNaN(sum)){
          let result = (sum / currencies[firstCur]) * currencies[secondCur];
          alert(result);
      } else {
        alert("Вы ввели что то не то");
      }
         })
*/
/* Зробіть список, що випадає, з назвами всіх валют, 
використовуючи код з минулого завдання і накопичення HTML-тегів у рядковій змінній. Для списків, що випадають,
 в HTML передбачені теги <select> і <option> */

/*
fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json())
     .then(data => {
      const {rates:currencies} = data;
      let   str = "<select>";
      for (const currency in currencies){
        str += `<option> ${currency} </option>`;
       
        }
        str+= "</select>";
        document.write(str); 
         })
*/

/* Зробіть двовимірну таблицю з курсами між усіма можливими парами валют на кшталт таблиці Піфагора, використовуючи код із завдання Currency real rate: */

/*
fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json())
     .then(data => {
      const {rates:currencies} = data;
      let arrCurrencies = Object.keys(currencies);
      let str = "<table>";
      str += `<tr><tr><th></th>`;
for (const element of arrCurrencies) {
    str += `<td>${element}</td>`;
}
str += "</tr>";
for (const element of arrCurrencies){
  str += `<tr><td>${element}</td>`;
  for (const element1 of arrCurrencies){
    const rate = currencies[element1] / currencies[element];
    str += `<td>${rate.toFixed(1)}</td>`;
  }
  str += "</tr>";
}

str += "</table>";
document.write(str); 
         })
*/

/* Напишіть код, який будь-якого об'єкта створює форму HTML. Наприклад для такого об'єкту */

/*
const car = {
  "Name":"chevrolet chevelle malibu",
  "Cylinders":8,
  "Displacement":307,
  "Horsepower":130,
  "Weight_in_lbs":3504,
  "Origin":"USA",
  "in_production": false
}

let str = "<form>";
for (let [key, value] of Object.entries(car)){

  let type = "checkbox";
  if(typeof value === "number"){
    type = "number";
  } else if (typeof value === "string"){
    type = "text";
  }
  str += `<label>${key}: <input type=${type} value=${value}></label><br>`
}
str += "</form>";
document.write(str); 
*/

//Дано будь-який масив з об'єктами
//Сформувати таблицю (використовуючи накопичення тегів HTML у рядку):
/*
  const persons = [
    {
      name: "Марія",
      fatherName: "Іванівна",
      surname: "Іванова",
      sex: "female",
    },
    {
      name: "Миколай",
      fatherName: "Іванович",
      surname: "Іванов",
      age: 15,
    },
    {
      name: "Петро",
      fatherName: "Іванович",
      surname: "Іванов",
      married: true,
    },
  ];

  const arr = [];
  for (const person of persons) {
    for (const key of Object.keys(person)) {
      if (!arr.includes(key)) {
        arr.push(key);
      }
    }
  }
  let str2 = "<style>table, td { border: 1px solid; text-align:center}</style>";
  str2 += "<table><tr>";
  for (const key of arr) {
    str2 += "<th>" + key + "</th>";
  }
  for (const person of persons) {
    str2 += "<tr>";
    for (const key of arr) {
      if (person[key] !== undefined) {
        str2 += `<td>${person[key]}</td>`;
      } else {
        str2 += "<td></td>";
      }
    }
    str2 += "</tr>";
  }
  str2 += "</table>";
  document.querySelector("body").innerHTML += str2;

*/
//Тестові дані
//Перевірте ваше рішення, наприклад, на цьому масиві об'єктів:

/*
  const persons1 = [
    {
      Name: "chevrolet chevelle malibu",
      Cylinders: 8,
      Displacement: 307,
      Horsepower: 130,
      Weight_in_lbs: 3504,
      Origin: "USA",
    },
    {
      Name: "buick skylark 320",
      Miles_per_Gallon: 15,
      Cylinders: 8,
      Displacement: 350,
      Horsepower: 165,
      Weight_in_lbs: 3693,
      Acceleration: 11.5,
      Year: "1970-01-01",
    },
    {
      Miles_per_Gallon: 18,
      Cylinders: 8,
      Displacement: 318,
      Horsepower: 150,
      Weight_in_lbs: 3436,
      Year: "1970-01-01",
      Origin: "USA",
    },
    {
      Name: "amc rebel sst",
      Miles_per_Gallon: 16,
      Cylinders: 8,
      Displacement: 304,
      Horsepower: 150,
      Year: "1970-01-01",
      Origin: "USA",
    },
  ];
  const arr = [];
  for (const person of persons1) {
    for (const key of Object.keys(person)) {
      if (!arr.includes(key)) {
        arr.push(key);
      }
    }
  }
  let str3 = "<style>table, td { border: 1px solid; text-align:center}</style>";
  str3 += "<table><tr>";
  for (const key of arr) {
    str3 += "<th>" + key + "</th>";
  }
  for (const person of persons1) {
    str3 += "<tr>";
    for (const key of arr) {
      if (person[key] !== undefined) {
        str3 += `<td>${person[key]}</td>`;
      } else {
        str3 += "<td></td>";
      }
    }
    str3 += "</tr>";
  }
  str3 += "</table>";
  document.querySelector("body").innerHTML += str3;
*/
