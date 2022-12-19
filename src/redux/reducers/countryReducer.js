import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  country: [],
};

const countrySlicer = createSlice({
  name: "country",
  initialState,
  reducers: {
    getCountryReducer: (state, action) => {
      state.country = action.payload;
    },
  },
});

export const { getCountryReducer } = countrySlicer.actions;

export default countrySlicer.reducer;
