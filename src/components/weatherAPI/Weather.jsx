import React from 'react';
import WeatherProvider from './WeatherProvider';
import WeatherForm from './WeatherForm';
import WeatherDisplay from './WeatherDisplay';
import Header from './Header';

function Weather() {
  return (
    <WeatherProvider>
      <Header />
      <WeatherForm />
      <WeatherDisplay />
    </WeatherProvider>
  );
}

export default Weather;