import React, { useState , useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Weather from './components/Weather';
import Axios from 'axios';

function App() {
  const APP_KEY="631fe25626a9ef3c36b52dc6bae915fe";
  const [weather , setWeather] = useState([]);
  const [search , setSearch] = useState("Sangli");

  const getWeather =async () =>
  {
    const result = await Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${APP_KEY}`);
    console.log(result.data.main);
    setWeather(result.data.main);
  }
  useEffect( async () =>
    {
      getWeather();
    },[])
    const onInputChange = (e) =>
    {
      const zero = setSearch(e.target.value); 
      console.log(zero);
    }
    const onSearchClick = () =>
    {
      getWeather();
    }
  return (
    <div className="App">
      <Form search={search} onInputChange={onInputChange} onSearchClick={onSearchClick}></Form>
      <Weather></Weather>
    </div>
  );
}

export default App;
