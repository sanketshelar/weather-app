import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  weatherData: '',
};

const weatherReducer = createSlice({
  name: 'weather',
  initialState: initialState,
  reducers: {
    ADD_WEATHER: (state, action) => {
      return {
        ...state,
        weatherData: action.payload,
      };
    },
  },
});

export const weatherAction = weatherReducer.actions;

export default weatherReducer.reducer;
