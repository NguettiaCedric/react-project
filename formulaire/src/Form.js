import React, { Component } from "react";
import Car from "./Car";


class Form extends Component {

    state = {
        username : " ",
        color:"",
        colors : [ " ", "Blue", "orange", "Vert", "Rouge"],
        comment : ""
    }

    handlePseudo = e => {

        // console.log(e.target.value);

        this.setState({
            username : e.target.value,
        })
    }

    handleColor = event => {
        this.setState({
            color : event.target.value,
        })
        // console.log(event.target.value);
    }

    handleComments = event => {
        this.setState({
            comment: event.target.value
        })
        // console.log(event.target.value);
    }

    handleSubmitForm = (e) => {
        e.preventDefault();
        console.log(`username: ${this.state.username} couleur: ${this.state.color} commentaire: ${this.state.comment}`)
    }


    render(){

        return(
            <div>
                <Car  />
                <h1>Commentaire</h1>
                
                <form onSubmit={this.handleSubmitForm}>
                    <label>Pseudo</label>

                    <div>
                        <input type="text" value={this.state.username} onChange={this.handlePseudo} />
                    </div>

                    <div>
                        <label>Pseudo</label>

                        {/* <select>
                            <option value="html">Html</option>
                            <option value="css">Css</option>
                            <option value="reactjs">Reactjs</option>
                            <option value="php">Php</option>
                        </select> */}
                        

                        <select value={this.state.color} onChange={this.handleColor}>
                            {
                                this.state.colors.map( (color , index) => {
                                    return  <option key={index} value={color}>{color}</option>                           
                                })

                                // this.state.colors.forEach(color => {
                                //     console.log(color)
                                //     return  <option>{color}</option>
                                // })
                                
                            }
                        </select>
                    </div>

                    <div>

                        <label>Commentaire</label>                   
                        <textarea value={this.state.comment} onChange={this.handleComments}></textarea>

                    </div>

                   
                   <button type="">Enregistrer</button>
                </form>


            </div>
        )
    }

}

export default Form;