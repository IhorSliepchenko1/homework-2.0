// while confirm
while (!confirm()) { }

// array fill
let pushPrompt
const arrSlot = []
while (pushPrompt = prompt()) {
     arrSlot.push(pushPrompt)

     console.log(arrSlot);
}

// array fill nopush
{
     let noPushPrompt
     const arrSlot = []
     let index = 0
     while (noPushPrompt = prompt()) {
          arrSlot[index] = noPushPrompt
          index++
          console.log(arrSlot);
     }
}

// infinite probability
let counter = 0
while (true) {
     counter++
     const random = Math.random()
     if (random > 0.9) {
          break
     }
}

console.log(counter);

// empty loop
while (true) {
     const promptLoop = prompt()
     if (promptLoop !== null) {
          break
     }
}

// progression sum

let n = prompt('n')
const arrN = []
for (let i = 1; i < n; i += 3) {
     arrN.push(i)
}
console.log(arrN);
console.log(arrN.reduce((a, b) => a + b));

// chess one line

let lengthLine = prompt('lengthLine')
const arrLine = []
for (let i = 1; i < lengthLine; i++) {
     i % 2 === 0 ? arrLine.push('.') : arrLine.push('#')
}

console.log(arrLine.join(''));

// numbers
let numbers = ''
for (let i = 1; i <= 9; i++) {
     for (let j = 0; j <= 9; j++) {
          numbers += j
     }
     numbers += '\n'
}

console.log(numbers);


// chess
let rows = +prompt("Введіть кількість рядків:");
let columns = +prompt("Введіть кількість стовпців:");
let chess = '';

for (let k = 1; k <= rows; k++) {

     for (let j = 1; j <= columns; j++) {
          k % 2 === 0 ? chess += '#.' : chess += '.#'
     }

     chess += '\n';
}

console.log(chess);

// cubes

const N = +prompt('')
const arrCubes = []

for (let i = 0; i < N; i++) {
     arrCubes.push(i ** 3)
}
console.log(arrCubes);


// multiply table

let tableSize = +prompt();

let arr = [];

for (let row = 1; row <= tableSize; row++) {
     arr[row] = [];

     for (let col = 0; col <= tableSize; col++) {
          arr[row][col] = row * col;
     }
}
console.log(arr);


{
     const n = +prompt()
     const tableArr = []
     for (let i = 0; i <= n; i++) {
          tableArr[i] = []

          for (let j = 0; j <= n; j++) {
               tableArr[i][j] = j * i
          }

          tableArr[i][0] = i

          for (let k = 0; k <= n; k++) {
               tableArr[0][k] = k
          }
     }

     console.log(tableArr);
     // DOM: multiply table

     const render = (arrTable) => {
          const bodyTable = document.getElementById('bodyTable')

          for (let i = 0; i < arrTable.length; i++) {
               const tr = document.createElement('tr')
               bodyTable.append(tr)

               for (let k = 0; k <= n; k++) {
                    const td = document.createElement('td')
                    tr.append(td)

                    const mouseEvent = (trBg = '', tdBg = '') => {
                         for (const td of tr.childNodes) {
                              td.style.backgroundColor = trBg;
                         }

                         for (const tableRow of bodyTable.childNodes) {
                              const td = tableRow.childNodes[k];
                              td.style.backgroundColor = tdBg;
                         }

                    }

                    td.addEventListener('mouseover', () => mouseEvent('red', 'green'))
                    td.addEventListener('mouseout', () => mouseEvent())

                    // DOM: highlight cell
                    td.addEventListener('mouseover', () => td.style.background = 'blue')
                    td.addEventListener('mouseout', () => td.style.background = '')
                    td.innerText = arrTable[i][k]
               }
          }
     }

     render(tableArr)
}
// read array of objects

const arrObj = [];

while (true) {
     const key = prompt('key');
     const value = prompt('value');

     const obj = {};

     obj[key] = value;
     arrObj.push(obj);

     const next = confirm('продовжити?');

     if (!next) {
          break;
     }
}

console.log(arrObj);

Ромбік

{
     let n = +prompt()
     let counter = 0
     let counterMinus = 0
     let counterPlus = 0
     let copyN = n


     for (let i = 1; i < Math.floor(n / 2) + 1; i++) {
          let dot = '.'.repeat((Math.floor(n / 2) + 1) - i)
          let latice = '#'.repeat(i + counter)
          counter++

          console.log(dot + latice + dot);
     }
     for (let j = Math.floor(n / 2); j > 0; j--) {
          let latice = '#'.repeat((copyN - counterMinus > 0 ? copyN - counterMinus : ''))
          let dot = '.'.repeat(counterPlus)
          counterMinus += 2
          counterPlus++

          console.log(dot + latice + dot);
     }
}