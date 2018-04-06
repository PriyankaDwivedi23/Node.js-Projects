import {combineReducers} from 'redux';
import authReducer from './authReducer';
//keys inside the object we pass in combine reducer will be the keys for the state
export default combineReducers({
  auth : authReducer

});
