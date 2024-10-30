import React from 'react'
import './App.css'
import { useState ,createContext} from 'react'


const App = () => {
  return (
    <div>
      <Lightbulb/>
    </div>
  )
}
function Lightbulb(){
  const [bulbOn,setBulbOn]=useState(true);
  return <div>
    <BulbState bulbOn={bulbOn}/>
    <ToggleBulbOn setBulbOn={setBulbOn}/>
  </div>
 
}
function BulbState({bulbOn}){
  return <div>
    {bulbOn? "bulb On" :"bulb Off"}
  </div>;
}
function ToggleBulbOn({setBulbOn}){
  function toggle(){
    setBulbOn(currentState=>!currentState);
  }
  return <div>
    <button onClick={toggle}>Toggle the bulb</button>
  </div>
}


export default App
