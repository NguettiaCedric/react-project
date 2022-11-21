import React, { Component} from 'react';
// import Welcome from './components/welcome';
// import Template from './components/template';
// import Buttons from './components/button';
import Resultat from './components/game';
import Btn from './components/customBtn';
import { Button, Container } from "react-bootstrap";
import './App.css';


class App extends Component {
 
 

  render() {
    const sayHello = () => alert("Hello world");
    const customBtn = {
      backgroundColor : "grey",
      border : "none",
      color:"#fff",
      fontSize : "19px",
      padding : "15px 30px",
      textAlign : "center",
      textDecoration : "none",
      borderRadius : "7px",
      display :"block",
      margin : "5px auto"
  }

    return (
      <Container >    
        <Resultat/>  
        {/* <Btn
         handelClick={sayHello} btnStyle={{backgroundColor : "indigo"}}>App button 
         </Btn>  */}

         <Button
          onClick={sayHello}
          variant='warning'
          // style={customBtn}
          style={{display:'block', margin:'5px auto'}}
          // className='text-center'
          >
            App button 
         </Button> 



      </Container>
    );
  }

}

export default App;
