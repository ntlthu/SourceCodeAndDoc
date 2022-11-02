import { combineReducers } from 'redux';
import { createStore } from 'redux';
import { DemoReducer } from './Reducers/DemoReducer';


const rootReducer = combineReducers({
  DemoReducer
})

export const store = createStore(rootReducer);