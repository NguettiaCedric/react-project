import './App.css';
import React, { Component } from 'react'
import Todo from './components/Todo';

class App extends Component {

  render() {
    return (
      <div className='container'>
  
        <Todo />
      </div>
    );
  }
}

export default App

