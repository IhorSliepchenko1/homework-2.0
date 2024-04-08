// Pointer
document.addEventListener('click', (event) => {
     const dot = document.getElementById('dot');
     dot.style.left = `${event.clientX - 12}px`;
     dot.style.top = `${event.clientY - 12}px`;
     dot.style.display = 'block';
});

// Table(optional)

const createTable = (n) => {
     const table = document.getElementById('table');
     let row = n;
     let cell = n;

     const createRowCell = (r, c) => {
          for (let i = 1; i <= r; i++) {
               const tr = document.createElement('tr');
               table.appendChild(tr);

               for (let j = 1; j <= c; j++) {
                    const td = document.createElement('td');
                    td.textContent = `row#${i} cell#${j}`;
                    tr.appendChild(td);
               }
          }
     }

     createRowCell(row, cell)

     const addRow = document.getElementById('add');
     addRow.addEventListener('click', () => {
          table.innerHTML = '';
          row++;
          createRowCell(row, cell)
     });


};
const create = document.getElementById('create')
const inputCreateTable = document.getElementById('inputCreateTable')

create.addEventListener('click', () => {
     table.innerHTML = ''
     createTable(inputCreateTable.value)
})

