const tasksProm = prompt(`Number
String
Boolean
Comparison
Ternary
Prompt
Confirm (or)
Confirm (if)
Default (or)
Default (if)
Login
Currency
Scissors
чорний пояс
`)

if (tasksProm === "Number") {
     // Number: odd
     const promptValue = prompt('Введіть число');

     if (isNaN(promptValue)) {
          alert('Ви ввели не число!')
     }

     if (promptValue % 2 === 0) {
          alert('введено парне число')
     } else {
          alert('введено рядок або число не парне')
     }
}

else if (tasksProm === "String") {
     // String: lexics
     const arrayRandomWord = prompt('введіть будь-що')
          .includes('a') === true
          ? alert('літеру "a" знайдено') : alert('літеру "a" НЕ знайдено');
}

else if (tasksProm === "Boolean") {
     // Boolean + Boolean: if

     const isMale = confirm('Ви чоловік?');
     const likesPizza = confirm('Вам подобається піца?');

     let genderInfo, pizzaInfo;

     if (isMale) {
          genderInfo = "Ви чоловік";
     } else {
          genderInfo = "Ви жінка";
     }

     if (likesPizza) {
          pizzaInfo = "і ви любите піцу";
     } else {
          pizzaInfo = "і ви НЕ любите піцу";
     }
     const answer = alert(`${genderInfo}, ${pizzaInfo}`);
}

else if (tasksProm === "Comparison") {
     // Comparison: sizes

     const sizeUSA = prompt('Введіть ваш розмір(США)');

     let internationalSize;

     if (sizeUSA <= 2) {
          internationalSize = "XS"

     } else if (sizeUSA > 2 && sizeUSA <= 6) {
          internationalSize = "S"

     } else if (sizeUSA > 6 && sizeUSA <= 10) {
          internationalSize = "M"

     } else if (sizeUSA > 10 && sizeUSA <= 14) {
          internationalSize = "L"

     } else if (sizeUSA > 14 && sizeUSA <= 17) {
          internationalSize = "XL"

     } else {
          internationalSize = "XL+"
     }

     const UAH = alert(`
Ваш розмір USA: ${sizeUSA}
Ваш розмір UA: ${Number(sizeUSA) + 38}
Ваш розмір international: ${internationalSize}
`)
}

else if (tasksProm === "Ternary") {
     // Ternary
     const male = confirm('Ви чоловік?');
     male === true ? alert('Ви чоловік') : alert('Ви жінка');

}

else if (tasksProm === "Prompt") {

     // Prompt: or
     let age = prompt('How old are you?');

     if (age === null || age === undefined || age === '' || isNaN(age)) {
          alert('Відповідь некоректна');
     } else {
          alert(`Вам ${age} роки(ів)`);
     }
}

else if (tasksProm === "Confirm (or)") {
     // Confirm: or this days

     confirm("Шопінг?") || alert("ти бяка");
}

else if (tasksProm === "Confirm (if)") {

     //Confirm: if this days
     let shoping = confirm('Шопінг?');

     if (shoping === false) {
          alert('ти бяка');
     }
}

else if (tasksProm === "Default (or)") {

     // Default: or
     let surname = prompt('Прізвище?') || "Шевченко";
     let name = prompt("Ім'я?") || "Тарас";
     let patronymic = prompt("По-батькові?") || "Григорович";
     console.log(surname, name, patronymic)
}

else if (tasksProm === "Default (if)") {

     // Default: if

     let surnameInput = prompt("Введіть ваше прізвище");
     let surname;

     if (surnameInput !== null && surnameInput !== "") {
          surname = surnameInput;
     } else {
          surname = "Shevchenko";
     }

     let nameInput = prompt("Введіть ваше ім'я");
     let name;

     if (nameInput !== null && nameInput !== "") {
          name = nameInput;
     } else {
          name = "Taras";
     }

     let patronymicInput = prompt("Введіть ваше по батькові ");
     let patronymic;

     if (patronymicInput !== null && patronymicInput !== "") {
          patronymic = patronymicInput;
     } else {
          patronymic = "Grigorovich";
     }


     console.log(surname, name, patronymic)



}

else if (tasksProm === "Login") {
     // Login and password
     const credentials = {
          login: 'admin',
          password: 'qwerty',
     };

     let login = prompt('Введіть логін');
     let pass;

     if (login === credentials.login) {

          alert('Логін коректний');
          pass = prompt('Введіть пароль');

          if (pass === credentials.password) {
               alert('Пароль вірний');
          } else {
               alert('Помилка введення пароля');
          }
     } else {
          alert('Помилка введення логіна');
     }

}

