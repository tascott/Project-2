import React, { useContext } from 'react';
import WeatherContext from './context';

function WeatherDisplay() {
  const { weatherData } = useContext(WeatherContext);

  if (!weatherData) {
    // return <div>No weather data yet.</div>;
  } else {
    return <div className='weather'>{weatherData}°C</div>;
  }

}

export default WeatherDisplay;