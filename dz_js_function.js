/* Оформіть Temperature як функцію, яку параметром передається температура в одній системі, а повертається до іншої. Жодних prompt та console.log у коді бути не повинно, якщо ви хочете надалі користуватися цією функцією будь-де в коді зручно. Чи потрібен блок коду функції для вирішення цього завдання? */
{
  const temperature = (celsius) => celsius * 1.8 + 32;
  temperature(); // можно без блока кода
}
/* Оформіть Number: RGB як функцію, яку параметрами передаються три числа (r, g, b) => . Функція повинна повертати рядок у нотації #RRGGBB. Використовуючи умови або тернарний оператор Досягніть що б у результаті завжди було 7 символів, навіть коли значення кольору менше 15ти. Чи потрібний блок коду цієї функції? */
{
  const RGB = (r, g, b) =>
    "#" +
    (r < 16 ? "0" + r.toString(16) : r.toString(16)) +
    (g < 16 ? "0" + g.toString(16) : g.toString(16)) +
    (b < 16 ? "0" + b.toString(16) : b.toString(16));
} // можно без блока кода
/* Оформіть Number: flats як функцію. Продумайте достатню кількість параметрів для розв'язання задачі. Функція повинна повертати об'єкт виду {entrance, floor}, де entrance - номер падiка, floor - номер поверху, на якому знаходиться квартира. */
{
  const flats = (floors, apartmentsPerFloor, numberApartment) => {
    let apartmentsEntrance = apartmentsPerFloor * floors;
    let entranceNumber =
      Math.floor((numberApartment - 1) / apartmentsEntrance) + 1;
    let floorNumber =
      Math.floor(
        ((numberApartment - 1) % apartmentsEntrance) / apartmentsPerFloor
      ) + 1;
    return {
      entrance: entranceNumber,
      floor: floorNumber,
    };
  };
}
/* Оформіть завдання String: credentials як функцію без параметрів. Використовуйте функцію capitalize із домашнього завдання з масивів. Функція повинна містити виклики prompt та повертати об'єкт виду {name, surname, fatherName, fullName} */
{
  const askPerson = () => {
    let name = prompt("Enter a name").trim();
    let fatherName = prompt("Enter a father name").trim();
    let secondNme = prompt("Enter a second name").trim();
    return {
      name: capitalize(name),
      fatherName: capitalize(fatherName),
      secondNme: capitalize(secondNme),
      fullName:
        capitalize(name) +
        " " +
        capitalize(fatherName) +
        " " +
        capitalize(secondNme),
    };
  };
  const capitalize = (str) => {
    let result = str[0].toUpperCase() + str.slice(1).toLowerCase();
    return result;
  };
}
/* Оформіть завдання String: new line як функцію з параметром-рядком. Функція повинна повертати рядок із справжніми переносами. */
{
  const inputUser = (str) => str.split("\\n").join("\n");
}
/* Оформіть завдання Prompt: OR як функцію, яка приймає рядок для prompt та значення за замовчуванням. Функція повинна повертати введений текст або значення за замовчуванням у разі відмови користувача вводити щось. Використовуйте функцію без блоку коду (функція одного виразу) */
{
  const yourAge = (age) =>
    (age = prompt(" your age")) === null || age === ""
      ? alert("вы не ввели взраст")
      : age;
}
/* Оформіть завдання Login And Password як функцію, яка приймає два параметри - правильний логін та пароль і повертає true якщо логін та пароль введені користувачами вірні, або false якщо користувач не зміг. Функція повинна містити в собі виклики prompt для введення логіну та пароля користувачем. */
{
  const loginAndPassword = (login = "nastya", password = "palamarenko") => {
    let rightLogin = prompt("Введите логин");

    if (rightLogin === login) {
      let rightPassword = prompt("Введите пароль");
      if (rightPassword === password) {
        alert("заходь");
        return true;
      } else {
        alert("пароль не тот");
        return false;
      }
    } else {
      alert("можешь попробовать еще, логин другой");
      return false;
    }
  };
}
/* Оформіть завдання For Multiply Table як функцію, яка приймає будь-який масив з масивами, а повертає рядок HTML з тегом <table> і всякими tr та td. */
{
  const multiTable = (arr) => {
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
    return str;
  };
}
/* Оформіть завдання Filter Lexics як функцію, яка приймає будь-який рядок для перевірки та масив некоректних слів (['бляха', 'муха', "пляшка", "шабля"], наприклад). Функція повинна повертати рядок без цих некоректних слів. */
{
  const filterWords = (arrBad, strFilter) => {
    const filterArr = (word) => !arrBad.includes(word);
    let arrSplit = strFilter.split(" ");
    let filterUserStr = arrSplit.filter(filterArr);
    let result = filterUserStr.join(" ");
    return result;
  };
}
/* Оформіть завдання Currency Table як функцію без параметрів, яка складає отримані дані у внутрішній двовимірний масив, після чого відображає його використовуючи функцію із завдання For Table */
{
  const table1 = () => {
    return fetch("https://open.er-api.com/v6/latest/USD")
      .then((res) => res.json())
      .then((data) => {
        const { rates: exchangeRate } = data;
        const keys = Object.keys(exchangeRate);
        const exchangeArray = [];
        for (const currency1 of Object.keys(exchangeRate)) {
          const currency = [currency1];
          for (const currency2 of Object.keys(exchangeRate)) {
            const rate = exchangeRate[currency2] / exchangeRate[currency1];
            currency.push(rate.toFixed(3));
          }
          exchangeArray.push(currency);
        }
        return table2(exchangeArray, keys);
      });
  };

  const table2 = (arr, keys) => {
    let str = "<style>table, td {border: 1px solid black;}</style><table>";
    str += "<tr><th></th>";
    for (let key of keys) {
      str += "<th>" + key + "</th>";
    }
    str += "</tr>";
    for (let row of arr) {
      str += "<tr>";
      for (let number of row) {
        str += "<td>" + number + "</td>";
      }
      str += "</tr>";
    }
    str += "</table>";
    document.write(str);
  };
}
/* Оформіть завдання Form як функцію, яка приймає будь-який об'єкт як параметр та створює форму на екрані. */
{
  const form = (obj) => {
    let str = "<form>";
    for (let [key, value] of Object.entries(obj)) {
      let type = "checkbox";
      if (typeof value === "number") {
        type = "number";
      } else if (typeof value === "string") {
        type = "text";
      }
      str += `<label>${key}: <input type=${type} value=${value}></label><br>`;
    }
    str += "</form>";
    document.write(str);
  };
}
/* Зробіть узагальнену функцію сортування масиву з об'єктами
Функція дозволяє відсортувати будь-який набір даних по імені поля (другий параметр). Третім параметром іде необов'язковий 'Boolean', який у разі true робить сортування за зростанням, у разі false - за спаданням. За замовчуванням (без третього параметра) відбувається сортування за зростанням. */
{
  var persons = [
    { name: "Іван", age: 17 },
    { name: "Марія", age: 35 },
    { name: "Олексій", age: 73 },
    { name: "Яків", age: 12 },
  ]
  const sort = (persons, whatSort, bollean) => {
    return persons.sort((a, b) => {
      const result =
        a[whatSort] > b[whatSort] ? 1 : a[whatSort] < b[whatSort] ? -1 : 0;
      return bollean ? result : -result;
    });
  }
}
/* Оформіть завдання Table як функцію, яка приймає такі параметри:
будь-який масив об'єктів для відображення
поле, яким сортувати
порядок сортування (зменшення/зростання)
Перед відображенням:
скопіюйте вихідний масив, щоб сортування не змінило оригінал;
відсортуйте за допомогою функції попереднього завдання
Відображення візьміть із завдання Table */
{
  const createTable1 = (arr2, field, bollean = true) => {
    const keys = [];
    for (const person of arr2) {
      for (const key of Object.keys(person)) {
        if (!keys.includes(key)) {
          keys.push(key);
        }
      }
    }
    const copyArr = JSON.parse(JSON.stringify(arr2));
    const sort = (copyArr, field, bollean) => {
      return copyArr.sort((a, b) => {
        const result = a[field] > b[field] ? 1 : a[field] < b[field] ? -1 : 0;
        return bollean ? result : -result;
      });
    };
    sort(copyArr, field, bollean);
    let str2 = "<style>table, td { border: 1px solid; text-align:center}</style>";
    str2 += "<table><tr>";
    for (const key of keys) {
      str2 += "<th>" + key + "</th>";
    }
    for (const person of copyArr) {
      str2 += "<tr>";
      for (const key of keys) {
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
  };
}