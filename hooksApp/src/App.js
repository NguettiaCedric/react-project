import './App.css';
import React, { Component } from 'react'
import ClasseState from './components/ClasseState';
import FunctionState from './components/FunctionState';

class App extends Component {

  state = {
    user : {
      name : 'Drico',
      age : 26,
    }
  }

  render() {
    return (
      <div>
        
        <h1 className="text-center">useState  Hooks</h1>
        <ClasseState />
        <hr />
        <FunctionState />
      
      
      </div>
    );
  }
}

export default App

