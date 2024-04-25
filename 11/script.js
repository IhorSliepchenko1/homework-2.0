// makeProfileTimer
const makeProfileTimer = () => {
     const start = performance.now()
     return () => {
          const end = performance.now()
          return end - start
     }
}

const timer = makeProfileTimer()

alert('Вимiрюємо час роботи цього alert');
alert(timer());

const timer2 = makeProfileTimer()

prompt('')
alert(`Час роботи двух аlert та одного prompt ${timer()}`)
alert(`Час роботи prompt та попереднього alert ${timer2()}`)

// makeSaver

const makeSaver = (fn) => {
     const save = fn()
     return () => { return save }
}

let saver = makeSaver(Math.random)

let value1 = saver()
let value2 = saver()
//в makeSaver функцію;
alert(`Random: ${value1} === ${value2}`)

let saver2 = makeSaver(() => {
     console.log('saved function called');
     return [null, undefined, false, '', 0, Math.random()][Math.floor(Math.random() * 6)]
})
let value3 = saver2()
let value4 = saver2()

value3 === value4

console.log(value3 === value4);

let namePrompt = prompt.bind(window, 'Як тебе звуть?')
let nameSaver = makeSaver(namePrompt)
alert(`Привіт! Prompt ще не було!`)
alert(`Привіт ${nameSaver()}. Щойно запустився prompt, перший та останній раз`)
alert(`Слухай, ${nameSaver()}, го пити пиво. Адже prompt був лише один раз`)

myBind




const myBind = (fn, thisArg, arr) => {
     return (...arg) => {
          let indexArg = 0
          const copyArr = arr.slice()
          for (let i = 0; i < copyArr.length; i++) {
               if (typeof copyArr[i] === 'undefined') {
                    copyArr[i] = arg[indexArg];
                    indexArg += 1;
               }
          }
          return fn.apply(thisArg, copyArr);
     }
}

let pow5 = myBind(Math.pow, Math, [, 5]);
let cube = myBind(Math.pow, Math, [, 3]);

console.log(pow5(2)); // => 32
console.log(pow5(4)); // => 1024
console.log(cube(3)); // => 27




let chessMin = myBind(Math.min, Math, [, 4, , 5, , 8, , 9])
console.log(chessMin(-1, -5, 3, 15)); // результат - 5

let zeroPrompt = myBind(prompt, window, [undefined, "0"])
let someNumber = zeroPrompt("Введіть число")  // викликає prompt("Введіть число","0")

const bindedJoiner = myBind((...params) => params.join(''), null, [, 'b', , , 'e', 'f'])
console.log(bindedJoiner('a', 'c', 'd') === 'abcdef');
console.log(bindedJoiner('1', '2', '3') === '1b23ef');

// checkResult

function checkResult(original, validator) {
     return function (...params) {
          const result = original(...params);
          if (validator(result)) {
               return result;
          } else {
               console.log("Invalid input, please try again.");
               return checkResult(original, validator)(...params);
          }
     };
}

// original
const numberPrompt = checkResult(prompt, x => !isNaN(+x))

let number = +numberPrompt("Введіть число", "0")
console.log(number)
const gamePrompt = checkResult(prompt, x => ['камень', 'ножиці', 'папір'].includes(x.toLowerCase()))
const turn = gamePrompt("Введіть щось зі списку: 'камень', 'ножиці', 'папір'")

console.log(turn);