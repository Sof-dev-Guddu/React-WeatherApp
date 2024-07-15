import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import MyContext from "./context/MyContext.jsx"
// import Testtt from "./Components/testtt.jsx"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyContext>
    <App />
   {/* <TestPermission/> */}
  {/* <Testtt/> */}
    </MyContext>
  </React.StrictMode>,
)
