/* Переведіть будь-які п'ять завдань з попереднього ДЗ з функцій у синтаксис function */
/*
//1
function flats (floors, apartmentsPerFloor, numberApartment) {
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
//2
function askPerson () {
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
//3
function multiTable (arr) {
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
//4
function colorConverter(r, g, b) {
    return (
      "#" +
      (r < 16 ? "0" + r.toString(16) : r.toString(16)) +
      (g < 16 ? "0" + g.toString(16) : g.toString(16)) +
      (b < 16 ? "0" + b.toString(16) : b.toString(16))
    );
//5
    function userInput(correctLogin = "admin", correctPassword = "qwerty") {
    let login = prompt("Введіть свій логін");
    if (login === correctLogin) {
      let password = prompt("Введіть свій пароль");
      if (password === correctPassword) {
        alert("Вітаю все вірно!");
        return true;
      } else {
        alert("Неправильний пароль");
        return false;
      }
    } else {
      alert("Неправильний логін");
      return false;
    }
  }
  console.log(userInput());
  */

/* Створіть функцію createPerson, яка приймає два параметри: name та surname, і повертає об'єкт із ключами name, surname, getFullName. getFullName має бути функцією, яка працює з об'єктом через this, а так ж готова до того, що в об'єкті потім додати ключ fatherName */
/*{
    function createPerson(name, surname) {
        return {
            name,
            surname,
            getFullName() {
                if (this.fatherName) {
                    return `${this.name} ${this.fatherName} ${this.surname}`;
                }
                return `${this.name} ${this.surname}`;
            },
        };
    }
}*/

/* Завдання в цілому, аналогічно попередньому, проте, в об'єкт заносити name, surname, fatherName та age не потрібно. name і surname повинні бути параметрами, змінні age та fatherName оголосіть через let у тілі createPersonClosure. Всередині createPersonClosure оголосіть такі функції:
getName
getSurname
getFatherName
getAge
getFullName
Ці функції повинні повертати змінні, оголошені функції createPersonClosure
Наступні функції:
setName
setSurname
setFatherName
setAge
setFullName
повинні приймати один параметр (newName, newSurname і т.п.), перевіряти його на коректність та змінювати значення змінних, оголошених всередині createPersonClosure. Перевірки на коректність:
ім'я, прізвище, по батькові має бути рядком з великої літери
Вік повинен бути числом від 0 до 100.
Якщо перевірку на коректність не пройдено, функція не повинна змінювати відповідну змінну.
Функція setFullName повинна розбивати рядок по пробілах і заносити частини рядка в surname, name та fatherName
Усі функції set повинні повертати те значення, яке за підсумком потрапило до внутрішньої змінної. Тобто якщо нове значення некоректне, то функція повертає старе значення
В об'єкті-результаті createPersonClosure повинні бути лише ці 10 функцій (гетерів та сеттерів). У коді функцій this не використовується */

/*
function createPersonClosure(name, surname) {
    let age;
    let fatherName;
    function getName() {
        return name;
    };
    function getSurname() {
        return surname;
    };
    function getFatherName() {
        return fatherName;
    };
    function getAge() {
        return age;
    };
    function getFullName() {
        return `${getName()} ${getFatherName()} ${getSurname()}`;
    };
    function setName(newName) {
        if (typeof newName === "string" && newName[0] === newName[0].toUpperCase()) {
            name = newName;
            return name;
        }
        return name;
    };
    function setSurname(newSurname) {
        if (
          typeof newSurname === "string" &&
          newSurname[0] === newSurname[0].toUpperCase()
        ) {
          name = newSurname;
          return name;
        }
        return name;
    };
    function setFatherName(newFatherName) {
        if (
          typeof newFatherName === "string" &&
          newFatherName[0] === newFatherName[0].toUpperCase()
        ) {
          name = newFatherName;
          return name;
        }
        return name;
    };
    function setAge(newAge) {
        if (typeof newAge === "number" && newAge >= 0 && newAge <= 100) {
            age = newAge;
            return age;
        }
        return age;
    };
    function setFullName(fullName) {
        const names = fullName.split(" ");
    if (names.length === 3) {
      const [newSurname, newName, newFatherName] = names;
      setName(newName);
      setSurname(newSurname);
      setFatherName(newFatherName);
    }
    return getFullName(); 
    };
    return {
    getName,
    getSurname,
    getFatherName,
    getAge,
    getFullName,
    setName,
    setSurname,
    setFatherName,
    setAge,
    setFullName,
  };
}
*/

