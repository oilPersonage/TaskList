import { combineReducers } from 'redux';
import taskList from './reducers/task';
import filters from './reducers/filters';

export default combineReducers({ taskList, filters });
