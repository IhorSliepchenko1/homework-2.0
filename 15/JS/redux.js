const ADD_BASKET = `ADD_BASKET`
const BUY = `BUY`
const ADD_BALANCE = `ADD_BALANCE`


const storeReducer = (state = JSON.parse(localStorage.getItem(`store`)), action) => {
     switch (action.type) {
          case ADD_BASKET:
               return state.map((item) => {
                    if (item.title === action.title) {
                         item.count = item.count - action.value;
                    } return item
               })

          default:
               return state;
     }
};


const balanceReducer = (state = 0, action) => {
     switch (action.type) {
          case ADD_BALANCE:
               return state + action.value;

          case BUY:
               return state - action.value;
          default:
               return state;
     }
};

const store = (reducer, initialValue) => {
     let state = initialValue

     if (state === null) {
          state = 0
     }

     let listeners = [];

     const getState = () => {
          return state;
     }

     const dispatch = (action) => {
          state = reducer(state, action);
          listeners.forEach((callback) => callback());
     }

     const subscribe = (listener) => {
          listeners.push(listener);

          return () => {
               listeners = listeners.filter(l => l !== listener);
          };
     }


     return { getState, dispatch, subscribe };
}

