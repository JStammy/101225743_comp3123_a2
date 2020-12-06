import React,{useState, useEffect} from "react";
import '../App.css'

function WeatherList() {
  const kelvin = 273.15;
  const [feels_like,setFeelsLike] = useState('');
  const [mainTemp,setMainTemp] = useState('');
  const [description,setDescription] = useState('');
  const [main,setMain] = useState('');
  const [iconID,setIconID] = useState('');
  useEffect(()=> {
    fetch('http://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=3662e762cbb94bff0706f7246d6388d8')
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      setFeelsLike(Math.trunc(data.main.feels_like - kelvin));
      setMainTemp(Math.trunc(data.main.temp - kelvin));
      setDescription(data.weather[0].description);
      setMain(data.weather[0].main);
      setIconID(data.weather[0].icon);
    })
  },[])
  return (
    <>
    <h1>Current Temperature : {mainTemp}°</h1>
    <h1>Feels like: {feels_like}°</h1>
    <h1>Weather Type: {main}</h1>
    <h1>Description : {description}</h1>
    <img src={"http://openweathermap.org/img/wn/" + iconID + "@2x.png"}/>
    </>
  )
}
export default WeatherList;