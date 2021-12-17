import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { weatherAction } from '../store/weatherReducer';

import WeatherDetails from './WeatherDetails';

const Weather = () => {
  const [city, setCity] = useState();
  const dispatch = useDispatch();

  const formHandler = async (e) => {
    e.preventDefault();

    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=610b6ecb2329d3e4d2cdf7b2d9bf198a`
    );

    const data = response.data;

    dispatch(weatherAction.ADD_WEATHER(data));
  };

  return (
    <WeatherContainer>
      <h2>Weather App</h2>

      <form onSubmit={formHandler}>
        <input
          type='text'
          placeholder='Enter City Name'
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button>Search</button>
      </form>

      <WeatherDetails />
    </WeatherContainer>
  );
};

export default Weather;

const WeatherContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;

  > form > input {
    padding: 10px;
    margin-top: 20px;
  }
  > form > button {
    margin-left: 10px;
    padding: 10px;
    cursor: pointer;
  }
`;
