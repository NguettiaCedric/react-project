import React, { Component } from 'react';
import './App.css';
import Reactjs from './Drico';
import Vuejs from './Iko';
import AddHits from './AddHits';

class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      Reactjs : 100,
      Vuejs : 100,
    }
  }


  reduceLife = (param) => {
    console.log(param);

    if (param === 'Reactjs') {
        this.setState({
          Vuejs : this.state.Vuejs - 20
        })
    } else {
      this.setState({
        Reactjs : this.state.Reactjs - 10 
      })
    }
  }
  

  
  render(){

    return (
      <div className="container text-center">
        <h1>React js vs Vue js</h1>

        <hr />


        <div className='row'>
          {/* <Reactjs render={(frontEnd) => frontEnd && "Reactjs"}/> */}
          {/* <Reactjs name={(frontEnd) => { return "Reactjs"}}/> */}
          {/* <Vuejs  render={(frontEnd) => frontEnd && "vuejs"} /> */}

          <AddHits 
            render={
              (hits, addOne, front) => (
                front.reactjs && <Reactjs hits={hits} addOne={addOne} name="Reactjs"/>
              )
            }
          />

          <AddHits 
            render={
              (hits, addOne, front) => (
                front.vuejs && <Vuejs hits={hits} addOne={addOne} name="Vuejs" />
              )
            }
          />

        </div>

      </div>
    );
  }
}

export default App;
