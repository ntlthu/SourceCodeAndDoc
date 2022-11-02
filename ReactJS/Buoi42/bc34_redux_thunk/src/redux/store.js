//redux toolkit
import { configureStore } from '@reduxjs/toolkit'
import DemoReducer from './reducers/DemoReducer';
import chatReducer from './reducers/chatReducer';
import productReducer from './reducers/productReducer';

export const store = configureStore({
  reducer: {
    DemoReducer,
    chatReducer,
    productReducer
  },
})



//redux
// import { combineReducers, createStore } from 'redux';
// import { DemoReducer } from './reducers/DemoReducer';

// const rootReducer = combineReducers({
//   DemoReducer
// })

// export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());