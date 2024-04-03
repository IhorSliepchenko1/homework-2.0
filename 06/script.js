
// Literals && Literals expand
const cat = {
     color: 'black',
     name: 'Barsik',
     age: 5,
}
const newKey = prompt('key');
const newValue = prompt('value');
cat[newKey] = newValue;
console.log(cat);

// Literals copy
const catCopy = { ...cat }
const catCopyNewKey = prompt('key');
const catCopyNewValue = prompt('value');
catCopy[catCopyNewKey] = catCopyNewValue;
console.log(catCopy);


{
     //Html tree

     const obj = {
          tagName: 'body',
          children: [
               {
                    tagName: 'div',
                    children: [
                         {
                              tagName: 'span',
                              children: ["Enter a data please:"],
                         },

                         {
                              tagName: 'br',
                         },

                         {
                              tagName: 'input',
                              attrs:
                              {
                                   type: 'text',
                                   id: 'name'
                              }
                         },

                         {
                              tagName: 'input',
                              attrs:
                              {
                                   type: 'text',
                                   id: ['surname']
                              }
                         }
                    ]
               },

               {
                    tagName: 'div',
                    children: [

                         {
                              tagName: 'button ',
                              children: 'OK',
                              attrs:
                              {
                                   id: 'ok'
                              },

                         },

                         {
                              tagName: 'button ',
                              children: ['Cancel'],
                              attrs:
                              {
                                   id: 'cancel'
                              },

                         },
                    ]
               }
          ]
     }
     // Parent

     obj.children[0].parent = obj;
     obj.children[1].parent = obj;
     obj.children[0].children[0].parent = obj.children[0];
     obj.children[0].children[1].parent = obj.children[0];
     obj.children[0].children[2].parent = obj.children[0];
     obj.children[0].children[3].parent = obj.children[0];
     obj.children[1].children[0].parent = obj.children[1];
     obj.children[1].children[1].parent = obj.children[1];

     // Change OK

     const attributeName = prompt("Введіть ім'я атрибута");
     const attributeValue = prompt('Введіть значення атрибута');
     obj.children[1].children[0].setAttribute(attributeName, attributeValue);



     // Destructure

     const { children: [{ children: [{ children: [text] }] }] } = obj

     console.log(text);


     const { children: [, { children: [, { children: [cancel] }] }] } = obj
     console.log(cancel);

     const { children: [{ children: [, , , { attrs: { id: [name] } }] }] } = obj
     console.log(name);
}

{
     // Destruct array
     const arr = [1, 2, 3, 4, 5, "a", "b", "c"]
     const [odd1, even1, odd2, even2, odd3, ...letters] = arr

     console.log("Odd:", odd1, odd2, odd3);
     console.log("Even:", even1, even2);
     console.log("Letters:", letters);
}

{
     // Destruct string
     const arr = [1, "abc"]
     const [number, [s1, s2, s3]] = arr;
     console.log(number);
     console.log(s1, s2, s3);

}

{
     // Destruct 2
     const obj = {
          name: 'Ivan',
          surname: 'Petrov',
          children: [{ name: 'Maria' }, { name: 'Nikolay' }]
     }

     const { children: [{ name: name1 }, { name: name2 }] } = obj;

     console.log(name1, name2);
}

{
     // Destruct 3

     const arr = [1, 2, 3, 4, 5, 6, 7, 10];
     const { 0: a, 1: b, length } = arr;
     console.log(a, b, length)

}

{
     // Copy delete
     const dellKey = prompt('введіть ключ для видалення: age/color/name');
     const { [dellKey]: _, ...rest } = cat;
     console.log(rest);
}

{
     // Currency real rate

     fetch('https://open.er-api.com/v6/latest/USD')
          .then(res => res.json())
          .then(data => {

               const inputCurrency = prompt('введіть вхідну валюту').toUpperCase();
               const currencyConversion = prompt('введіть валюту, в яку відбувається конвертація').toUpperCase();
               const sumInputCurrency = +prompt('введіть суму у вхідній валюті');

               const conversion = (parseFloat(data.rates[currencyConversion]) / parseFloat(data.rates[inputCurrency])) * parseFloat(sumInputCurrency);
               const input = parseFloat(data.rates[inputCurrency]);
               const sum = parseFloat(sumInputCurrency)

               if (input && conversion && !isNaN(sum)) {
                    const result = conversion / input * sum
                    console.log(`вхідна валюта: ${inputCurrency} ${input.toFixed(2)} / сумма ${sumInputCurrency}; валюта для конвертації: ${currencyConversion} ${conversion.toFixed(2)}/ сумма ${result.toFixed(2)}`);
               }
               else {
                    console.log('Введіть коректні дані');
               }


          })
}

