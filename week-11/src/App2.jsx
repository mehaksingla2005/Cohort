import React from 'react'
import './App.css'
import useFetch from './hook.jsx/useFetch'
import { useState } from 'react'

const App2 = () => {
const [currentPost,setCurrentPost]=useState(1);
const {post,loading}=useFetch("https://jsonplaceholder.typicode.com/todos/"+currentPost);
    if(loading){
        return <div>
            loading...
        </div>
    }
  return (
    <div>
    <button onClick={()=>setCurrentPost(1)}>1</button>
    <button onClick={()=>setCurrentPost(2)}>2</button>
    <button onClick={()=>setCurrentPost(3)}>3</button>
    {JSON.stringify(post)}
    </div>
  )
}

export default App2
