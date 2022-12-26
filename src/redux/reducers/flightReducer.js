import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  flight: [],
};

const flightSlicer = createSlice({
  name: "flight",
  initialState,
  reducers: {
    getFlightReducer: (state, action) => {
      state.flight = action.payload;
    },
  },
});

export const { getFlightReducer } = flightSlicer.actions;

export default flightSlicer.reducer;
