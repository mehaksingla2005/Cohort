import React from 'react'
import { useEffect,useState } from 'react'

const useEf = () => {
  const [count,setCount]=useState(1);

  function increaseCount(){
    setCount(function(currentValue){
      console.log("Increase Count Called" + currentValue);
      return currentValue+1;
    });
  }

  function increaseCount(){
    setCount( currentVal=>currentVal+1);
  }

  useEffect(function(){
    console.log("above setInterval.");
    setInterval(increaseCount,1000);
  },[])


  return (
    <div>
      {count}
    </div>
  )
}

export default useEf
