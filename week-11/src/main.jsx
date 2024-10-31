// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Hooks from './Hooks.jsx'
import DataFetcher from './Fetching.jsx'
import App2 from './App2.jsx'
import App3 from './App3.jsx'

import LearnuseRef from './learnuseRef.jsx'
import LearnuseDebounce from './LearnuseDebounce.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <>
    {/* <App /> */}
    {/* <App2/> */}
    {/* <App3/> */}
    {/* <LearnuseRef/> */}
    <LearnuseDebounce/>
    {/* <Hooks/>

    <DataFetcher/> */}
    </>
  // </StrictMode>,
)
