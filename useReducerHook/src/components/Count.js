import React, {useReducer} from 'react'


const initialState = 0;

/* le parametre action c est le l element qui donnera l instruction au reducer pour obtenir un nouvel etat*/

const reducer = (state, action) => {
    switch(action) {
        case 'increment' : 
            return state + 1
        case 'decrement' : 
            return state - 1

        case 'renitialiser' : 
            return initialState

        default : 
            return state
    }
}



function Count() {

    /* la method dispatch que j'ai retourner de mon reducer qui va nous permettre d acceder a action */

    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <h1>{count}</h1>
            <button className='btn btn-success m-3' onClick={() => dispatch('increment')}>+</button>
            <button  className='btn btn-danger m-3' onClick={() => dispatch('decrement')}>-</button>
            <button  className='btn btn-primary m-3' onClick={() => dispatch('renitialiser')}>init</button>
        </div>
    )
}

export default Count;
