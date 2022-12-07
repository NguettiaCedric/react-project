import React, {useState, useEffect} from 'react'

function FunctionCount() {

  const [count, setCount] = useState(0)  

  const [name, setName] = useState('')

  /* Cette fonction est declanche au moment du montage, update, demontage */
  useEffect(() => {
    console.log('mise a jour du titre via useEffect');
    
    setTimeout(() => {
        document.title = `Vous avez clique ${count} fois`
    }, 5000)
  }, [])

  return (
    <div>
        <h1>{count}</h1>
        <input type='text' value={name} onChange={e => setName(e.target.value)} />
        <button onClick={() => setCount(count + 1)}>CLiquer</button>
    </div>
  )
}

export default FunctionCount
