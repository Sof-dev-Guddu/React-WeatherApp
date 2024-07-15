import React from 'react'
import loaderImg from "../assets/WeatherIcons.gif"

const Loader = () => {
  return (
    <>
    
        <div className='h-full md:w-[56%]  border-red-500 '> <img src={loaderImg}   /> <h3 >
              Detecting your location
            </h3> </div>
        <div className='bg-gray-700/60 h-full md:w-[44%] text-center align-center '> 
            <h3 className='text-orange-500'>
              Your current location wil be displayed on the App <br></br> & used
              for calculating Real time weather.
            </h3></div>
    
    {/* .................................
    <div className='bg-gray-700'>
    <img src={loaderImg}   /> 
            <h3 >
              Detecting your location
            </h3>
            <h3 className='text-orange-500'>
              Your current location wil be displayed on the App <br></br> & used
              for calculating Real time weather.
            </h3>
    </div></> */}
    </>
  )
}

export default Loader