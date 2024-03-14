// // Calc
// let notification = alert('Введіть по черзі з/п кожного місяця кварталу (у $)')

// let first = prompt('з/п за 1й місяць');
// let second = prompt('з/п за 2й місяць');
// let third = prompt('з/п за 3й місяць');
// let fourth = prompt('з/п за 4й місяць');

// first = parseFloat(first);
// second = parseFloat(second);
// third = parseFloat(third);
// fourth = parseFloat(fourth);

// let total = first + second + third + fourth;

// let data = alert(`Квартальні виплати: ${total} $ 
// Середня з/п: ${total / 4} $`)



// Завдання на синій пояс

const credentials = {
     login: 'admin',
     password: 'qwerty',
}


const username = document.getElementById('username');
const password = document.getElementById('pass');
const result = document.getElementById('result');
const checkbox = document.getElementById('checkbox')

checkbox.onclick = () => {
     password.type = checkbox.checked ? 'text' : 'password';
};

function checkCredentials() {
     if ((username.value) === credentials.login && (password.value) === credentials.password) {
          result.innerHTML = `<div class="success">Welcome, ${username.value} !</div>`;
     } else {
          result.innerHTML = '<div class="error">Please try again.</div>';
     }
}