import React, { Component } from 'react';
import Ref from './MyRef';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
  
    this.refComp = React.createRef();
  }

  handleClick = () =>{
    this.refComp.current.addFocus();
    console.log(this.refComp.current);
  }
  
  
  render(){

    return (
      <div className="App">
          <Ref ref={this.refComp} />

        <button onClick={this.handleClick}>Valider</button>

      </div>
    );
  }
}

export default App;
