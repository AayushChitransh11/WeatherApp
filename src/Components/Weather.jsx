import React, { useState } from 'react';
import axios from 'axios';

function Weather() {
  const [weatherData, setWeatherData] = useState(null);
  const [cityInput, setCityInput] = useState('');

  const weatherAPIUrl = 'http://api.weatherstack.com/current';
  const apiKey = 'ac6cc35e432c520f474c19cbdc6fb6c0';

  const handleCityChange = (event) => {
    setCityInput(event.target.value);
  };

  const handleCitySubmit = (event) => {
    event.preventDefault();

    axios
      .get(weatherAPIUrl, {
        params: {
          access_key: apiKey,
          query: cityInput,
        },
      })
      .then((response) => {
        setWeatherData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching weather data for the specified city:', error);
      });
  };

  return (
    <div>
      <form onSubmit={handleCitySubmit}>
        <input
          type="text"
          value={cityInput}
          onChange={handleCityChange}
          placeholder="Enter a city"
        />
        <button type="submit">Get Weather</button>
      </form>

      {weatherData && weatherData.current ? (
        <div>
          <h2>{weatherData.location.name}, {weatherData.location.region}</h2>
          <p>Temperature: {weatherData.current.temperature}°C</p>
          <p>Description: {weatherData.current.weather_descriptions.join(', ')}</p>
          <img src={weatherData.current.weather_icons[0]} alt="Weather icon" />
        </div>
      ) : (
        <p>Enter a city and click "Get Weather".</p>
      )}
    </div>
  );
}

export default Weather;
