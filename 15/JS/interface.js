const balance = document.getElementById(`balance`)
const inpBalance = document.getElementById(`inpBalance`)
const add_balance = document.getElementById(`add_balance`)

const createStoreCash = store(balanceReducer, JSON.parse(localStorage.getItem(`balance`)))
const createStore = store(storeReducer, dataArr)

const obj = JSON.parse(localStorage.getItem(`basket`))

obj.map((item) => {
     createStore.dispatch({ type: ADD_BASKET, title: item.title, value: item.count });
})
createStore.subscribe(() => {
     const state = createStore.getState();
     localStorage.setItem(`store`, JSON.stringify(state))
     render(state)
})


createStoreCash.subscribe(() => {
     const state = createStoreCash.getState();
     localStorage.setItem(`balance`, state)
     balance.textContent = (+localStorage.getItem(`balance`)).toFixed(2)
})

add_balance.addEventListener(`click`, () => {
     createStoreCash.dispatch({ type: ADD_BALANCE, value: +inpBalance.value });
     inpBalance.value = ``
})

createStoreCash.dispatch({});
createStore.dispatch({});

const empty = document.getElementById(`empty`)
const buy = document.getElementById(`buy`)
const value = document.getElementById(`value`)
const cashBalance = document.getElementById(`cashBalance`)

const calculateTotal = () => {
     const valueSumm = JSON.parse(localStorage.getItem(`basket`))
     const summ = []
     valueSumm.map((item) => {
          summ.push(item.summ)

     })
     if (summ.length > 0) {
          const total = summ.reduce((a, b) => a + b)
          value.textContent = `${+total.toFixed(2)} $`
          return total

     } else return
}

calculateTotal()

const arrCashBalance = JSON.parse(localStorage.getItem(`cashBalance`)) || []
localStorage.setItem(`cashBalance`, JSON.stringify(arrCashBalance))

const cashRender = () => {
     const cashBalanceData = JSON.parse(localStorage.getItem('cashBalance'));

     if (cashBalanceData && cashBalanceData.length > 0) {
          let cash = `${cashBalanceData.reduce((a, b) => a + b).toFixed(2)} $`;
          cashBalance.innerText = cash;
          document.title = cash;

          return cash;
     } else {
          console.error('Error');
          return '';
     }
}

cashRender();

buy.addEventListener(`click`, () => {
     if (calculateTotal() < +localStorage.getItem(`balance`)) {

          arrCashBalance.push(JSON.parse(calculateTotal()))
          localStorage.setItem(`cashBalance`, JSON.stringify(arrCashBalance))
          cashBalance.innerText = cashRender()
          document.title = cashRender()

          createStoreCash.dispatch({ type: BUY, value: calculateTotal() });
          value.textContent = `0 $`
          localStorage.setItem(`basket`, JSON.stringify([]))

     } else {
          alert(`top up your balance`)
     }
})

