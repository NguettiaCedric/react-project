import React, { Component } from 'react';
import Ref from './MyRef';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
  
    this.refComp = React.createRef();
  }

  handleClick = () =>{
    this.refComp.current.focus();
    console.log(this.refComp.current);
  }
  
  
  render(){

    // console.log(this.refComp)
    return (
      <div className="App">
        <Ref name='toto'  ref={this.refComp} />

        <button onClick={this.handleClick}>Valider</button>

      </div>
    );
  }
}

export default App;
