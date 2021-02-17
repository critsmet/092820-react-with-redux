import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore } from 'redux'
import { Provider } from 'react-redux'

function counterReducer(state = {counter: 0}, action){
  switch(action.type){
    case 'INCREMENT':
      //1. We don't need to use anything like previousState when referencing the current version of state
      //2. Redux does not automatically merge objects, so you have to return the complete state object as you want it to look
      return {counter: state.counter + 1}
    default:
      return state;
  }
}

//"Store" does not equal "State"
//The store has a function called getState in it, as well as a dispatch function
const store = createStore(counterReducer)

//It's the React CONTEXT API that the react-redux library is using to create the ability for any component to connect itself to the globalo store

//In React, Components that take in other components are arguments (or children) are called Higher Order Components

//A guess at what this actually looks like when compiled down into primitive JS
// new Provider({store: store, components: [new App]})
ReactDOM.render(
  <Provider store={store}>
      <App someKey={"someValue"}/>
  </Provider>,
document.getElementById('root'));
