// blocks
let a = 10
{
     let b = 20
     {
          let c = 30
          //які тут будуть значення змінних a, b, c, d
          // a = 10; b = 20; c = 30; d = undefined
          console.log(a, b, c)

          b++
          a *= 10
     }
     {
          let c = 50
          //які тут будуть значення змінних a, b, c, d
          // a = 100; b = 21; c = 50; d = undefined
          console.log(a, b, c)
          b += 500
     }
     {
          const a = 100500
          const d = "value"
          //які тут будуть значення змінних a, b, c, d
          // a = 100500; b = 521; c = undefined; d = "value"
          console.log(a, b, d)
          {
               let a = -50
               b = 1000
               //які тут будуть значення змінних a, b, c, d
               // a = -50; b = 1000; c = undefined; d =  "value"
               console.log(a, b, d)


          }
          //які тут будуть значення змінних a, b, c, d
          // a = 100500; b = 1000; c = undefined; d =  "value"
          console.log(a, b, d)
     }
     //які тут будуть значення змінних a, b, c, d
     // a = 100; b = 1000; c = undefined; d =  undefined
     console.log(a, b)
}
//які тут будуть значення змінних a, b, c, d
// a = 100; b = undefined; c = undefined; d =  undefined
console.log(a)

// comparison if
var age = +prompt("Скільки вам років?", "");

if (age <= 0)
     alert("Ви ще не народились!");
else if (age < 18)
     alert("школяр");
else if (age > 18 && age < 30)
     alert("молодь");
else if (age > 30 && age < 45)
     alert("зрілість");
else if (age > 45 && age < 60)
     alert("захід сонця");
else if (age > 60)
     alert("як пенсія?");
else
     alert("чи кіборг, чи KERNESS");

// switch: sizes

const sizeUSA = prompt('Введіть ваш розмір (США)');
let internationalSize;

switch (true) {
     case sizeUSA <= 2:
          internationalSize = "XS";
          break;

     case sizeUSA <= 6:
          internationalSize = "S";
          break;

     case sizeUSA <= 10:
          internationalSize = "M";
          break;

     case sizeUSA <= 14:
          internationalSize = "L";
          break;

     case sizeUSA <= 17:
          internationalSize = "XL";
          break;

     default:
          internationalSize = "XL+";
}

console.log(internationalSize);

// switch: if
let color = prompt("Введіть колір", "");

if (color) {

     if (color === 'red' || color === 'black') {
          document.write("<div style='background-color: red;'>червоний</div>")
          document.write("<div style='background-color: black; color: white;'>чорний</div>")
     }

     else if (color === 'blue' || color === 'green') {
          document.write("<div style='background-color: blue;'>синій</div>")
          document.write("<div style='background-color: green;'>зелений</div>")

     }
     else {
          document.write("<div style='background-color: gray;'>Я не зрозумів</div>")
     }
}


// noswitch

const noSwitch = (key, cases, defaultKey = 'default') => {
     if (drink in cases)
          cases[drink]()
     else
          cases[defaultKey]()
};

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


// closure calc
fetch('https://open.er-api.com/v6/latest/USD')
     .then(res => res.json())
     .then(data => {
          const currencies = Object.keys(data.rates);
          const currenciesValue = Object.values(data.rates);
          const containerDiv = document.getElementById('containerDiv');
          const total = document.getElementById('total')
          const from = document.getElementById('from');
          const to = document.getElementById('to')

          currencies.forEach((currency, index) => {
               const btn = document.createElement('button');
               btn.innerText = currency;
               btn.value = currenciesValue[index];
               btn.onclick = () => {
                    const convertSumPrompt = parseFloat(prompt('Введить сумму для конвертаціїї'))
                    console.log(btn.value)
                    total.innerHTML = `Сумма: ${((btn.value * convertSumPrompt).toFixed(2))} ${btn.textContent}`

               }
               containerDiv.appendChild(btn);

               // closure calc 2
               const optionSelectFrom = document.createElement('option');
               const optionSelectTo = document.createElement('option');
               optionSelectFrom.value = currenciesValue[index];
               optionSelectFrom.name = currenciesValue[index];
               optionSelectFrom.textContent = currencies[index];

               optionSelectTo.value = currenciesValue[index];
               optionSelectTo.name = currenciesValue[index];
               optionSelectTo.textContent = currencies[index];



               from.appendChild(optionSelectFrom);
               to.appendChild(optionSelectTo);
          });
     })
const amount = document.getElementById('amount')
const result = document.getElementById('result')

function rateFunc() {
     const rate = document.getElementById('rate')
     let crossCurs = to.value / from.value
     return rate.innerHTML = crossCurs.toFixed(2)
}

function inputFunc() {
     let sum = amount.value * parseFloat(rate.textContent)
     return result.innerHTML = sum.toFixed(2)
}


// Замикання використовується в обробнику події btn.onclick.
// За допомогою цього замикання, функція, яка містить звернення до btn та data,
//  може отримати доступ до значень цих змінних.

// countries and cities

{
     let data;
     const countries = document.getElementById('countries');
     const citiesList = document.getElementById('cities');

     fetch('https://raw.githubusercontent.com/russ666/all-countries-and-cities-json/master/countries.min.json')
          .then(res => {
               return res.json();
          })
          .then(dataResponse => {
               data = dataResponse;
               for (const country in data) {
                    const countryItem = document.createElement('option');
                    countryItem.value = country;
                    countryItem.textContent = country;
                    countries.appendChild(countryItem);
               }
          });

     function cityRender() {
          citiesList.innerHTML = '';

          const selectedCountry = countries.value;
          const cities = data[selectedCountry];
          console.log(cities)

          for (const city of cities) {
               const cityItem = document.createElement('option');
               cityItem.value = city;
               cityItem.textContent = city;
               citiesList.appendChild(cityItem);
          }

     }
}


