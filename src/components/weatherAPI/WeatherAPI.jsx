// making Axios call
import React, { createContext, useState } from 'react';
import axios from 'axios';
import WeatherContext from './context';

const WeatherContext = createContext();

// construct object to pass in request to weather API
const WeatherProvider = ({ children }) => {
  const options = {
    method: 'GET',
    url: 'https://weatherapi-com.p.rapidapi.com/current.json',
    params: { q: '<REQUIRED>' },
    headers: {
      'X-RapidAPI-Key': 'ea5f0cd589msh55ae6aac61ebb58p184b74jsn097403a586f5',
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
    },
  };

  const [temperature, setTemperature] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const getWeatherData = async (geoLocation) => {
    setLoading(true);

    options.params.q = geoLocation;
    try {
      // using request instead of get to make call because of sending an object. GET method in object
      const response = await axios.request(options);
      setTemperature(response.data.current.temp_f);
      console.log(temperature);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <WeatherContext.Provider
      value={{ temperature, error, loading, getWeatherData }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export { WeatherContext, WeatherProvider };
