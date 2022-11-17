import React, { Component } from "react";
import Users from "./Singers";


class Display extends Component {

    render(){

        return(

             <div>
                <h1>Musiciens</h1>
                <Users  nom={"Cedric N'guettia"}  age={"26"} />
                <Users  nom={"Gildas Doudou"}  age={"12"} />
                <Users  nom={"Aimé Atta"}  age={"22"} />
                <Users  nom={"Dodo Atta"}  age={"19"}/>
             </div>
        )
    }
}

export default  Display;