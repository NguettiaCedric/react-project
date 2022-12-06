import React, { useState} from 'react';


const FunctionState = () => {

   const [counter, setCounter ] = useState(0)/* Est une fonction */
  
    /* const addOne = () => {
        // setCounter(counter + 1)
        setCounter(prevcounter => prevcounter + 1)
    } */

    return (
    <div>
        <p>Function State :{counter} </p>
        <button onClick={() => setCounter(prevcounter => prevcounter + 1)}>State dans Functiion</button>
    </div>
  )
}

export default FunctionState
