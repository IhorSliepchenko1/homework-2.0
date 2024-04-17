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


// multiply table

{
     const n = +prompt()


     const tableContainer = document.getElementById("table");
     const table = document.createElement("table");
     table.style.border = "1px solid black";

     for (let i = 0; i <= n; i++) {
          const tr = document.createElement("tr");

          for (let j = 0; j <= n; j++) {
               const cell = document.createElement("td");
               cell.style.border = "1px solid black";
               cell.style.padding = "10px";
               cell.innerText = i === 0 || j === 0 ? j || i : j * i;

               const highlightCells = (cellColor = "", rowColor = "") => {
                    for (const td of tr.childNodes) {
                         td.style.backgroundColor = rowColor;
                    }
                    for (const tableRow of table.childNodes) {
                         const td = tableRow.childNodes[j];
                         td.style.backgroundColor = rowColor;
                    }
                    cell.style.backgroundColor = cellColor;
               };

               cell.addEventListener("mouseover", () => {
                    highlightCells("red", "green");
               });

               cell.addEventListener("mouseout", () => {
                    highlightCells();
               });

               tr.append(cell);
          }

          table.append(tr);
     }

     tableContainer.append(table);
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




