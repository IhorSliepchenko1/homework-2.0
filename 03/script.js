{
     // String: greeting
     const question = prompt('як вас звати?')
     const answer = alert(`${question} привіт!`)
}

{
     // String: gopni4ek
     const words = prompt('Напишіть слова через кому')
     const splitJoin = alert(`${words.split(',').join('блін')}`)
}

// String: capitalize
let str = "cANBerRa"
let result = (word) => word[0].toUpperCase() + word.slice(1).toLowerCase()
console.log(result(str));


{
     // String: word count
     const stringWords = 'Кількість слів у рядку розбитого пробілами'
     const stringWordsArray = stringWords.split(' ').length
     console.log(stringWordsArray);
}

{
     // String: credentials
     const personalData = {
          firstName: prompt('Прізвище').trim(),
          lastName: prompt(`Ім'я`).trim(),
          patronymicName: prompt('По-батькові').trim(),
     }
     const fullName = `${result(personalData.firstName)} ${result(personalData.lastName)} ${result(personalData.patronymicName)}`
     console.log(fullName);
}

{
     // String: beer
     let str = "Було жарко. Василь пив пиво вприкуску з креветками"
     let result = str.split('пиво').join('чай')
     console.log(result);
}

{
     // String: no tag
     let str = "якийсь текст, в якому є один тег <br /> і всяке інше"
     let firstDelete = str.indexOf('<')
     let lastDelete = str.indexOf('>')

     let result = `${str.slice(0, firstDelete).trim()} ${str.slice(lastDelete + 1).trim()}`
     console.log(result);
}

{
     // String: big tag
     let str = "якийсь текст, в якому є один тег <br /> і всяке інше"
     let firstDelete = str.indexOf('<')
     let lastDelete = str.indexOf('>')
     let result = `${str.slice(0, firstDelete).trim()} ${str.slice(firstDelete, lastDelete + 1).toLocaleUpperCase()} ${str.slice(lastDelete + 1).trim()}`

     console.log(result);
}

{
     // String: new line
     const promptNewLine = prompt('Введіть щось, якщо треба ЕНТЕР напишіть \\n')
     const result = promptNewLine.split('\\n').join('\n')
     console.log(result);
}

{
     // String: youtube
     const linkYoutube = prompt('Введіть посилання на відео з YouTube:');
     const regularExpression = /[a-zA-Z0-9_-]{11}/;
     const matchArray = linkYoutube.match(regularExpression);
     console.log(matchArray);
     const embedCode = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${matchArray}" frameborder="0" allowfullscreen></iframe>`;

     document.write(embedCode);
}