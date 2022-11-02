import { combineReducers } from 'redux';
import { createStore } from 'redux';
import { DemoReducer } from './Reducers/DemoReducer';
import { GioHangReducer } from './Reducers/GioHangReducer';
import { XucXacReducer } from './Reducers/XucXacReducer';
import { NhanVienReducer } from './Reducers/NhanVienReducer';

const rootReducer = combineReducers({
  DemoReducer,
  GioHangReducer,
  XucXacReducer,
  NhanVienReducer
})

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());