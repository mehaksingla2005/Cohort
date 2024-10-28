import React from 'react'
import { useState ,useRef} from 'react'

const Clock = () => {
  const [currentCount,setCurrentCount]=useState(0);
  const timer=useRef();
  return (
    <div>
      {currentCount}
      <br/>
      <button onClick={startClock}>Start</button>
      <button onClick={stopClock}>Stop</button>
    </div>
  )
  
  function startClock(){
    let value=setInterval(function(){
        setCurrentCount(c=>c+1);
    },1000);
    timer.current=value;

}
function stopClock(){
    console.log(timer)
    clearInterval(timer)
}

}

export default Clock
