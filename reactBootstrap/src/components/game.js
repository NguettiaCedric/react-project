import React, { Component } from "react";

class Resultat extends Component {
  state = {
    name: "Mario",
    winner: true,
  };


 /*  changeState = () => {
    this.setState = ({
        // name: "Mariosassaaaa",
        winner: !this.state.winner,
    })
    console.log(this.setState.winner);
  } */

  changeStates = () => this.setState({winner: !this.state.winner})

  
  render() {

    const result = this.state.winner ? `Bravo ${this.state.name}` : 'Raté';
    const classColor = this.state.winner ? "alert-success" : "alert-danger"
      return (

        <div>          
          <div className={`alert ${classColor}`} role="alert">
            {result}
          </div>
           
          <button onClick={this.changeStates} className="btn btn-primary mt-1">Changer le state</button>
          
          {/* <button onClick={ () => this.setState({winner: !this.state.winner})} className="btn btn-primary mt-1">Changer le state</button> */}
          {/* <button onClick={this.changeState} className="btn btn-primary mt-1">Changer le state</button> */}
        
        </div>
        
      );

  }




}

export default Resultat;
 