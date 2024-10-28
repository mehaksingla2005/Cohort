import React from 'react'
import { useState ,useEffect} from 'react'

const App = () => {
  const [currentTab,setCurrentTab]=useState(1);
  const [tabData,setTabData]=useState({});
  const [loading,setLoading]=useState(true);


  useEffect(function(){
    setLoading(true);
    console.log("send request to backend to get data for tab" + currentTab)
    fetch('https://jsonplaceholder.typicode.com/todos/'+currentTab)
    .then(async res => {
        const json = await res.json();
        setTabData(json);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch(() => {
        setLoading(false); // Ensure to set loading false even if there is an error
      });
        

  },[currentTab])

 
  return (
    <div>
      <button onClick={function(){
        setCurrentTab(1)} } style={{color:currentTab==1?"red":"black"}}>TODO #1</button>
      <button onClick={function(){
        setCurrentTab(2)} } style={{color:currentTab==2?"red":"black"}}>TODO #2</button>
      <button onClick={function(){
        setCurrentTab(3)} } style={{color:currentTab==3?"red":"black"}}>TODO #3</button>
      <button onClick={function(){
        setCurrentTab(4)} } style={{color:currentTab==4?"red":"black"}}>TODO #4</button>
        {loading && console.log("loading")}
        {loading?"Loading..":tabData.title}
    </div>
  )
}

export default App
