import React, { useContext, useEffect } from 'react'
import useMyContext from '../context/useMyContext'

function SearchByCity() {
  console.log("search city start")
    const{city ,searchedWeatherData,setSearchedWeatherData}=useContext(useMyContext)
    console.log(searchedWeatherData)
    const aPIkey="4d0a96bacd791c1d91f0abbd7f47d8a0"
    async function getWeatherByCity(cityName){
      console.log(cityName)
        try {
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${aPIkey}`)
            const data= await res.json()
           setSearchedWeatherData({...searchedWeatherData,
            city:data.name,
            country:data.sys.country,
            weather:data.weather[0],
            temperature:data.main,
            humidity:data.main.humidity,
            visibility:data.visibility,
            windspeed:data.wind.speed
           })
          console.log("from search weather details",data)
    } catch (error) {
            console.log(error.message)
        }
    }
    useEffect(()=>{
      console.log(city)
        getWeatherByCity(city)
    },[city])
  return (
    <>
            <h2 className='text-xl text-gray-300 font-bold'>{searchedWeatherData.city},{searchedWeatherData.country}</h2>
            <h3 className='text-xl text-yellow-300 font-bold'>{`(${searchedWeatherData.weather.description})`}</h3>
            <hr className="w-4/6 mx-auto border-2 border-gray-400/40 my-4" />
            <h2 className='text-xl text-gray-300 font-bold text-start ml-[22%]'>Tempereture<span className='text-end ml-3'>{Math.floor(searchedWeatherData.temperature.temp-273.15)}°C</span></h2>
            <hr className="w-4/6 mx-auto border-2 border-gray-400/40 my-4" />
            <h2 className='text-xl text-gray-300 font-bold text-start ml-[22%]'>Humidity<span className='text-end ml-3'>{searchedWeatherData.humidity}% </span></h2>
            <hr className="w-4/6 mx-auto border-2 border-gray-400/40 my-4" />
            <h2 className='text-xl text-gray-300 font-bold text-start ml-[22%]'>Visibilty <span className='text-end ml-3'>{searchedWeatherData.visibility} mi</span></h2>
            <hr className="w-4/6 mx-auto border-2 border-gray-400/40 my-4" />
            <h2 className='text-xl text-gray-300 font-bold text-start ml-[22%]'>Windspeed <span className='text-end ml-3'>{searchedWeatherData.windspeed} km/hr</span></h2>
    </>
  )
}

export default SearchByCity