// designed for initial axios testing
import React from 'react';
import WeatherProvider from './WeatherProvider';
import WeatherForm from './WeatherForm';
import WeatherDisplay from './WeatherDisplay';
import Header from './Header';

function Weather(props) {
  return (
    <WeatherProvider>
      {/* <Header /> */}
      <WeatherForm location={props.location} />
      <WeatherDisplay />
    </WeatherProvider>
  );
}

export default Weather;