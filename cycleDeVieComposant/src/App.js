import React, { Component } from 'react';
import LifeCycle from './LifeCycle';
import './App.css';

class App extends Component {

  state = {
    display : true,
  }


  // displayHide = () => {

  //   if (this.state.display) {
  //     this.setState({
  //       display: false
  //     })
  //   }else(
  //     this.setState({
  //       display: true
  //     })
  //   )
  // }

  displayHide = () => {

    this.setState({
      display : !this.state.display
    })
  }
  
  render(){

      const showComponent = this.state.display ? (<LifeCycle name="Toto 2" />) : (<div></div>) ;

    return (
      <div className="App"> 
       
        { showComponent }
        <button onClick={this.displayHide}>Cliquez ici</button>

      </div>
    );
  }
}

export default App;
