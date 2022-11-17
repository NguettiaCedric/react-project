import React, { Component } from "react";

/* ------------------------------------------------------------------------------ */
// Destructuring cas d un composant de type fonction

/* const Users = (props) => {
             ({age, nom})
             
    const { age, nom} = props;
    console.log(nom, age)
    
    return(

        <div>
            <p>Chanteur: </p>
        </div>
    )
}
 */

/* ------------------------------------------------------------------------------ */

class Users extends Component {


    render(){

        // console.log(this.props);

        const {nom, age } = this.props
        // console.log(nom);
        return (
            <div>
                <p>Chanteur : {nom} {age} ans</p>
            </div>
        )
    }
}


export default Users;