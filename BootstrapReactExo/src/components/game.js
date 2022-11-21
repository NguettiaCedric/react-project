import React, { Component } from "react";
import Btn from "./customBtn";
import { Container, Button, Alert } from "react-bootstrap";

class Resultat extends Component {
  state = {
    name: "Mario",
    winner: true,
  }

  changeStates = () => this.setState({winner: !this.state.winner})

  
  render() {

    const result = this.state.winner ? `Bravo ${this.state.name}` : 'Raté';
    
    const classColor = this.state.winner ? "success" : "danger";
    // const classColor = this.state.winner ? "alert-success" : "alert-danger";
    
    const success = {
      backgroundColor : "green",
      color:"black",
    }

    const danger = {
      backgroundColor : "red",
      borderRadius: "20px",
    }

    /* const primary = {
      backgroundColor : "blue",
    } */


      return (

        <>  

          {/* <div className={`alert ${classColor}`} role="alert">
            {result}
          </div> */}

          {/* <Btn handelClick={this.changeStates} btnStyle={success}>
            Texte vert
          </Btn> */}

          <Alert 
           variant={classColor}
           className='text-center'
           >
            
            {result}
          </Alert>


          {/* <div className="text-center"> */}
            <Button
              onClick={this.changeStates}
              variant="success"
              style={{display:'block', margin:'5px auto'}}
              
            >
              change Status
            </Button>
        
          {/* </div> */}
         

       
        </>
        
      );

  }


}

export default Resultat;
 