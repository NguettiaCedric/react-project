import './App.css';
import React, { Component } from 'react'
import Profile from './components/Profile';
import {UserContext, ColorContext} from './components/MyContext'
class App extends Component {

  state = {
    user : {
      name : 'Drico',
      age : 26,
    }
  }

  render() {
    // console.log(UserContext)
    return (
      <UserContext.Provider value={this.state.user}>
        
        <ColorContext.Provider value={'red'}>
          
          <Profile />

        </ColorContext.Provider>
  
      </UserContext.Provider>
      
    );
  }
}

export default App