/* Зробіть набір параметрів функції попереднього завдання об'єктом, використовуйте деструктуризацію для вилучення параметрів.
Вкажіть значення за замовчуванням */
/*
function createPersonClosureDestruct({
  name = "",
  surname = "",
  fatherName = "",
  age = undefined,
} = {}) {
  function getName() {
    return name;
  }
  function getSurname() {
    return surname;
  }
  function getFatherName() {
    return fatherName;
  }
  function getAge() {
    return age;
  }
  function getFullName() {
    return `${getName()} ${getFatherName()} ${getSurname()}`;
  }
  function setName(newName) {
    if (
      typeof newName === "string" &&
      newName[0] === newName[0].toUpperCase()
    ) {
      name = newName;
      return name;
    }
    return name;
  }
  function setSurname(newSurname) {
    if (
      typeof newSurname === "string" &&
      newSurname[0] === newSurname[0].toUpperCase()
    ) {
      name = newSurname;
      return name;
    }
    return name;
  }
  function setFatherName(newFatherName) {
    if (
      typeof newFatherName === "string" &&
      newFatherName[0] === newFatherName[0].toUpperCase()
    ) {
      name = newFatherName;
      return name;
    }
    return name;
  }
  function setAge(newAge) {
    if (typeof newAge === "number" && newAge >= 0 && newAge <= 100) {
      age = newAge;
      return age;
    }
    return age;
  }
  function setFullName(fullName) {
    const names = fullName.split(" ");
    if (names.length === 3) {
      const [newSurname, newName, newFatherName] = names;
      setName(newName);
      setSurname(newSurname);
      setFatherName(newFatherName);
    }
    return getFullName();
  }
  return {
    getName,
    getSurname,
    getFatherName,
    getAge,
    getFullName,
    setName,
    setSurname,
    setFatherName,
    setAge,
    setFullName,
  };
}
*/

/* Напишіть функцію isSorted, яка приймає набір параметрів будь-якого розміру, та повертає true, коли всі параметри - це числа, і кожeн з них більше за попередній параметр. */
/*
function isSorted() {
  for (let i = 1; i < arguments.length; i++) {
    if (typeof arguments[i] !== "number" || arguments[i] <= arguments[i - 1]) {
      return false;
    }
  }
  return true;
}
*/

/* Використовуючи циклічне введення в масив (завдання array fill), забезпечте введення даних для isSorted */
/*{
  function isSorted() {
    for (let i = 1; i < arguments.length; i++) {
      if (typeof arguments[i] !== "number" || arguments[i] <= arguments[i - 1]) {
        return false;
      }
    }
    return true;
  }

  const arr = [];
  let input;
  while ((input = prompt("Введи значение")) !== null) {
    arr.push(Number(input));
  }

  let result = isSorted(...arr);
  console.log(result);
}*/

/* Напишіть функцію, яка приймає два параметри: батьківський DOM-елемент та об'єкт-результат роботи createPersonClosure (або createPersonClosureDestruct, результати в обох цих функцій однакові) і малює форму, яка дозволяє редагувати дані про персону.
На початку роботи personForm створює 5 полів введення (ім'я, прізвище, по батькові, вік, ПІБ) у батьківському DOM-елементі та встановлює туди значення, прочитані за допомогою getName , getSurname і т.д.
Події oninput в будь-якому з полів введення потрібно запускати відповідний set..... Наприклад, при зміні поля введення імені повинен запускатися setName(якийсь инпут.value). Функції set... повертають значення, і його потрібно занести назад до input. Таким чином, у полях введення неможливо буде ввести некоректні значення (наприклад вік не зможе вийти за межі 0-100 років) */

function createPersonClosure(name, surname) {
  let age;
  let fatherName;
  function getName() {
    return name;
  }
  function getSurname() {
    return surname;
  }
  function getFatherName() {
    return fatherName;
  }
  function getAge() {
    return age;
  }
  function getFullName() {
    return `${getName()} ${getFatherName()} ${getSurname()}`;
  }
  function setName(newName) {
    if (
      typeof newName === "string" &&
      newName[0] === newName[0].toUpperCase()
    ) {
      name = newName;
      return name;
    }
    return name;
  }
  function setSurname(newSurname) {
    if (
      typeof newSurname === "string" &&
      newSurname[0] === newSurname[0].toUpperCase()
    ) {
      name = newSurname;
      return name;
    }
    return name;
  }
  function setFatherName(newFatherName) {
    if (
      typeof newFatherName === "string" &&
      newFatherName[0] === newFatherName[0].toUpperCase()
    ) {
      name = newFatherName;
      return name;
    }
    return name;
  }
  function setAge(newAge) {
    if (typeof newAge === "number" && newAge >= 0 && newAge <= 100) {
      age = newAge;
      return age;
    }
    return age;
  }
  function setFullName(fullName) {
    const names = fullName.split(" ");
    if (names.length === 3) {
      const [newSurname, newName, newFatherName] = names;
      setName(newName);
      setSurname(newSurname);
      setFatherName(newFatherName);
    }
    return getFullName();
  }
  return {
    getName,
    getSurname,
    getFatherName,
    getAge,
    getFullName,
    setName,
    setSurname,
    setFatherName,
    setAge,
    setFullName,
  };
}

function personForm(parent, person) {}
