import React, { Component } from 'react';
import ParentComponent from './ParentComponent';
// import MyComponent from './MyComponent';


import './App.css';

class App extends Component {

  
  render(){

    return (
      <div className="App">
        {/* <MyComponent /> */}

        <ParentComponent />
          
      </div>
    );
  }
}

export default App;
