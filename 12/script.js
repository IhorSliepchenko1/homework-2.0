// fetch basic && improved && race

const constructorTable = (DOM, JSON) => {
     const container = document.getElementById(DOM)
     container.innerText = ''

     container.style.maxWidth = '100%'
     container.style.overflow = 'scroll'
     container.style.marginInline = 'auto'
     container.style.position = 'relative'
     container.style.top = '500px'

     const table = document.createElement('table')
     container.appendChild(table)

     const thead = document.createElement('thead')
     table.appendChild(thead)

     const tr = document.createElement('tr')
     thead.appendChild(tr)

     const tbody = document.createElement('tbody')
     table.appendChild(tbody)

     const trBody = document.createElement('tr')
     tbody.appendChild(trBody)

     for (let i = 0; i < Object.keys(JSON).length; i++) {
          const th = document.createElement('th')

          tr.appendChild(th)
          th.innerText = Object.keys(JSON)[i]

          const tdBody = document.createElement('td')
          trBody.appendChild(tdBody)


          if (typeof Object.values(JSON)[i] === 'object') {
               const div = document.createElement('div')
               div.style.display = 'grid'
               tdBody.appendChild(div)

               Object.values(JSON)[i].map((item) => {
                    const span = document.createElement('span')
                    const btn = document.createElement('button')

                    if (item.slice(0, 4) === 'http') {
                         div.appendChild(btn)
                         btn.value = item
                         btn.innerText = item.slice(23)
                    }

                    else {
                         div.appendChild(span)
                         span.innerText = item
                    }
               })
          }


          const toSoloLink = [[Object.values(JSON)[i]].join('').split('\r\n')]

          if (toSoloLink[0][0].slice(0, 5) === 'https') {
               if (typeof Object.values(JSON)[i] === 'string') {
                    const btn = document.createElement('button')
                    tdBody.appendChild(btn)
                    btn.value = Object.values(JSON)[i]
                    btn.innerText = Object.values(JSON)[i].slice(23)
               }
          }

          else {
               tdBody.innerText = Object.values(JSON)[i]

               if (Object.values(JSON)[i].length === 0) {
                    tdBody.innerText = 'No info'
                    tdBody.style.color = 'red'
               }

          }
     }



     const startFunc = (buttons) => {

          const delay = (ms) => {
               return new Promise(resolve => setTimeout(resolve, ms));
          }

          const raceFetchAndDelay = async (fetchFn) => {
               try {
                    const data = await Promise.race([fetchFn(), delay(10)]);

                    if (data) {
                         console.log(data);
                    }
                    else {
                         console.log('loading...');
                         console.log(data);
                    }
               } catch (error) {
                    console.error('Помилка:', error);
               }
          }

          buttons.forEach(button => {
               button.addEventListener('click', (e) => {
                    const newFetch = () => {
                         return fetch(button.value)
                              .then(res => res.json())
                              .then(luke => {
                                   container.innerHTML = `
       <div style="width: 100px;     margin-inline: auto;">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
          <radialGradient
            id="a12"
            cx=".66"
            fx=".66"
            cy=".3125"
            fy=".3125"
            gradientTransform="scale(1.5)"
          >
            <stop offset="0" stop-color="#FF156D"></stop>
            <stop offset=".3" stop-color="#FF156D" stop-opacity=".9"></stop>
            <stop offset=".6" stop-color="#FF156D" stop-opacity=".6"></stop>
            <stop offset=".8" stop-color="#FF156D" stop-opacity=".3"></stop>
            <stop offset="1" stop-color="#FF156D" stop-opacity="0"></stop>
          </radialGradient>
          <circle
            transform-origin="center"
            fill="none"
            stroke="url(#a12)"
            stroke-width="15"
            stroke-linecap="round"
            stroke-dasharray="200 1000"
            stroke-dashoffset="0"
            cx="100"
            cy="100"
            r="70"
          >
            <animateTransform
              type="rotate"
              attributeName="transform"
              calcMode="spline"
              dur="2"
              values="360;0"
              keyTimes="0;1"
              keySplines="0 0 1 1"
              repeatCount="indefinite"
            ></animateTransform>
          </circle>
          <circle
            transform-origin="center"
            fill="none"
            opacity=".2"
            stroke="#FF156D"
            stroke-width="15"
            stroke-linecap="round"
            cx="100"
            cy="100"
            r="70"
          ></circle>
        </svg>
      </div>`
                                   setTimeout(() => {
                                        constructorTable('table-container', luke);
                                   }, 1000)

                                   return luke;
                              });
                    }

                    raceFetchAndDelay(newFetch);
               })
          })
     }

     const buttons = document.querySelectorAll('button');
     startFunc(buttons);
}



fetch('https://swapi.py4e.com/api/starships/12/')
     .then(res => res.json())
     .then(luke => {
          constructorTable('table-container', luke)
          return luke
     })


// Promisify: confirm

function confirmPromise(text) {
     return new Promise((resolve, reject) => {
          const result = confirm(text);
          if (result) {
               resolve();
          } else {
               reject();
          }
     });
}

confirmPromise('Проміси це складно?').then(() => console.log('не так вже й складно'),
     () => console.log('respect за посидючість і уважність'))

// Promisify: prompt
function promptPromise(text) {
     return new Promise((resolve, reject) => {
          const result = prompt(text);
          if (result) {
               resolve(result);
          } else {
               reject();
          }
     });
}
promptPromise("Як тебе звуть?").then(name => console.log(`Тебе звуть ${name}`),
     () => console.log('Ну навіщо морозитися, нормально ж спілкувалися'))


