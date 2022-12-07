import './App.css';
import React, { Component } from 'react'
import Profile from './components/Profile';
import { MyContext } from './components/MyContext'

class App extends Component {

  state = {
    user : {
      name : 'Drico',
      age : 26,
    }
  }

  render() {
    return (
      <Profile info={this.state.user} />
      
    //  <MyContext.Provider value={this.state.user}>
    //    <Profile info={this.state.user} />
    //  </MyContext.Provider> 


    );
  }
}

export default App

