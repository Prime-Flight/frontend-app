import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  checkout: [],
};

const checkoutSlicer = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    getCheckoutReducer: (state, action) => {
      state.checkout = action.payload;
    },
  },
});

export const { getCheckoutReducer } = checkoutSlicer.actions;

export default checkoutSlicer.reducer;
