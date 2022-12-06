import React, {useState, useEffect} from 'react'

function FunctionCount() {

  const [count, setCount] = useState(0)  

  /* Cette fonction est declanche au moment du montage, update, demontage */
  useEffect(() => {
    
    setTimeout(() => {
        document.title = `Vous avez clique ${count} fois`
    }, 5000)
  })

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>CLiquer</button>
    </div>
  )
}

export default FunctionCount
