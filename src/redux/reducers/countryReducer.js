import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  countries: [],
};

const countrySlicer = createSlice({
  name: "country",
  initialState,
  reducers: {
    getCountryReducer: (state, action) => {
      state.countries = action.payload;
    },
  },
});

export const { getCountryReducer } = countrySlicer.actions;

export default countrySlicer.reducer;
