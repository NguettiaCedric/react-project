import React, {useContext} from "react";
import { UserContext , ColorContext} from "./MyContext";

const ContentData = () => {

    const user = useContext(UserContext)
    const color = useContext(ColorContext)


    return (
        <div style={{color: color}}>
            <ul>
                <li> Nom:{user.name} </li>
                <li> Age: {user.age}</li>
            </ul>
        </div>
    );



    /* return (
        
        <UserContext.Consumer>

            {
                user => {
                    // console.log(user)
                    return (

                        <ColorContext.Consumer>
                            {
                                color  => {
                                    // console.log(color)
                                    return (
                                                
                                        <div style={{color: color}}>
                                            <ul>
                                                <li> Nom:{user.name} </li>
                                                <li> Age: {user.age}</li>
                                            </ul>
                                        </div>
                                    )
                                }
                            }
                        </ColorContext.Consumer> 
                    )
                }
            }

        
        </UserContext.Consumer>
    ); */
};

export default ContentData;
