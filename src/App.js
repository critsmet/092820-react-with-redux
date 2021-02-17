import React from 'react';
import './App.css';
//'connect' is like our "consumer" component if we were using the React CONTEXT API
import { connect } from 'react-redux'
import { increment } from './redux/actionCreators'

function App(props){

  function handleClick() {
    // without the second argument to dispatch:
    // props.dispatch(increment())

    //with mDTP argument to connect
    props.incrementWithinDispatch()
  }

  return(
    <div className="App">
      <p>Counter: {props.thisIsTheCounterValueFromState}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  )
}

//connect is a function that potentially takes in two arguments, and it returns a function that accepts a component as an argument
//Functions that take in other functions or components in React's case are called Higher Order Functions

//Connect is the opposite side of the Provider, and it has access to the store inside of it

//The two arguments that connect accepts potentially are typically called 1. mapStateToProps and 2. mapDispatchToProps

function mSTP(state){
  //the idea is to return an object with keys and values that will be merged in with this component's other props
  return {
    thisIsTheCounterValueFromState: state.counter
  }
}

function mDTP(dispatch){
  return {
    incrementWithinDispatch: () => dispatch(increment())
  }
}

//When connect does not receive a second argument, the dispatch function becomes accessible in props for this component
export default connect(mSTP, mDTP)(App)

//Imagining what's happening inside of connect:
// function connect(func1, func2){
//   //because connect has access to the store
//   let stateToProps = func1(store.getState())

    // return function(component){
      // return new component(stateToProps)
  // }
// }
