import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  country: null,
};

const countrySlicer = createSlice({
  name: "country",
  initialState,
  reducers: {
    getCountryReducer: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { getCountryReducer } = countrySlicer.actions;

export default countrySlicer.reducer;
