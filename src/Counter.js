import React from 'react'
import react,{useState} from 'react'
import './counter.css'
function Counter() {
  const [count, setCount] = useState(1)
  const [showCount, setShowCount] = useState(false)
  return (
    <div className='main-div'>
        <input type='button' value={showCount ? 'Hide The Counter': 'Show Counter'} onClick={()=>setShowCount(!showCount)}></input>
   {
    showCount ?
     <div>
        
        <h1>Counter Shown open</h1>
        <h2>Counter is : {count} </h2>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <button onClick={()=>setCount(count-1)}>Decrement</button>
       
        </div>
        :null
  }
    
    </div>
    
  )
}

export default Counter