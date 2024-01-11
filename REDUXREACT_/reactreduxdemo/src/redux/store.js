import { configureStore } from '@reduxjs/toolkit'
import laptopReducer from './laptop/laptopReducer';
import { legacy_createStore as createStore , applyMiddleware} from 'redux';

// export default function configureStore(){
//     const store = createStore(laptopReducer)
//     return store;
// }

// configureStore()


const store = createStore(laptopReducer)
console.log(store.getState())
// const store = configureStore({ reducer: laptopReducer })

export default store;