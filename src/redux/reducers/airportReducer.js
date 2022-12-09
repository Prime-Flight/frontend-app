import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  airport: null,
};

const airportSlicer = createSlice({
  name: "airport",
  initialState,
  reducers: {
    getAirportReducer: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { getAirportReducer } = airportSlicer.actions;

export default airportSlicer.reducer;
