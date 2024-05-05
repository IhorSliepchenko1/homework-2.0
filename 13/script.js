// SWAPI Links

const swapiLinks = async (url) => {

     const promiseFb = async (url) => {
          const data = await fetch(url);
          const parse = await data.json()
          return parse
     }

     const json = await promiseFb(url)

     Object.keys(json).forEach((item) => {
          if (json[item].slice(0, 5) === 'https') {
               promiseFb(json[item]).then((res) => {
                    json[item] = res
               })
          }

          if (typeof json[item] === 'object') {
               json[item].forEach((el) => {
                    if (el.slice(0, 5) === 'https') {
                         json[item] = []

                         promiseFb(el).then((res) => {
                              json[item].push(res)
                         })
                    }
               })
          }
     })

     return json
}


const url = 'https://swapi.dev/api/people/20';

swapiLinks(url)
     .then(yodaWithLinks => console.log(yodaWithLinks))

// domEventPromise

function domEventPromise(element, eventName) {

     function executor(resolve) {
          element.addEventListener(eventName, (e) => {
               resolve(e)
               element.disabled = true
          });

          element.removeEventListener(eventName, (e) => {
               resolve(e)
          });
     }
     return new Promise(executor)
}

const knopka = document.getElementById('button')

knopka.className = 'knopka'
knopka.innerText = 'click'

domEventPromise(knopka, 'click').then(e => console.log('event click happens:', e))