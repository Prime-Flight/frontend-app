import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  order: [],
};

const orderSlicer = createSlice({
  name: "order",
  initialState,
  reducers: {
    getOrderReducer: (state, action) => {
      state.order = action.payload;
    },
  },
});

export const { getOrderReducer } = orderSlicer.actions;

export default orderSlicer.reducer;
