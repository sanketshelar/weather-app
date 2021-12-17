import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const WeatherDetails = () => {
  const [info, setInfo] = useState(null);
  const data = useSelector((state) => state.weather.weatherData);

  useEffect(() => {
    setInfo(data);
  }, [data]);
  return (
    <DetailsContainer>
      {!info ? (
        <h1>No Data Found</h1>
      ) : (
        <div>
          <h4>{(info.main.temp - 273.15).toFixed(1)}&deg; C</h4>
          <h5>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z'
                clipRule='evenodd'
              />
            </svg>
            {info.name}
          </h5>
          <InfoContainer>
            <span>
              {(info.main.temp_min - 273.15).toFixed(1)}&deg;C/
              {(info.main.temp_max - 273.15).toFixed(1)}&deg;C
            </span>
            <span>
              {info.weather.map((weath) => (
                <p>{weath.main}</p>
              ))}
            </span>
          </InfoContainer>
        </div>
      )}
    </DetailsContainer>
  );
};

export default WeatherDetails;

const DetailsContainer = styled.div`
  margin-top: 50px;
  border: 1px solid black;
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;

  > div {
    width: 100%;
  }

  > div > h4 {
    font-size: 22px;
    font-weight: 400;
    margin-bottom: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  > div > h5 {
    font-size: 18px;
    margin-bottom: 18px;
    display: flex;
    justify-content: center;
    align-items: center;

    > svg {
      height: 20px;
    }
  }
`;

const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  font-weight: 600;
`;
