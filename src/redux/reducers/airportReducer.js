import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  airports: [],
};

const airportSlicer = createSlice({
  name: "airport",
  initialState,
  reducers: {
    getAirportReducer: (state, action) => {
      state.airports = action.payload;
    },
  },
});

export const { getAirportReducer } = airportSlicer.actions;

export default airportSlicer.reducer;
