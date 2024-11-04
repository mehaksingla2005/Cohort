import React from 'react'
import {useState,useEffect} from 'react'
import { useSetRecoilState } from 'recoil'
import { counterAtom } from './store/atoms/counter'

const App2 = () => {
  return (
    <div>
      <Button/>
      <Counter/>
      <Iseven/>
    </div>
  )
}

function Button(){
    const setCount=useSetRecoilState(counterAtom);
    
    function increase(){
        setCount(c=>c+2);
    }

    function decrease(){
        setCount(c=>c-1);
    }
    
    return <div>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
    </div>
}

export default App2
