import React, { useContext, useState } from 'react'
import CurrentLocation from './CurrentLocation'
import Forcast from './Forcast'
import useMyContext from '../context/useMyContext'
import Loader from './Loader'
const Layout = () => {
 const data =useContext(useMyContext)
 const {setLatitude,setLongitude}=data
 const [permission,setPermission]=useState(false)
  const getUserPermissionForLocatio=()=>{
     const showPosition=(position)=>{
        const long= position.coords.longitude
        const lat=position.coords.latitude
        console.log("logitude :",long)
        console.log("latitude :",lat)
        setLongitude(long)
        setLatitude(lat)
       setTimeout(()=>{setPermission(true)},3000)
       
     }
     function showError(error){
      console.log(error)
      setPermission(false)
     }
     if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(showPosition,showError,{enableHighAccuracy: true,})
     }else{
      console.log("browser not support geolocation")
      setPermission(false)
     }

  }
  useState(()=>{
    getUserPermissionForLocatio()
  },[])
 
  return (
    <div  className="  h-screen flex justify-center items-center ">
    <div className='bg-gray-900/50 sm:w-[70%] sm:h-[80%]   md:w-[80%] lg:w-[60%] md:h-[80%] md:flex items-center p-2  rounded' >
       {permission? <> <div className='h-full md:w-[56%]  border-red-500 '><CurrentLocation/></div>
        <div className='bg-gray-900/60 h-full md:w-[44%]  '><Forcast/></div> </>:<Loader/>}
    </div>
    </div>
  )
}

export default Layout