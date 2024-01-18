import laptopReducer from './laptop/laptopReducer';
import { configureStore } from '@reduxjs/toolkit';
// import { createStore } from 'redux';
// import { legacy_createStore as createStore , applyMiddleware} from 'redux';

// export default function configureStore(){
//     const store = createStore(laptopReducer)
//     return store;
// }

// configureStore()

const store = configureStore({ reducer: laptopReducer })
// const store = createStore(laptopReducer)
console.log(store.getState().laptopReducer)
// const store = configureStore({ reducer: laptopReducer })

export default store;

/////////////////////////////////////////////////////////////////

// import { configureStore } from "@reduxjs/toolkit";
// import laptopReducer from "./laptop/laptopReducer";

// export const store = configureStore({
//   reducer: {
//     laptops: laptopReducer,
//   },
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;