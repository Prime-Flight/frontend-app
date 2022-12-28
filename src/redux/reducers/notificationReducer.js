import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notif: [],
};

const notifSlicer = createSlice({
  name: "notif",
  initialState,
  reducers: {
    getNotifReducer: (state, action) => {
      state.notif = action.payload;
    },
  },
});

export const { getNotifReducer } = notifSlicer.actions;

export default notifSlicer.reducer;
