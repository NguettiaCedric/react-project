import React, {Component} from 'react';
import './App.css';
import FunctionCount from './components/FunctionCount';
// import ClassCount from './components/ClassCount';


class App extends Component {

  render() {
    return (
      <div className='App'>
        {/* <ClassCount /> */}
        <FunctionCount />
      </div>
    );
  }
}

export default App

