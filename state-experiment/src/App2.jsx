import React from 'react'
import {useState,createContext,useContext} from "react"


const BulbContext=createContext();
const App2 = () => {
    const [bulbOn,setBulbOn]=useState(true);
    return (
        <div>
        <BulbContext.Provider value={{bulbOn:bulbOn,setBulbOn:setBulbOn}}>
          <Lightbulb/>
        </BulbContext.Provider>
        </div>
      )
    }
    function Lightbulb(){
      
      return <div>
        <BulbState/>
        <ToggleBulbOn />
      </div>
     
    }
    function BulbState(){
        const {bulbOn}=useContext(BulbContext)
      return <div>
        {bulbOn? "bulb On" :"bulb Off"}
      </div>;
    }
    function ToggleBulbOn(){
        const {setBulbOn}=useContext(BulbContext)
      function toggle(){
        setBulbOn(currentState=>!currentState);
      }
      return <div>
        <button onClick={toggle}>Toggle the bulb</button>
      </div>
    }

export default App2
