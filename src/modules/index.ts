import { combineReducers } from 'redux';
import board from './board';
import task from './task';
const rootReducer = combineReducers({ board, task });
export default rootReducer;
