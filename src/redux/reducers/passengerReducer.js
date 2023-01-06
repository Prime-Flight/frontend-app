import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  passenger: [],
};

const passengerSlicer = createSlice({
  name: "passenger",
  initialState,
  reducers: {
    getPassengerReducer: (state, action) => {
      state.passenger = action.payload;
    },
    // addPassengerReducer: (state, action) => {
    //   state.passenger = action.payload;
    // },
    // deletePassengerReducer: (state, action) => {
    //   state.passenger = action.payload;
    // },
  },
});

export const {
  getPassengerReducer,
  addPassengerReducer,
  deletePassengerReducer,
} = passengerSlicer.actions;

export default passengerSlicer.reducer;
