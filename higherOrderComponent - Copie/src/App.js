import React, { Component } from 'react';
// import Ref from './MyRef';
import './App.css';
import Reactjs from './Drico';
import Vuejs from './Iko';

class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      Reactjs : 100,
      Vuejs : 100,
    }
  }


  reduceLife = (param, param2) => {
    console.log(param);

    if (param === 'Reactjs') {
        this.setState({
          Vuejs : this.state.Vuejs - param2
        })
    } else {
      this.setState({
        Reactjs : this.state.Reactjs - param2 
      })
    }
  }
  

  
  render(){

    return (
      <div className="container text-center">
        <h1>React js vs Vue js</h1>

        <hr />


        <div className='row'>
          <Reactjs name="reactjs"  life={this.state.Reactjs} reduceHandle={this.reduceLife}/>
          <Vuejs  name="vuejs" life={this.state.Vuejs} reduceHandle={this.reduceLife}/>

        </div>

      </div>
    );
  }
}

export default App;
