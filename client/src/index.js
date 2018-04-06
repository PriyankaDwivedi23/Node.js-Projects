//redux side thing will be there in this file
import 'materialize-css/dist/css/materialize.min.css'
import React from 'react';
import ReactDOM from 'react-dom';
//provider tag combines react and reduce component together
import { Provider } from 'react-redux';
//createstore creates new instance of redux store
import { createStore , applyMiddleware } from 'redux';
import  reduxThunk from 'redux-thunk';

//Reducers import
import reducers from './reducers';
import App from './components/App';
const store = createStore(() => [reducers],{},applyMiddleware());

ReactDOM.render(<Provider store={store}><App /></Provider> , document.querySelector('#root'));
