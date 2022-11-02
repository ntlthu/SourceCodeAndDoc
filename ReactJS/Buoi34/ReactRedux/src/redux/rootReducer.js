import { combineReducers } from 'redux';
import { createStore } from 'redux';
import { DemoReducer } from './Reducers/DemoReducer';
import { GioHangReducer } from './Reducers/GioHangReducer';


const rootReducer = combineReducers({
  DemoReducer,
  GioHangReducer
})

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());