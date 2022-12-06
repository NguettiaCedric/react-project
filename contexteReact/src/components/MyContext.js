import React from "react";

const user = {
    name : 'bart',
    age : 26,
}

const MyContext = React.createContext(user);

export  { MyContext }