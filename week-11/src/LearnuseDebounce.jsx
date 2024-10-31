import React from 'react'
import { useRef } from 'react'


function useDebounce(originalFn){
    const currentClock=useRef()
    const fn=()=>{
        clearTimeout(currentClock.current);
        currentClock.current=setTimeout(originalFn,30)
    }
}
const LearnuseDebounce = () => {
   
    function sendDataToBackend(){
        fetch("api.amazon.com/search/")
    }
    const debouncedFn=useDebounce(sendDataToBackend)
  return (
    <div>
      <input type="text" onChange={debouncedFn}/>
    </div>
  )
}

export default LearnuseDebounce
