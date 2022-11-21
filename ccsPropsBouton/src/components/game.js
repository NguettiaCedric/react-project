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
           
          <button onClick={this.changeStates} className="btn btn-primary mt-1">Changer le state</button>
          
          {/* <Btn >Cliquez ici !</Btn> le btn avec les propriete par defaut */}
          <Btn handelClick={this.changeStates} btnStyle={success}>Texte vert</Btn>
          <Btn btnStyle={danger}>Texte  blanc</Btn>
          <Btn btnStyle={{backgroundColor : "blue"}}>Texte blanc</Btn>
        
        
        </div>
        
      );

  }


}

export default Resultat;
 