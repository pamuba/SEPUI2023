const redux = require('redux');
const createStore = redux.createStore;

const BUY_LAPTOP = 'BUY_LAPTOP'
const BUY_PRINTERS = 'BUY_PRINTERS'

function buyLaptop(){
    return {
        type:BUY_LAPTOP,
        payload: 'First Redux Action'
    }
}


function buyPrinters(){
    return {
        type:BUY_PRINTERS,
        payload: 'First Redux Action'
    }
}

//Reducer
// (prevState, action) => newState
const initialState = {
    numOfLaptops:10,
    numOfPrinters:30
}

const reducer = (state=initialState, action) => {
    switch(action.type){
        case BUY_LAPTOP : return {
            ...state,
            numOfLaptops: state.numOfLaptops - 1
        }
        case BUY_PRINTERS : return {
            ...state,
            numOfPrinters: state.numOfPrinters - 1
        }
        default: return state
    }
}

//holds app state
//allows access to state via getState()
//allows state mutation vis dispatch(action)
//registers listeners vis subscribe(listener)
//Unregisters listeners vis the fn returned by subscribe(listener)

//store
const store = createStore(reducer)
console.log('Initial State:', store.getState())


//()=> console.log('Update State:', store.getState()) == LISTENER
//LISTENER runs on every state change
const unsubscribe = store.subscribe(()=> console.log('Update State:', store.getState()))

//onCLick of a button we dispatch a action
store.dispatch(buyLaptop())
store.dispatch(buyLaptop())
store.dispatch(buyLaptop())
store.dispatch(buyPrinters())
store.dispatch(buyPrinters())

unsubscribe()
