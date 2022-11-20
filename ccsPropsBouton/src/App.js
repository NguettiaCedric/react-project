import React, { Component} from 'react';
import Resultat from './components/game';
import Btn from './components/customBtn';
import './App.css';


class App extends Component {
 
  

  render() {
    const sayHello = () => alert("Hello world");

    return (
      <div className='App'>      
        <Resultat/>  
        <Btn handelClick={sayHello} btnStyle={{backgroundColor : "indigo"}}>App button </Btn>     
      </div>
    )
  }

}

export default App;
