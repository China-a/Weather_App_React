import React, {useState} from "react";
import Axios from "axios";

function App() {

  let [data, setData] = useState({})
  let [zipCode, setZipCode] = useState("")
  let url = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&units=imperial&appid=a3e9dd5916aa1bd135d4898757a568f6`
 
  let searchZipCode = (e) => {
    if (e.key === "Enter" ) {
    Axios.get(url).then((response) => {
      setData(response.data)
      // console.log(response.data)
    })
    // setZipCode("")
  }
  }
  // let [icon,setIcon] = useState()
  // let currentDate = new Date()
  // let date = `${currentDate.getMonth()+1}/${currentDate.getDate()}/${currentDate.getFullYear()} ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`
  const currDate = new Date().toLocaleDateString();
  const currTime = new Date().toLocaleTimeString();
 
  return (
    <div className="weather">
      <div className="WeatherContainer">
      <h1>React Weather App </h1>
      <div>
        <input 
        value={zipCode}
        onChange={e => setZipCode(e.target.value)}
        onKeyPress={searchZipCode}
        placeholder="Enter Zip Code"
        type="text"/>
        {/* <button type="submit"
        onClick={searchZipCode}
        >Enter</button> */}
      </div>
      <div className="CurrentTime">
          <h3>{currDate} <br/>
          {currTime}</h3>
        </div>
        <div className="Top">
          <div>
          <h2> {data.name}</h2>
          </div>
        <div className="WeatherConditions">
        <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`} alt=""></img>
          {data.weather ? <h3>{data.weather[0].main}</h3> :null}
        </div>
        <div className="Temp">
          {data.main ? <h3>{data.main.temp.toFixed()} &deg;F </h3> :null}
        </div>
        </div>
        <div className="Bottom">
        <div className="HighLow">
          {data.main ? <h3>{data.main.temp_max.toFixed()} &deg;F / {data.main.temp_min.toFixed()} &deg;F </h3> :null}
          <h4>High and Low </h4>
        </div>
        <div className="FeelsLike">
          {data.main ? <h3>{data.main.feels_like.toFixed()} &deg;F </h3> :null}
          <h4>Feels Like</h4>
        </div>
        <div className="Humidity">
          {data.main ? <h3>{data.main.humidity.toFixed()} % </h3> :null}
          <h4>Humidity</h4>
        </div>
        </div>
      
      </div>
      
    </div>
  )
}

export default App



