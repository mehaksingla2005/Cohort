import { useState,useMemo } from 'react'
import {useRecoilValue,RecoilRoot, useSetRecoilState} from 'recoil';
import {jobsAtom, messageAtom, networkAtom, notificationsAtom ,totalNotificationSelector}from './atoms.js'
import './App.css'

function App() {
  return (
  <RecoilRoot>
    <Main/>
  </RecoilRoot>
  )
}
function Main(){
  const networkNotificationCount=useRecoilValue(networkAtom);
  const jobsAtomCount=useRecoilValue(jobsAtom);
  const messageAtomCount=useRecoilValue(messageAtom);
  //const [messageAtomCount,setMessageAtomCount]=useRecoilState(messageAtom);
  const notificationAtomCount=useRecoilValue(notificationsAtom);
  const totalNotificationCount=useRecoilValue(totalNotificationSelector);

  // const totalNotificationCount=useMemo(()=>{
  //   return networkNotificationCount+jobsAtomCount+messageAtomCount+notificationAtomCount;
  // },[networkNotificationCount,jobsAtomCount,messageAtomCount,notificationAtomCount])

return(
  <>
  <button>Home</button>
  <button>My Network({ networkNotificationCount>=100?"99+": networkNotificationCount})</button>
  <button>Notifications({notificationAtomCount})</button>
  <button>jobs({jobsAtomCount})</button>
  <button>Messaging({messageAtomCount})</button>
  <button>Me({totalNotificationCount})</button>
  {/* <button onClick={()=>{
    setMessageAtomCount(c=>c+1)
  }}>Me</button> */}
  <ButtonUpdater/>
  </>
)
}
function ButtonUpdater(){
  const setMessageAtomCount=useSetRecoilState(messageAtom);
  return  <button onClick={()=>{
    setMessageAtomCount(c=>c+1)
  }}>Me</button>
}
export default App
