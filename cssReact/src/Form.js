import React, { Component } from "react";
import MyHeaderOne from "./MyHeaderOne";
import "./Mycss.css";
import styles from "./MyCssModule.css";
// import styled from "styled-components";

// const titreRed = {
//     color:'red' ,
//     fontSize: '50px'
// }

/* const Title = styled.h1`
    color: red;
    font-size : 80px

` */

class Form extends Component {
  render() {
    const choseColor = this.props.heard ? "blue" : "red";

    return (
      <div>
        {/* <h1 className="blue">Commentaire</h1> */}
        {/* <h1 className="blue">Commentaire</h1> */}
        {/* <h1 style={titreRed}>Commentaire</h1> */}
        {/* <h1 style={{ color:'red' , fontSize: '50px'}}>Commentaire</h1> */}
        {/* <p className={ choseColor + ' bigFont'}>Je suis blue ou rouge </p> */}

        <MyHeaderOne />

        {/* <p className={`${choseColor} bigFont` }>Je suis blue ou rouge </p> */}
        <h1 className={styles.green}> Commentaire 1</h1>

        <p>Je suis blue ou rouge </p>

        <button>Valider</button>
      </div>
    );
  }
}

export default Form;
