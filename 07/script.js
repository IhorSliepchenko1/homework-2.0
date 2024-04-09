/* Temperature */
const convertTemperature = (celsius) => {
     const convert = (celsius * 9 / 5) + 32
     return convert
}
/* RGB */
const convertRGB = (r, g, b) => {
     const red = r.toString(16).padStart(2, '0')
     const green = g.toString(16).padStart(2, '0')
     const blue = b.toString(16).padStart(2, '0')
     const result = `#${red}${green}${blue}`

     return result
}
/* Flats */
const countEntranceApartment = () => {
     const numberFloors = parseInt(document.getElementById('floor').value)
     const apartmentsFloor = parseInt(document.getElementById('apartments').value)
     const apartmentNumber = parseInt(document.getElementById('num-apart').value)
     const entranceNumber = document.getElementById('entrance')
     const floorNumber = document.getElementById('floor-number')

     const apartmentsEntrance = numberFloors * apartmentsFloor;

     const roundUpIfDecimal = (number) => {
          let integerPart = Math.floor(number);
          const decimalPart = number - integerPart;

          if (decimalPart > 0) {
               integerPart += 1;
          }
          return integerPart;
     }


     const entranceValue = entranceNumber.value = roundUpIfDecimal(apartmentNumber / apartmentsEntrance)
     const floorValue = floorNumber.value = roundUpIfDecimal(((apartmentsEntrance - ((entranceNumber.value * apartmentsEntrance) - apartmentNumber)) / apartmentsFloor))

     const obj = {
          entrance: entranceValue,
          floor: floorValue
     }

     return obj

}
/* Credentials */
const credentials = () => {
     const namePrompt = prompt(`Введіть ім'я`)
     const surnamePrompt = prompt(`Введіть прізвище`)
     const fatherNamePrompt = prompt(`Введіть ваше ім'я по батькові`)

     const name = `${namePrompt[0].toUpperCase().trim()}${namePrompt.slice(1).trim()}`
     const surname = `${surnamePrompt[0].toUpperCase().trim()}${surnamePrompt.slice(1).trim()}`
     const fatherName = `${fatherNamePrompt[0].toUpperCase().trim()}${fatherNamePrompt.slice(1).trim()}`

     const objInfo = {
          name: name,
          surname: surname,
          fatherName: fatherName,
          fullName: `${name} ${surname} ${fatherName}`
     }

     return objInfo
}
/* New line */
const newLine = (userInput) => {
     const stringWithRealNewlines = userInput.split('\\n').join('\n');
     return stringWithRealNewlines
}
/* Prompt OR */
const askAge = (age = 0) => {
     const promptAge = prompt('Введіть вік', age)
     const ageFilter = (promptAge === null || promptAge === undefined || promptAge === '' || isNaN(promptAge))
     ageFilter ? alert('Відповідь некоректна') : alert(`Вам ${promptAge} роки(ів)`)
     return ageFilter
}
/* Login And Password */
const checkUserInfo = () => {
     const userData = {
          login: 'admin',
          password: '23Qwerty'
     }

     const checkLogin = prompt('Введіть логін')
     const checkPassword = prompt('Введіть логін')

     return userData.login === checkLogin && userData.password === checkPassword ? true : false
}
/* For Table */
const createTable = (arrMultiply) => {
     let str = "<table>";

     for (const num of arrMultiply) {
          str += "<tr>";
          for (const letter of num) {
               str += `<td>${letter}</td>`
          }
          str += "</tr>";
     }

     str += "</table>"; 1, 2, 3, 3
     return str
}

console.log(createTable([[1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4]]));
/* Filter Lexics */
const filterLexics = () => {
     const str = prompt('введіть рядок');
     const lexicsWords = ['бляха', 'муха', "пляшка", "шабля"]
     const strSplit = str.split(' ');
     const strFilter = strSplit.filter((word) => !lexicsWords.includes(word));
     const result = strFilter.join(' ')

     return result
}
/* Currency Table */
const currencyTable = async () => {
     let treeTable
     await fetch("https://open.er-api.com/v6/latest/USD")
          .then((res) => res.json())
          .then((data) => {
               const arrSlot = []
               Object.keys(data.rates).map((item) => arrSlot.push([item, (data.rates[item]).toFixed(2)]))
               treeTable = createTable(arrSlot)
          })
     return treeTable
};
currencyTable().then((result) => {
     console.log(result);
});

/* Form */

const createForm = (obj) => {
     const formContainer = document.getElementById('formContainer')
     const form = document.createElement('form')
     formContainer.appendChild(form)

     Object.keys(obj).map((key) => {
          const label = document.createElement('label');
          const input = document.createElement('input');
          form.appendChild(label);
          form.appendChild(input);

          let type;
          if (typeof obj[key] === 'number') {
               type = 'number';
          } else if (typeof obj[key] === 'string') {
               type = 'text';
          } else {
               type = 'checkbox';
          }
          label.textContent = `${key}: `;
          input.type = type;
          input.value = obj[key];
          input.style.width = '100%'

     });
}

createForm({
     "Name": "chevrolet chevelle malibu",
     "Cylinders": 8,
     "Displacement": 307,
     "Horsepower": 130,
     "Weight_in_lbs": 3504,
     "Origin": "USA",
     "in_production": false
})
/* Array of objects sort */

const persons = [
     { name: "Іван", age: 17 },
     { name: "Марія", age: 35 },
     { name: "Олексій", age: 73 },
     { name: "Яків", age: 12 },
];

const sortArr = (array, property, bool = true) => {
     return array.slice().sort((a, b) => {
          const valueA = a[property];
          const valueB = b[property];

          if (typeof valueA === 'string') {
               return bool ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
          } else {
               return bool ? valueA - valueB : valueB - valueA;
          }
     });
};
console.log(sortArr(persons, 'age'));
console.log(sortArr(persons, 'name', false));
/* Table */
const personsObj = [
     {
          name: 'Марія',
          fatherName: 'Іванівна',
          surname: 'Іванова',
          sex: 'female'
     },
     {
          name: 'Миколай',
          fatherName: 'Іванович',
          surname: 'Іванов',
          age: 15
     },
     {
          name: 'Петро',
          fatherName: 'Іванович',
          surname: 'Іванов',
          married: true
     },
]
console.log(sortArr(personsObj, 'name', false));
/* Divide */
const calcResult = () => {
     console.log(firstNumber.value, secondNumber.value, divisionResult.innerHTML)
     divisionResult.innerHTML = "Текст у <code>div</code> змінено за допомогою <strong>Javascript</strong><br/>" + Math.random().toFixed(2)
}
firstNumber.oninput = secondNumber.oninput = calcResult
/* Calc Func */
const calcFunk = (first, second, third, fourth) => {
     const total = first + second + third + fourth;
     const data = `Квартальні виплати: ${total} $ Середня з/п: ${total / 4} $`

     return data
}

/* Calc Live */

const calcLive = () => {
     const innerValue = () => {
          result.innerHTML =
               `<div>${calcFunk(first.value, second.value, third.value, fourth.value)}</div>`;
     };

     const arrInput = [first, second, third, fourth]
     arrInput.map((item) => item.oninput = innerValue)
     innerValue();
}

calcLive();
