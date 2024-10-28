import React, { useEffect, useState } from 'react'

const App = () => {
  let [counterVisible,setCounterVisible]=useState(true);
  useEffect(function(){
    setInterval(function(){
      setCounterVisible(c=>!c);
    },5000)
  },[]);

  return (
    <div>
      <b>Hi There!</b>
      {/* conditional rendering */}
      {counterVisible && <Counter></Counter>}
    </div>
  )
}

function Counter(){
  const[count,setCount]=useState(0);
  console.log("counter");
  useEffect(function(){
    console.log("mounted")
  let clock=setInterval(function(){
      console.log("from inside interval")
      setCount(count=>count+1);
    },1000);
    return function(){
      console.log("unmount");
      clearInterval(clock);
    } 
    
  },[]);
  function increaseCount(){
    setCount(count+1);
  }
  function decreaseCount(){
    setCount(count-1);
  }
  function resetCount(){
    setCount(0);
  }
  return <div>
    <h1>{count}</h1>
    <button onClick={increaseCount}>increase Count</button>
    <button onClick={decreaseCount}>decrease Count</button>
    <button onClick={resetCount}>RESET Count</button>
  </div>
}


export default App
