/* Зробіть цикл з confirm, який триває поки користувач тисне Скасування і закінчується по ОК. */
/*{
    let question;
    while (!question) {
        question = confirm("да или нет?");
        if (question) {
            break;
        }
    }
}*/

/* Створіть порожній масив і додавайте в нього елементи, введені користувачем, поки користувач не натисне Скасувати в черговому prompt. Використовуйте push для зручності: push У масиві не повинно бути null після роботи циклу; */
/*{
  const arr = [];
  let input;
  while ((input = prompt("Введи значение")) !== null) {
    arr.push(input);
  }
  console.log(arr);
}*/

/* Зробіть попереднє завдання, не використовуючи push, а звертаючись до елементів індексу. */
/*{
    let arr = [];
    let i = 0;
    let input;
    do {
        input = prompt("Введіть текст");
        if (input !== null) {
            arr[i] = input;
            i++;
        }
    } while (input !== null);
    console.log(arr);
}*/

/* Створіть нескінченний цикл, який переривається за допомогою конструкції break, коли Math.random() > 0.9. Код повинен підраховувати кількість ітерацій та вивести це число за допомогою alert. */
/*
{let counter = 0;
while (true) {
  counter++;
  if (Math.random() > 0.9) {
    break;
  }
}
alert("Кількість ітерацій складає " + counter);
}*/

/* Зробіть цикл з prompt, який переривається за натисканням OK і продовжується за натисканням "Скасувати" c порожнім тілом циклу. */
/*
{
  do {} while (
    prompt(
      "Жми что то"
    ) === null
  );
}
*/
/* Підрахувати суму арифметичної прогресії від 1 до N c кроком 3 (1,4,7...) використовуючи цикл for. Метод Гауса не застосовувати, навпаки, зробити максимально наївне рішення. */
/*
{
  function fn(n) {
    for (let s = (i = 1); i < n; s += i += 3) { }
    return s;
  }
  alert(fn(7));
}
*/
/* Сформувати рядок # # # # # за допомогою циклу for. Довжина рядка може бути парною та непарною, і вказується в одному місці в коді. */
/*
{
  let str = "";
  let strLength = 10;
  for (i = 0; i < strLength; i++) {
    if (i % 2 == 0) {
      str += "#";
    } else {
      str += " ";
    }
  }
  alert(str);
}
*/

/* Сформувати рядок за допомогою вкладених циклів. Для перекладу рядка використовуйте \n. */
/*{
  let str = "";
  for (i = 0; i <= 9; i++) {
    for (j = 0; j < 10; j++) {
      str += j;
    }
    str += "\n" + "<br>";
  }
  document.write(str);
}*/

/* Сформуйте рядок із шахівницею із вкладених циклів. Для перекладу рядка використовуйте '\n'. Код повинен підтримувати легку зміну розмірів дошки. Розмiр може бути непарним, наприклад 3x5. Цi значення (розмiри дошки) повиннi бути в кодi тiльки в одному мiсце кожне. */
/*{
  let slash = "#";
  let point = ".";
  let result = "";
  for (i = 0; i < 11; i++) {
    for (j = 0; j < 11; j++) {
      if ((i + j) % 2 == 0) {
        result += slash;
      } else {
        result += point;
      }
    }
  
    result += "\n";
  }
  console.log(result);
}*/

/* Сформуйте масив з N(вводиться користувачем за допомогою prompt) елементів , що містить в собі куби індексів, тобто: */
/*{
  let arr = prompt(" Введите размер массива");
  let arr2 = [];

  for (i = 0; i < arr; i++) {
    arr2.push(i ** 3);
  }
  console.log(arr2);
}*/

/* За допомогою вкладеного циклу сформуйте масив масивів "таблиця множення". Для ініціалізації вкладених масивів використовуйте */
/*
let arr = [];
for (i = 0; i < 8; i++){
    arr[i] = [];
  for (j = 0; j < 10; j++){
    arr[i][j] = i * j;
  }
}
console.log(arr);
*/

/* Напишіть функцію readArrayOfObjects, яка циклічно додає масив об'єкти, які ввів користувач. Користувач вводить ключі та значення (їх у кожному об'єкті може бути будь-яка кількість), використовуючи prompt. Коли користувач натискає "Скасувати" у вікні prompt, введення об'єкта закінчується і об'єкт додається до масиву. Перед введенням наступного об'єкта користувачеві задається питання (використовуючи confirm), чи хоче він продовжить цi тортури введення об'єктів. При ствердній відповіді знову працює введення будь-якої кількості ключів для створення нового об'єкту
Функція має повертати створений масив із об'єктами. */

/*
const readArrayOfObjects = () => {
  let arr = [];
  let continues = true;
  while (continues) {
    let obj = {};
    let addObj = true;
    while (addObj) {
      let keyUser = prompt("Введите ключ");
      if (keyUser === null) {
        addObj = false;
        continue;
      }
      let valueUser = prompt("Введите значение ключа");
      obj[keyUser] = valueUser;
    }
    arr.push(obj);
    continues = confirm("Вводи дальше?");
  }
  return arr;
  
}
console.log(readArrayOfObjects());
*/

/* Підсвітити комірку, над якою знаходиться курсор миші. Використовуйте події mouseover та mouseout, і style.backgroundColor для підсвічування. Для того, щоб підсвітити правильну комiрку, додайте обробники подій у вкладений цикл, і використовуйте у них ту змінну, яка зберігає <td>. У такому разі замикання вам допоможуть. */





