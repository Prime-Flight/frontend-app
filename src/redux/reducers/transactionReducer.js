import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  transaction: [],
};

const transactionSlicer = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    getTransactionReducer: (state, action) => {
      state.transaction = action.payload;
    },
  },
});

export const { getTransactionReducer } = transactionSlicer.actions;

export default transactionSlicer.reducer;
