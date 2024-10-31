





// import React from 'react'
// import { useState,useEffect,useRef } from 'react'

// const LearnuseRef = () => {
//     const [name,setName]=useState('');
//     const renderCount=useRef(1);

//     useEffect(()=>{
//         renderCount.current=renderCount.current+1;
//     })
//   return (
//     <>
//       <input value={name} onChange={(e)=>{
//         setName(e.target.value)
//       }}></input>
//       <div>My name is {name}</div>
//       <div>I rendered {renderCount.current} times</div>
//     </>
//   )
// }

// export default LearnuseRef





// import React from 'react'
// import { useState,useEffect,useRef } from 'react'

// const LearnuseRef = () => {
//     const [name,setName]=useState('');
//     const inputRef=useRef();
//     function focus(){
//         inputRef.current.focus();
//     }
//   return (
//     <div>
//               <input ref={inputRef}value={name} onChange={(e)=>{
//          setName(e.target.value)
//       }}></input>
//      <div>My name is {name}</div>
//      <button onClick={focus}>focus</button>
      
//     </div>
//   )
// }

// export default LearnuseRef





//to store the previous value of a state
import React from 'react'
import { useState,useEffect,useRef } from 'react'

const LearnuseRef = () => {
    const [name,setName]=useState('');
    const prevName=useRef();
   useEffect(()=>{
        prevName.current=name
   },[name])
  return (
    <div>
              <input value={name} onChange={(e)=>{
         setName(e.target.value)
      }}></input>
     <div>My name is {name} and it used to be {prevName.current}</div>

      
    </div>
  )
}

export default LearnuseRef