{

     // Currency drop down

     const from = document.getElementById('from')
     const to = document.getElementById('to')
     const sum = document.getElementById('sum')
     let optionFrom
     let optionTo

     fetch('https://open.er-api.com/v6/latest/USD')
          .then(res => res.json())
          .then(data => {
               for (const [currency, rate] of Object.entries(data.rates)) {

                    optionFrom = document.createElement('option');
                    optionFrom.value = currency;
                    optionFrom.textContent = `${currency} / ${rate.toFixed(2)}`;
                    from.appendChild(optionFrom);

                    optionTo = document.createElement('option');
                    optionTo.textContent = `${currency} / ${rate.toFixed(2)}`;;
                    optionTo.value = currency;
                    to.appendChild(optionTo);
               }


               convert.addEventListener('click', () => {
                    sum.value = (data.rates[from.value] / data.rates[to.value]).toFixed(2);

               });

          })

}

{
     // Currency table
     fetch('https://open.er-api.com/v6/latest/USD')
          .then(res => res.json())
          .then(data => {
               const currencies = Object.keys(data.rates);

               const table = document.createElement('table');
               table.id = 'head'
               const thead = document.createElement('thead');
               const tbody = document.createElement('tbody');
               const headerRow = document.createElement('tr');

               const tableCurr = document.getElementById('table-currency')
               headerRow.innerHTML =
                    '<th></th>' + currencies.map(currency => `<th>${currency}</th>`).join('');

               thead.appendChild(headerRow);

               currencies.forEach(baseCurrency => {
                    const row = document.createElement('tr');
                    row.innerHTML = `<th>${baseCurrency}</th>` +
                         currencies.map(targetCurrency => `<td>${(data.rates[targetCurrency] / (data.rates[baseCurrency])).toFixed(5)}</td>`).join('');
                    tbody.appendChild(row);
               });

               table.appendChild(thead);

               table.appendChild(tbody);
               tableCurr.appendChild(table);
          })
}


{
     // Form

     const car = {
          "Name": "chevrolet chevelle malibu",
          "Cylinders": 8,
          "Displacement": 307,
          "Horsepower": 130,
          "Weight_in_lbs": 3504,
          "Origin": "USA",
          "in_production": false
     }


     const formContainer = document.getElementById('formContainer')
     const form = document.createElement('form')
     formContainer.appendChild(form)

     Object.keys(car).map((key) => {
          const label = document.createElement('label');
          const input = document.createElement('input');
          form.appendChild(label);
          form.appendChild(input);

          let type;
          if (typeof car[key] === 'number') {
               type = 'number';
          } else if (typeof car[key] === 'string') {
               type = 'text';
          } else {
               type = 'checkbox';
          }
          console.log(type);
          label.textContent = `${key}: `;
          input.type = type;
          input.value = car[key];
          input.style.width = '100%'

     });



}

{

     // Table
     const data = [
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

     const keySlot = []
     for (let i = 0; i < data.length; i++) {
          const keys = Object.keys(data[i]);
          keys.forEach(key => {
               keySlot.push(key);
          });
     }

     const headers = new Set(keySlot)
     const table = document.createElement('table');
     const headerRow = document.createElement('tr');

     headers.forEach(header => {
          const th = document.createElement('th');
          th.textContent = header;
          headerRow.appendChild(th);
     });

     table.appendChild(headerRow);

     data.map(rowData => {
          const row = document.createElement('tr');

          headers.forEach(header => {
               const td = document.createElement('td');
               td.textContent = rowData[header] || '';
               row.appendChild(td);
          });

          table.appendChild(row);
     });

     document.body.appendChild(table);

}

