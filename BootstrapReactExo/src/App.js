import React, { Component} from 'react';
import Welcome from './components/welcome';
import Template from './components/template';
import Buttons from './components/button';
// import Resultat from './components/game';
// import Btn from './components/customBtn';
// import './App.css';


class App extends Component {
 
  

  render() {
    const sayHello = () => alert("Hello world");

    return (
      <div >    

        <Template/>

        <Welcome/>

        <Buttons />
        {/* <Resultat/>  
        <Btn handelClick={sayHello} btnStyle={{backgroundColor : "indigo"}}>App button </Btn>  */}



      </div>
    );
  }

}

export default App;
