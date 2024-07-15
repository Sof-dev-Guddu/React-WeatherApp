import React, { useEffect, useState } from 'react'

const LiveClock = () => {
    const [time,setTime]= useState(new Date().toLocaleTimeString())
    useEffect(()=>{
        
        const interval=  setInterval(()=>{
            setTime(new Date().toLocaleTimeString())
        },1000)
       return ()=>clearInterval(interval)
    },[])
  return (<>
  {time}
  </>
    
  )
}

export default LiveClock