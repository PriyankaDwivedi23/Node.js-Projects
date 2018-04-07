//for ajax requests
import axios from 'axios';
import { FETCH_USER } from './types'
//dispatch function send the action to all different reducers
//in the store causing them to instantly recalculate app state
export const fetchUser = () => async dispatch => {
   const res  = await axios.get('/api/current_user');
   dispatch({type : FETCH_USER , payload : res.data });

  };
