/* Дайте відповідь на запитання в коментарях і звіртеся з відладчиком. console.log спеціально не писав */
{
  let a = 10;
  {
    let b = 20;
    {
      let c = 30;
      //які тут будуть значення змінних a, b, c, d
      //Відповідь: a = 10, b = 20, c = 30, d=undefined
      b++;
      a *= 10;
    }
    {
      let c = 50;
      //які тут будуть значення змінних a, b, c, d
      //Відповідь: a = 100, b = 21, c = 50, d=undefined
      b += 500;
    }
    {
      const a = 100500;
      const d = "value";
      //які тут будуть значення змінних a, b, c, d
      //Відповідь: a = 100500, b = 521, c=undefined, d="value"
      {
        let a = -50;
        b = 1000;
        //які тут будуть значення змінних a, b, c, d
        //Відповідь: a = 100500, b = 521, c=undefined, d="value"
      }
      //які тут будуть значення змінних a, b, c, d
      //Відповідь: a = 100500, b = 521, c=undefined, d="value"
    }
    //які тут будуть значення змінних a, b, c, d
    //Відповідь: a = 100, b = 1000, c=undefined, d=undefined
  }
  //які тут будуть значення змінних a, b, c, d
  //Відповідь: a = 10, b=undefined, c=undefined, d=undefined
}
/* Додайте умову негативного віку на приклад вище. Розставте недостатні (але синтаксично необов'язкові) фігурні дужки. Викиньте зайве з поточного коду */
/*{
    let age = +prompt("Скільки вам років?", "");
    if (age < 0) {
        alert("не может такого быть");
    } else if (age < 18) {
        alert("школяр");
    } else if (age > 18 && age < 30) {
        alert("молодь");
    } else if (age > 30 && age < 45) {
        alert("зрілість");
    } else if (age > 45 && age < 60) {
        alert("захід сонця");
    } else if (age > 60) {
        alert("як пенсія?");
    }
}*/
/* Зробіть завдання Comparison: sizes використовуючи switch */
/*{
    let ukSizes = parseInt(
        prompt("Введіть розмір української системи від 42 до 54")
    );
    switch (ukSizes) {
        case 42:
            alert("По Американській системі буде розмір 8");
            break;
        case 44:
            alert("По Американській системі буде розмір 10");
            break;
        case 46:
            alert("По Американській системі буде розмір 12");
            break;
        case 48:
            alert("По Американській системі буде розмір 14");
            break;
        case 50:
            alert("По Американській системі буде розмір 16");
            break;
        case 52:
            alert("По Американській системі буде розмір 18");
            break;
        case 54:
            alert("По Американській системі буде розмір 20");
        default:
            alert("Помилка, Спробуйте ще раз");
    }
}*/
/* Перепишіть приклад нижче, використовуючи if. */
/*{
    let color = prompt("Введіть колір", "");
    if (color === "red") {
        document.write("<div style='background-color: red;'>червоний</div>");
        document.write("<div style='background-color: black; color: white;'>чорний</div>");
    } else if (color === "black") {
        document.write("<div style='background-color: black; color: white;'>чорний</div>");
    } else if (color === "blue") {
        document.write("<div style='background-color: blue;'>синій</div>");
        document.write("<div style='background-color: green;'>зелений</div>");
    } else if (color === "green") {
        document.write("<div style='background-color: green;'>зелений</div>");
    } else {
        document.write("<div style='background-color: gray;'>Я не зрозумів</div>");
    }
}*/
/* Напишіть функцію noSwitch, яка приймає об'єкт зі значеннями-функціями, ключ для об'єкта та запускає одну з функцій з об'єкта якщо ключ знайдений, інакше - запускає default: */
/*{
    const noSwitch = (key, cases, defaultKey = 'default') => {
        if (key in cases) {
            return cases[key]();
        } else {
            return cases[defaultKey]();
        }
    }

    const drink = prompt("Що ви любите пити")
    noSwitch(drink, {
        воду: () => console.log('Найздоровіший вибір!'),
        чай() {
            console.log('Смачна та корисна штука. Не перестарайтеся з цукром')
        },
        "пиво": () => console.log('Добре влітку, та в міру'),
        віскі: function () {
            console.log('Та ви, батечку, естет! Не забудьте лід і сигару')
        },
        default() {
            console.log('шото я не зрозумів')
        }
    })
}*/
/* Напишіть всередині анонімної функції, переданої в then (data =>):
цикл, що перебирає курси;
на кожній ітерації створюється кнопка (document.createElement)
текст кнопки - назва валюти (innerHTML або innerText)
Призначте обробник події на цій кнопці (onclick = () => {.....}). Функція-обробник має бути написана прямо в тілі циклу
Обробник повинен запитувати суму використовуючи prompt і конвертувати цю суму з валюти, написаної на кнопці в USD
Знайдіть замикання. Для доступу до валют з data.rates використовуйте [], . тут не допоможе. Кнопки додавайте в спеціальний контейнер (div наприклад), створений в HTML, або, на крайній край, в body */
/*{
    fetch("https://open.er-api.com/v6/latest/USD")
        .then((res) => res.json())
        .then((data) => {
            const { rates: currencies } = data;
            for (const currency in currencies) {
                let btn = document.createElement("button");
                btn.innerHTML = currency;
                btn.onclick = () => {
                    let sum = prompt("Введите сумму");
                    const rate = data.rates[currency];
                    const result = sum / rate;
                    alert(result.toFixed(2) + " USD ");
                };
                document.body.appendChild(btn);
            }
        });
}*/
/* Створіть HTML файл з:
<select id='from'> - вихідна валюта
<select id='to'> - валюта в яку відбувається обмін
<div id='rate'> - кроскурс між валютами
<input type='number' id='amount' /> - сума у вихідній валюті
<div id='result'> - сума у валюті, в яку хочемо поміняти
Використовуючи заготівлю з попереднього завдання, наповніть select-и тегами option з назвами валют, використовуючи цикл
document.createElement
innerText для option
from.append або to.append
За межами циклу призначте обробники onchange для елементів select та oninput для елемента input, використовуючи їх id. За цими подіями оновлюйте текст у div#rate та div#result */
/*{
    fetch("https://open.er-api.com/v6/latest/USD")
        .then((res) => res.json())
        .then((data) => {
            const { rates: currencies } = data;
            for (const currency in currencies) {
                const from = document.getElementById("from");
                const to = document.getElementById("to");
                const option = document.createElement("option");
                option.innerText = currency;
                from.appendChild(option);
                const option1 = document.createElement("option");
                option1.innerText = currency;
                to.appendChild(option1);
            }
            const amount = document.getElementById("amount");
            const resultDiv = document.getElementById("result");
            const calc = () => {
                const fromCurr = from.value;
                const toCurr = to.value;
                const fromRate = data.rates[fromCurr];
                const toRate = data.rates[toCurr];
                const result = toRate / fromRate;
                const result2 = amount.value * result;
                resultDiv.innerHTML = result2.toFixed(2);
            };
            from.onchange = calc;
            to.onchange = calc;
            amount.oninput = calc;
        });
}
*/
/* За аналогією з попереднім завданням, реалізуйте інтерфейс вибору країни та міста:
Наповнюйте select#countries елементами option з назвами країн;
так само призначте обробник події onchange в select#countries, який:
видаляє старий контент select#cities (достатньо занести в innerHTML або innerText порожній рядок)
додає в select#cities елементи option з містами з обраної щойно країни.
Таким чином, при зміні країни змінюватиметься список міст у select#cities */
{
  fetch(
    "https://raw.githubusercontent.com/russ666/all-countries-and-cities-json/master/countries.min.json"
  )
    .then((res) => res.json())
    .then((data) => {
      const countries = Object.keys(data);
      const selectCountry = document.getElementById("country");
      for (const country of countries) {
        const option = document.createElement("option");
        option.innerText = country;
        selectCountry.appendChild(option);
      }
      const selectCities = document.getElementById("cities");
      const choice = () => {
        const fromCountry = selectCountry.value;
        const cities = data[fromCountry];
        selectCities.innerHTML = "";
        for (const city of cities) {
          const option1 = document.createElement("option");
          option1.innerText = city;
          selectCities.appendChild(option1);
        }
      };
      selectCountry.onchange = choice;
    });
}
