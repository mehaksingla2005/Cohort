import React from 'react'
import './App.css'
import {useState} from 'react'


//custom hook
function useCounter(){
  const [count,setCount]=useState(0);
  function increaseCount(){
    setCount(count=>count+1)
  }
  return {
    count:count,
    increaseCount:increaseCount
  }
}
const App = () => {
  const {count,increaseCount}=useCounter();
  return (
    <div>
      <button onClick={increaseCount}>Increase {count}</button>
    </div>
  )
}

export default App
