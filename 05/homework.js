{
     // Confirms
     const confArr = [];
     let weather = confirm('сьогодні йде дощ?');
     let eat = confirm('любиш піцу?');
     confArr.push(weather, eat);

     console.log(confArr);
}
{
     // Prompts
     const arr = []
     arr[0] = prompt('Як вас звати?')
     arr[1] = prompt('Ваша улюблена страва?')
     arr[2] = prompt('Скільки вам років?')
     console.log(arr);
}

{
     // Item access
     const arr = [0, 1, 'index', 'array', 'type']
     const arrIndex = arr[prompt('Введіть індекс елементу з масиву')]
     console.log(arrIndex);
}

{
     // Item change
     const arr = []

     const index = +prompt('Введіть індекс для елементу')
     const value = prompt('Введіть значення')

     arr[index] = value
     console.log(arr);
}


// Multiply table
const arr = [
     [0, 0, 0, 0, 0],
     [0, 1, 2, 3, 4],
     [0, 2, 4, 6, 8],
     [0, 3, 6, 9, 12],
     [0, 4, 8, 12, 16],
];

console.log(arr[2][3]);

// Multiply table slice

const arrSlice = arr.slice(1).map((x) => x.slice(1));
console.log(arrSlice);



{
     // IndexOf Word
     const promptWords = prompt('list words')
     const arrWord = []
     promptWords.split(',').map((el) => arrWord.push(el.trim()))
     console.log(arrWord);

     const arrWordPrompt = prompt(`Оберіть зі списку: ${arrWord}`)
     const index = arrWord.indexOf(arrWordPrompt)

     if (index >= 0) {
          alert(`Слово "${arrWordPrompt}" знаходиться на позиції № ${index + 1}`);

     } else {
          alert('Слово не знайдено')
     }

}

{
     // Reverse
     const wordsPrompt = prompt('Введіть 5 слів')
     const arrFromPrompt = [];
     wordsPrompt.split(' ').map((el) => arrFromPrompt.push(el))
     console.log(arrFromPrompt);

     const arrReverse = [];
     while (arrFromPrompt.length > 0) {
          arrReverse.push(arrFromPrompt.pop());
     }
     console.log('arrReverse:', arrReverse);


     // Reverse 2
     const arrReverse2 = [];
     while (arrReverse.length > 0) {
          arrReverse2.unshift(arrReverse.shift());
     }
     console.log('arrReverse 2:', arrReverse2);
}

{

     const arr = [
          [0, 0, 0, 0, 0],
          [0, 1, 2, 3, 4],
          [0, 2, 4, 6, 8],
          [0, 3, 6, 9, 12],
          [0, 4, 8, 12, 16],
     ];

     // Copy
     const copyArr = [...arr]
     console.log(copyArr);

     // Deep Copy

     const deepCopy = arr.map(innerArr => [...innerArr]);
     console.log(deepCopy);

     // Flat
     const arrFlat = []
     arr.map((el, index) => arrFlat.push(...el))
     console.log(arrFlat);

}

{
     // Destruct
     const [index0, , , , index4, , , , index8] = prompt('Введіть слово')
     console.log(index0, index4, index8);
}

{
     // Destruct default
     const [, index1 = `!`, , index3 = `!`, index4 = `!`] = prompt('Введіть слово')
     console.log(index1, index3, index4);
}



// Multiply table rest
const [one, two, three, four] = arrSlice
const arrSliceAssembled = [one, two, three, four]
console.log(arrSliceAssembled);


// For Alert
{
     const names = ["John", "Paul", "George", "Ringo"]
     for (const name of names) {
          alert(name)
     }
}


{
     // For Select Option
     const currencies = ["USD", "EUR", "GBP", "UAH"]
     let str = "<select>"
     for (const currency of currencies) {
          let option = `<option value="${currency}">${currency}</option>`
          str += option
     }
     str += "</select>"
     document.write(str)
}

{
     // For Table Horizontal
     const names = ["John", "Paul", "George", "Ringo"]
     let str = '<table style="margin-top: 20px" >'
     for (const name of names) {
          str +=
               `<tr>
              <td>${name}</td>
          </tr>`
     }
     str += "</table>"
     document.write(str)
}


{
     // For Table Vertical
     const names = ["John", "Paul", "George", "Ringo"]
     let str = '<table style="margin-top: 20px"><tr>'
     for (const name of names) {
          str += `<td>${name}</td>`
     }
     str += "</tr></table>"
     document.write(str)
}

{
     // For Table Letters

     const currencies = ["USD", "EUR", "GBP", "UAH"]
     let str = '<table style="margin-top: 20px" >'
     for (const currency of currencies) {
          console.log(currency)
          str += `<tr>`
          for (const letter of currency) {
               str += `<td>${letter}</td>`
               console.log(letter)
          }

          str += `</tr>`
     }
     str += "</table>"
     document.write(str)

}

{
     let str = '<table style="margin-top: 20px; text-align: center" >'
     let i = 1
     for (const number of arr) {

          i % 2 === 0 ? str += `<tr style="background: grey">` : str += `<tr style="background: #cdc9c9">`

          for (const num of number) {
               str += `<td>${num}</td>`
          }
          i++
          str += `</tr>`
     }

     str += "</table>"
     document.write(str)
}

{
     // Function Capitalize
     const capitalize = str => {
          let result = str[0].toUpperCase() + str.slice(1).toLowerCase()
          return result
     }

     console.log(capitalize("cANBerRa"))


     // Map Capitalize

     const promptWords = prompt('Введіть речення')
     const slotWordsCapitalize = promptWords.split(' ').map((el) => capitalize(el))

     console.log(slotWordsCapitalize);
}


{
     //     Filter Lexics
     const str = prompt('введіть рядок');
     const lexicsWords = ['блін', 'спалахуйка', 'альо'];
     const strSplit = str.split(' ');
     const strFilter = strSplit.filter((word) => !lexicsWords.includes(word));
     const result = strFilter.join(', ')
     console.log(result)

     // Beep Lexics
     const arrBeep = strSplit.map(x => !lexicsWords.includes(x) ? x : lexicsWords = 'beep');
     console.log(arrBeep)
}

{
     // Reduce HTML

     const currencies = ["USD", "EUR", "GBP", "UAH"]
     let str = "<select>"
     str += currencies.reduce((a, b) => a + `<option>${b}</option>`, "")
     str += "</select>"

     document.write(str)
}