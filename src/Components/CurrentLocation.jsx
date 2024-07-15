import React, { Component } from 'react'
import useMyContext from "../context/useMyContext"
import LiveClock from './LiveClock';
//creating date format 
; const days=[
    "Sun","Mon","Tue","Wed","Thu","Fri","Sat"
  ]
  const Months=["Jan","Feb","Mar","Apr","May","Jun","July","Aug","Sep","Oct","Nov","Dec"]
  const day=days[new Date().getDay()]
  const month=Months[new Date().getMonth()]
  const useDate=new Date().getDate()
  const year= new Date().getFullYear()
//   console.log(day,month,useDate,year)
  const date = `${day} ${useDate}th ${month} ${year} `
//   console.log(date)


 class CurrentLocation extends Component {
    static contextType=useMyContext //use context to set and get Weather Data  
   
    constructor(){
        super();
        //
        this.commaon={
            backgroundImage:"url(https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",

        }
     
       this.ApiKey="85830eb7f358d87e34a419649d5f784b"
    }
    //weather api fetching async function
   async getWeather (){
        try {
            //destructuring states from contex (useMyContext.js)
            const { latitude, longitude, setWeatherData, weatherData,setSearchedWeatherData,setCity } = this.context;// destructuring context from MyContext.jsx folder
            // getting user lattitude from Layout.Jsx and set to context then use the data here 
            const res= await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${this.ApiKey}`)
            const data= await res.json()
            console.log("weather from current",data)
            //Setting fetch data to context state weatherData
            setWeatherData(
                {
                    ...weatherData,
                    city:data.name,
                    country:data.sys.country,
                    weather:data.weather[0],
                    temperature:data.main,
                    humidity:data.main.humidity,
                    visibility:data.visibility,
                    windspeed:data.wind.speed,
                    dataGet:true
                })
                
                setSearchedWeatherData( {
                    city:data.name,
                    country:data.sys.country,
                    weather:data.weather[0],
                    temperature:data.main,
                    humidity:data.main.humidity,
                    visibility:data.visibility,
                    windspeed:data.wind.speed,
                    dataGet:true
                })
                setCity(data.name)
                
                // console.log(this.context.weatherData)
            // console.log(this.state)
        } catch (error) {
            console.log(error.message)
            
        }
    }
    componentDidMount(){
        this.getWeather()
    //    const interval = setInterval(()=> this.getWeather(),10000)
        
    }
  componentWillUnmount(){
         if (this.intervalId) {
             clearInterval(this.intervalId);
           }
     }   
  render() {
    return (
       <React.Fragment>

        <div style={this.commaon}className='m-0 bg-red-600 h-full flex flex-col justify-between'>
            <div className='flex flex-col items-end px-2 text-3xl text-gray-300'>
                <h2>{this.context.weatherData.city}</h2>
                <h2>{this.context.weatherData.country}</h2>
            </div>
            <div className='bg-sky-400/10 flex p-2'>
                <div className='w-[50%] text-2xl text-gray-300'>
                <h2><LiveClock/></h2>
                <h2>{date || "Wed 15th May 2024"}</h2>
                </div>
                <div className='w-[50%] text-5xl text-gray-300 flex justify-end items-end px-4 py-3'>
                    <h2>{Math.floor(this.context.weatherData.temperature.temp-273.15)}°C</h2>
                </div>
            </div>
        </div>
       </React.Fragment>
     
    )
  }
}

export default CurrentLocation