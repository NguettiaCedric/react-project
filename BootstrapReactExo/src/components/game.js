import React, { Component } from "react";
import Btn from "./customBtn";

class Resultat extends Component {
  state = {
    name: "Mario",
    winner: true,
  }

  changeStates = () => this.setState({winner: !this.state.winner})

  
  render() {

    const result = this.state.winner ? `Bravo ${this.state.name}` : 'Raté';
    
    const classColor = this.state.winner ? "alert-success" : "alert-danger";
    
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

        <div>  

          <div className={`alert ${classColor}`} role="alert">
            {result}
          </div>
          <Btn handelClick={this.changeStates} btnStyle={success}>Texte vert</Btn>
       

       
        </div>
        
      );

  }


}

export default Resultat;
 