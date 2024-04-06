// Pointer
document.addEventListener('click', (event) => {
     const dot = document.getElementById('dot');
     dot.style.left = `${event.clientX - 12}px`;
     dot.style.top = `${event.clientY - 12}px`;
     dot.style.display = 'block';
});

// Table(optional)

const createTable = (n) => {
     const table = document.createElement('table')
     document.body.appendChild(table)

     for (let i = 1; i <= n; i++) {
          const tr = document.createElement('tr')
          table.appendChild(tr)

          i % 2 === 0 ? tr.style.backgroundColor = 'grey' : tr.style.backgroundColor = '#e6e2e2'
          tr.innerHTML = `<td>${i}</td>`.repeat(n)
     }

}
const create = document.getElementById('create')
const inputCreateTable = document.getElementById('inputCreateTable')

create.addEventListener('click', () => createTable(inputCreateTable.value))