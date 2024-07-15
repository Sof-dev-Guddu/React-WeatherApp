import React, { useContext, useEffect, useState } from 'react'
import { WeatherSvg } from "weather-icons-animated";
import { IoIosSearch } from "react-icons/io";
import useMyContext from "../context/useMyContext"
import SearchByCity from './SearchByCity';

const Forcast = () => {
  const {weatherData , night ,setCity}=useContext(useMyContext)
  const[ weatherIconType,setWeatherIconType]=useState("sunny")
  const [weatherType,setWeatherType]=useState("Sunny")
  const [searchCity,setSearchCity]=useState("")
  function handleCity(){
      setCity(searchCity)
      setSearchCity("")
  }
  
  
  useEffect(()=>{
    switch (weatherData.weather.description) {
      case "clear sky":
        if(night){
          setWeatherIconType("clear-night")
          setWeatherType("Clear Sky")
        }else{
          setWeatherIconType("sunny")
          setWeatherType("Sunny")
        }
        break;
      case "few clouds":
            setWeatherIconType("partlycloudy")
            setWeatherType("PartlyCloudy")
            break;
      case "scattered clouds":
            setWeatherIconType("partlycloudy")
            setWeatherType("Scatterd Clouds")
            break
      case "broken clouds":
            setWeatherIconType("windy")
            setWeatherType("Broken Clouds")
            break
       case "shower rain":
             setWeatherIconType("pouring")
             setWeatherType("Shower Rain")
             break
       case "rain":
             setWeatherIconType("rainy")
             setWeatherType("Rainy")
             break
       case "thunderstrom":
             setWeatherIconType("lightning-rainy")
             setWeatherType("Thunderstrom")
             break
       case "snow":
             setWeatherIconType("snowy")
             setWeatherType("Snowy")
             break
        case "mist":
              setWeatherIconType("fog")
              setWeatherType("Fog")
              break
        case "haze":
             setWeatherIconType("partlycloudy")
             setWeatherType("Haze")
             break     
        default:
              setWeatherIconType("sunny")
              setWeatherType("Clear Sky")
              break
    }
  },[ weatherData,night])

  return (
    <div>
        <div className='flex flex-col  items-center p-3 '>
                 <WeatherSvg state={weatherIconType} night={night}  width={100} height={100} />
                 <h2 className='text-2xl text-gray-300 font-bold '>{weatherType}</h2>
                 <hr className="w-4/5 mx-auto border-2 border-gray-400/40 my-4" />
        </div>
        <div className='flex justify-center mt-[-10px] '>
                 <input onChange={(e)=>setSearchCity(e.target.value)} value={searchCity} type="text" placeholder='Search City...' className=' text-gray-200 outline-none px-1 bg-gray-500/50 placeholder:text-gray-300/70'/> 
               <button onClick={handleCity}><IoIosSearch  className='text-3xl  bg-gray-500/50 text-gray-300 '/></button>  
        </div>
        <hr className="w-4/6 mx-auto border-2 border-gray-400/40 my-4" />
        <div className='divide-y-* p-2 text-center'>
            {/* <h2 className='text-xl text-gray-300 font-bold'>Delhi,In</h2>
            <hr className="w-4/6 mx-auto border-2 border-gray-400/40 my-4" />
            <h2 className='text-xl text-gray-300 font-bold text-start ml-[22%]'>Tempreture <span className='text-end ml-3'>32*c {"(Sunny)"}</span></h2>
            <hr className="w-4/6 mx-auto border-2 border-gray-400/40 my-4" />
            <h2 className='text-xl text-gray-300 font-bold text-start ml-[22%]'>Humidity <span className='text-end ml-3'>23%</span></h2>
            <hr className="w-4/6 mx-auto border-2 border-gray-400/40 my-4" />
            <h2 className='text-xl text-gray-300 font-bold text-start ml-[22%]'>Visibilty <span className='text-end ml-3'>3000 mi</span></h2>
            <hr className="w-4/6 mx-auto border-2 border-gray-400/40 my-4" />
            <h2 className='text-xl text-gray-300 font-bold text-start ml-[22%]'>Windspeed <span className='text-end ml-3'>3 Km/Hr</span></h2> */}
     {weatherData.dataGet?<SearchByCity />:<><h1>data fetching....</h1></>}
        </div>
    </div>
  )
}

export default Forcast