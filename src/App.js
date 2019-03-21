import React, {Component} from 'react';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import InputTask from './InputTask'
import TaskList from './TaskList'
import './App.css';
// ========  action (As Dispatcher) ==========

export const todoReducer = (state= [], action) => {
  switch (action.type) {
      case 'ADD':
        return state.concat([action.data]);
      default:
          return state
  }
}

export const store = createStore(todoReducer)

// ======== wrap root element by Provider with Store ========
class App extends Component {
  render() {
      return (
      <div className="App">
        <Provider store={store}>
            <TaskList/>
            <InputTask/>
        </Provider>
      </div>
      );
  }
}

export default App