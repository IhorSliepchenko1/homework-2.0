const wrapper = document.getElementById(`wrapper`)
const basketData = JSON.parse(localStorage.getItem(`basket`)) || []

localStorage.setItem(`basket`, JSON.stringify(basketData))
localStorage.setItem(`store`, JSON.stringify(dataArr))

const render = (data) => {
     localStorage.setItem(`store`, JSON.stringify(dataArr))
     data.map((item, index) => {
          const card = document.createElement(`div`)
          card.className = `card`
          wrapper.append(card)

          const title = document.createElement(`div`)
          title.className = `title`
          title.textContent = item.title
          card.append(title)

          const imgSlot = document.createElement(`div`)
          imgSlot.className = `img-slot`
          card.append(imgSlot)

          const image = document.createElement(`img`)
          image.className = `image`
          image.src = item.image
          imgSlot.append(image)

          const rating = document.createElement(`div`)
          rating.className = `rating`
          card.append(rating)

          const slotRatingCreatot = (text, item, className) => {
               const slotRating = document.createElement(`div`)
               slotRating.className = `slot-rating`
               rating.append(slotRating)

               const titleRating = document.createElement(`div`)
               titleRating.textContent = text
               slotRating.append(titleRating)

               const countRating = document.createElement(`div`)
               countRating.textContent = item
               countRating.className = className
               slotRating.append(countRating)
          }

          slotRatingCreatot(`rate:`, item.rate, `bold`)
          slotRatingCreatot(`count:`, item.count, `boldC`)

          const divSlot = document.createElement(`div`)
          card.append(divSlot)

          const addSlot = document.createElement(`div`)
          addSlot.className = `add-slot`
          divSlot.append(addSlot)

          const btnCreator = (className, stringSym, input) => {
               const btn = document.createElement(`button`)
               btn.className = className
               btn.textContent = stringSym
               addSlot.append(btn)

               const startValue = item.count

               btn.addEventListener(`click`, () => {

                    if (stringSym === `+`) {
                         input.value = +input.value + 1
                         item.count = item.count - 1

                         document.querySelectorAll(`.boldC`)[index].textContent = item.count
                         document.querySelectorAll(`.cash`)[index].value = `${(input.value * item.price).toFixed(2)} $`

                         if (input.value >= item.count) {
                              input.value = item.count
                              document.querySelectorAll(`.cash`)[index].value = `${(startValue * item.price).toFixed(2)} $`
                              alert(`you have selected the maximum quantity of this product`)
                         }
                    }

                    else {
                         input.value = +input.value - 1
                         item.count = item.count + 1

                         document.querySelectorAll(`.boldC`)[index].textContent = item.count

                         if (input.value <= 0 || item.count === startValue) {
                              input.value = 0
                              item.count = startValue
                         }
                    }
               })
          }


          const input = document.createElement(`input`)
          input.className = `input`
          input.type = `number`
          input.value = 0

          input.addEventListener(`input`, () => {
               document.querySelectorAll(`.boldC`)[index].textContent = item.count - input.value
               document.querySelectorAll(`.cash`)[index].value = `${(input.value * item.price).toFixed(2)} $`

               if (input.value >= item.count) {
                    input.value = item.count
                    document.querySelectorAll(`.boldC`)[index].textContent = 0
                    alert(`you have selected the maximum quantity of this product`)

                    document.querySelectorAll(`.cash`)[index].value = `${(input.value * item.price).toFixed(2)} $`
               }
          })

          addSlot.append(input)
          btnCreator(`minus`, `-`, input)
          btnCreator(`plus`, `+`, input)

          const priceSlot = document.createElement(`div`)
          priceSlot.className = `price-slot`
          card.append(priceSlot)

          const pricePiece = document.createElement(`div`)
          pricePiece.className = `price-piece`
          priceSlot.append(pricePiece)

          const price = document.createElement(`div`)
          price.className = `price`
          price.textContent = `${item.price} $`
          pricePiece.append(price)

          const span = document.createElement(`span`)
          span.textContent = `(for 1 piece)`
          pricePiece.append(span)

          const button = document.createElement(`button`)
          button.textContent = `add basket`
          button.className = `btn`
          priceSlot.append(button)

          button.addEventListener(`click`, () => {
               basketData.push({
                    "title": item.title,
                    "price": item.price,
                    "count": +input.value,
                    "summ": item.price * input.value,
               },)

               localStorage.setItem(`basket`, JSON.stringify(basketData))
               cash.value = 0
               input.value = 0
               calculateTotal()
          })

          const total = document.createElement(`div`)
          total.className = `total`
          card.append(total)

          const pay = document.createElement(`div`)
          pay.className = `pay`
          pay.textContent = `to pay:`
          total.append(pay)

          const cash = document.createElement(`input`)
          cash.className = `cash`
          cash.readOnly = true
          cash.value = 0
          total.append(cash)

     })

}


