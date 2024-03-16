// assign: evaluation
var a = 5;
var b, c;

b = (a * 5);

b = (c = b / 2);

// Дужка після с чи взгалі без них, відповтдь буде незмінна

// b = c = (b / 2);
// b = c = b / 2;

console.log(a, b, c)


{// Number: age
     let yearOfBirth;
     let calcAge;

     while (isNaN(calcAge)) {

          yearOfBirth = +prompt('Введіть ваш рік народження');
          calcAge = new Date().getFullYear() - yearOfBirth;

          if (isNaN(calcAge)) {
               alert('Введіть число!');
          }
     }

     const result = alert(`Вам ${calcAge}.`);
}



{
     // Number: temperature
     let celsius;
     let fahrenheit;

     while (isNaN(celsius)) {
          celsius = +prompt('Введіть температуру в градусах Цельсія');
          fahrenheit = (celsius * 9 / 5) + 32

          if (isNaN(celsius)) {
               alert('Введіть число!');
          }
     }


     const result = alert(
          `У Фаренгейтах ${fahrenheit}; У Цельсіях ${celsius}`)
}

{
     // Number: divide
     const num1 = document.getElementById('num1')
     const num2 = document.getElementById('num2')
     const btn = document.getElementById('btn')
     const equals = document.getElementById('equals')

     btn.addEventListener('click', () => {
          equals.value = Math.floor(Math.floor(num1.value / num2.value))
     })


}

{
     // Number: currency
     let rateUSD = 38.5;
     let promptUAH
     let rateUSH;

     while (isNaN(promptUAH)) {
          promptUAH = +prompt('Введіть сумму у гривнях для обміну у долар');
          rateUSH = promptUAH / rateUSD

          if (isNaN(promptUAH)) {
               alert('Введіть число!');
          }
     }

     const result = alert(
          `Курс долара ${rateUSD} USD; Ваші кошти ${promptUAH.toFixed(2)} UAH; Вам видано ${rateUSH.toFixed(2)} USD`)
}

{     // Number: RGB

     const red = +prompt('введіть "red" значення')
     const green = +prompt('введіть "green" значення')
     const blue = +prompt('введіть "blue" значення')

     alert(`Колір у форматі HEX #${red.toString(16).padStart(2, '0')}${green.toString(16).padStart(2, '0')}${blue.toString(16).padStart(2, '0')}`)

     document.body.style.background = `#${red.toString(16).padStart(2, '0')}${green.toString(16).padStart(2, '0')}${blue.toString(16).padStart(2, '0')}`
}


{
     // Number: flats

     const houseData = prompt('кiлькiсть поверхiв, кiлькiсть квартир на поверсi та номер квартири (через кому!)');
     const houseDataArray = houseData.split(',');

     const numberFloors = parseInt(houseDataArray[0]);
     const apartmentsFloor = parseInt(houseDataArray[1]);
     const apartmentNumber = parseInt(houseDataArray[2]);

     let apartmentsEntrance = numberFloors * apartmentsFloor;

     function roundUpIfDecimal(number) {
          let integerPart = Math.floor(number);
          let decimalPart = number - integerPart;

          if (decimalPart > 0) {
               integerPart += 1;
          }
          return integerPart;
     }

     // № ПІД'ЇЗДУ
     let entranceNumber = roundUpIfDecimal(apartmentNumber / apartmentsEntrance);

     // № КВАРТИРИ
     let floorNumber = roundUpIfDecimal(((apartmentsEntrance - ((entranceNumber * apartmentsEntrance) - apartmentNumber)) / apartmentsFloor));

     const flats = alert(`Пiд'їзд № ${entranceNumber}, № поверху ${floorNumber} `)
}