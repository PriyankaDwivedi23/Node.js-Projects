import {FETCH_USER } from '../actions/types';
//null  = not sure user os logged in or not
//user model = if user is logged
//false = if user is not logged in
export default function(state= null, action){
  switch(action.type){
    case FETCH_USER : return action.payload || false;
    default : return state;
  }
}
