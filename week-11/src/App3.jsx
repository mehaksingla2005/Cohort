import React from 'react'
import { useState } from 'react'
import { usePrev } from './hook.jsx/usePrev'

const App3 = () => {
    const [state,setState]=useState(0);
    const prev=usePrev(state);
  return (
    <>
    <p>{state}</p>
    <button onClick={()=>{
        setState((curr)=>curr+1);
    }}>Click Me</button>
    <p> the previous value was {prev}</p>
      
    </>
  )
}

export default App3
