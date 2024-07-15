import React, { useEffect, useState } from 'react'
import useMyContext from './useMyContext'
import images from "../assets/rain.jpg"


const MyContext = (props) => {
 const initialdata={
    city:"Suku Palace",
    country:"IN",
    weather:"Sunny",
    temperature:"30°C",
    humidity:"23%",
    visibility:"3000 mi",
    windspeed:"3 Km/hr",
    dataGet:false
  }
   const[backImage,setBackimage]= useState(images)
   const [test,setTest] = useState ("harami")
   const [latitude,setLatitude]=useState("")
   const [longitude,setLongitude]=useState("")
   const [weatherData,setWeatherData]=useState(initialdata)
  //  console.log("log from context",weatherData.weather)
   const weatherType=weatherData.weather.main
   const [night,setNight]=useState(false) 
   const [searchedWeatherData,setSearchedWeatherData]= useState(initialdata)
   const [city,setCity] = useState("")
  //  if(weatherData?.weather.icon === "01n"||weatherData?.weather.icon === "02n"||weatherData?.weather.icon === "03n"||weatherData?.weather.icon === "04n"||weatherData?.weather.icon === "09n"||weatherData?.weather.icon === "10n"||weatherData?.weather.icon === "11n"||weatherData?.weather.icon === "13n"||weatherData?.weather.icon === "50n"){
  //   setNight(true)
  //  }else{
  //   setNight(false)
  //  }
 useEffect(() => {
  switch (weatherData?.weather.icon) {
      case "01n":;
      case "02n":
      case "03n":
      case "04n":
      case "09n":
      case "10n":
      case "11n":
      case "13n":
      case "50n":
      setNight(true)
      break;
    default:
      setNight(false)
      break;
  }
 }, [weatherData])
  
  //  console.log("first",night)


  //  console.log("log from context weather type :",weatherType)
  return (
   <useMyContext.Provider value={{backImage,setBackimage,test,latitude,setLatitude,longitude,setLongitude,weatherData,setWeatherData,night,weatherType,city,setCity,searchedWeatherData,setSearchedWeatherData}}>
    {props.children}
   </useMyContext.Provider>
  )
}

export default MyContext