import React, { useState } from 'react';
import WeatherContext from './context';

function WeatherProvider(props) {
  const [weatherData, setWeatherData] = useState(null);

  return (
    <WeatherContext.Provider value={{ weatherData, setWeatherData }}>
      {props.children}
    </WeatherContext.Provider>
  );
}

export default WeatherProvider;