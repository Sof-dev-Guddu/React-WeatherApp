import React, { useContext } from 'react'
import Layout from './Components/Layout'
import "./App.css"
import useMyContext from './context/useMyContext'


const App = () => {
  const {night}=useContext(useMyContext)
  return (
    
    <>
    <div >
    <video className="video-background" autoPlay loop muted>
        {night?<source src="/nightBack.mp4" type="video/mp4" />:<source src="/dayBack.mp4" type="video/mp4" />}
        Your browser does not support the video tag.
      </video>
       <Layout/></div>
   
    </>
  )
}

export default App