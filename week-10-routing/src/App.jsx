import { useState } from 'react'
import './App.css'
import {BrowserRouter,Routes,Route,Outlet} from "react-router-dom"
import Usereferenec from './Usereferenec'
import Clock from './clock'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/neet/class-11-program" element={<Class11Program/>}/>
          <Route path="/neet/class-12-program" element={<Class12Program/>}/>
          <Route path="/login" element={<Usereferenec/>}/>
          <Route path="/clk" element={<Clock/>}/>
          <Route path="/l" element={<LandingPage/>}/>
        </Route>
      </Routes>
     </BrowserRouter>

    </>
  )
}
function Layout(){
  return <div style={{height:"100vh"}}>
    header
    <div style={{height:"90vh"}}><Outlet/></div>
    
    footer
  </div>
}
function Class11Program(){
  return <div>
    class-11-program
  </div>
}
function Class12Program(){
  return <div>
    class-12-program
  </div>
}
function LandingPage(){
  return <div>
    Landing page
  </div>
}

export default App
