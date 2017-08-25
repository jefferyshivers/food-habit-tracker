import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import mealApp from './reducers/index'

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';




const persistedState = localStorage.getItem('foodApp') ? JSON.parse(localStorage.getItem('foodApp')) : {}
const store = createStore(
  mealApp, 
  persistedState
)
store.subscribe(() => {
  localStorage.setItem('foodApp', JSON.stringify(store.getState()))
})




ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root'));
registerServiceWorker();