else if (tasksProm === "Currency") {
     // Currency exchange
     const currencyObj = [
          {
               eurBuy: 40.5,
               eurSell: 41.1
          },

          {
               usdBuy: 37.15,
               usdSell: 37.6
          },
          {
               zlBuy: 9.3,
               zlSell: 9.47
          }
     ];

     const currencyPrompt = prompt('Введіть валюту: eur, usd, zl').toLowerCase();
     const sellBuy = confirm('Купити (ОК), Продати (Сancel)');
     const money = prompt('Сума на обмін');
     let rate;

     if (currencyPrompt === 'eur') {
          rate = sellBuy ? currencyObj[0].eurBuy : currencyObj[0].eurSell;
          console.log(`EURO: ${money} / UAH: ${(money * rate).toFixed(2)}`);

     } else if (currencyPrompt === 'usd') {
          rate = sellBuy ? currencyObj[1].usdBuy : currencyObj[1].usdSell;
          console.log(`USD: ${money} / UAH: ${(money * rate).toFixed(2)}`);

     } else if (currencyPrompt === 'zl') {
          rate = sellBuy ? currencyObj[2].zlBuy : currencyObj[2].zlSell;
          console.log(`PLN: ${money} / UAH: ${(money * rate).toFixed(2)}`);

     } else {
          console.log('Невірна валюта');
     }


}

else if (tasksProm === "Scissors") {

     // Scissors
     const rockPaperScissorsUser = prompt('Зробіть вибір: камінь, ножиці, папір')
     let userNum;

     if (rockPaperScissorsUser === "камінь") {
          userNum = 0

     } else if (rockPaperScissorsUser === "ножиці") {
          userNum = 1

     } else if (rockPaperScissorsUser === "папір") {
          userNum = 2
     }



     const compNum = Math.floor(Math.random() * 3);
     let rockPaperScissors;

     if (compNum === 0) {
          rockPaperScissors = "камінь"

     } else if (compNum === 1) {
          rockPaperScissors = "ножиці"

     } else if (compNum === 2) {
          rockPaperScissors = "папір"
     }


     if (userNum === compNum) {
          alert(`Ви обрали ${rockPaperScissorsUser} / Комп обрав ${rockPaperScissors}. НІЧИЯ!`);
     } else if
          ((userNum === 0 && compNum === 1) ||
          (userNum === 1 && compNum === 2) ||
          (userNum === 2 && compNum === 0)) {
          alert(`Ви обрали ${rockPaperScissorsUser} / Комп обрав ${rockPaperScissors}. ВИ ПЕРЕМОГЛИ!`);
     } else {
          alert(`Ви обрали ${rockPaperScissorsUser} / Комп обрав ${rockPaperScissors}. КОМП ВИГРАВ!`);
     }


}

else if (tasksProm === "чорний пояс") {
     // Завдання на чорний пояс

     {
          const rockPaperScissorsUser = prompt('Зробіть вибір: камінь, ножиці, папір');
          let userNum;

          rockPaperScissorsUser === "камінь" && (userNum = 0)
               || rockPaperScissorsUser === "ножиці" && (userNum = 1)
               || rockPaperScissorsUser === "папір" && (userNum = 2);

          const compNum = Math.floor(Math.random() * 3);
          let rockPaperScissorsComp;

          compNum === 0 && (rockPaperScissorsComp = "камінь")
               || compNum === 1 && (rockPaperScissorsComp = "ножиці")
               || compNum === 2 && (rockPaperScissorsComp = "папір");

          let win = ((userNum === 0 && compNum === 1) || (userNum === 1 && compNum === 2) || (userNum === 2 && compNum === 0));
          let result;

          win && (result = `Ви обрали ${rockPaperScissorsUser} / Комп обрав ${rockPaperScissorsComp}. ВИ ПЕРЕМОГЛИ!`);
          !win && (result = `Ви обрали ${rockPaperScissorsUser} / Комп обрав ${rockPaperScissorsComp}. КОМП ВИГРАВ!`);

          (userNum === compNum) && (result = `Ви обрали ${rockPaperScissorsUser} / Комп обрав ${rockPaperScissorsComp}. НІЧИЯ!`);

          alert(result);

     }
}

else {
     alert('Всього найкращого!')
}