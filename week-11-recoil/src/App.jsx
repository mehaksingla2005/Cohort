// import {React,createContext,useContext,useState} from 'react'
// import './App.css'

// const CountContext=createContext();


// function CountContextProvider({children}){
//   const [count,setCount]=useState(0);

//   return <CountContext.Provider value={{count,setCount}}>
//     {children}
//   </CountContext.Provider>
// }

// function Parent(){
//   return <CountContextProvider>
//     <Increase/>
//     <Decrease/>
//     <Value/>
//   </CountContextProvider>
// }

// function Value(){
//   const {count}=useContext(CountContext)
//   return <div>
//    Count:{count}
//   </div>
// }
// function Increase(){
//   const {count,setCount}=useContext(CountContext)
//   return <div>
//     <button onClick={()=>{setCount(count+1)}}>Increase</button>
// </div>
// }
// function Decrease(){
//   const {count,setCount}=useContext(CountContext)
//   return <div>
//     <button onClick={()=>{setCount(count-1)}}>decrease</button>
// </div>
// }

// const App = () => {
//   return (
//     <div>
//       <Parent/>
//     </div>
//   )
// }
// export default App




import './App.css';
import React from 'react';
import {atom,RecoilRoot, useRecoilCallback, useRecoilValue, useSetRecoilState} from 'recoil'
import { counterAtom } from './store/atoms/counter';


function Parent(){
  return(
    <RecoilRoot>
      <Increase/>
      <Decrease/>
      <Count/>
    </RecoilRoot>
  )
}


function Increase(){
 const setCount=useSetRecoilState(counterAtom);
 return <button onClick={()=>setCount(count=>count+1)}>Increase</button>
}
function Decrease(){
 const setCount=useSetRecoilState(counterAtom);
 return <button onClick={()=>setCount(count=>count-1)}>Decrease</button>
}
function Count(){
  const countvalue=useRecoilValue(counterAtom);
  return <div>{countvalue}</div>

}


const App=()=>{
  return <div>
    <Parent/>
  </div>
}

export default App;