import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  schedules: [],
};

const scheduleSlicer = createSlice({
  name: "schedule",
  initialState,
  reducers: {
    getAllScheduleReducer: (state, action) => {
      state.schedules = action.payload;
    },
    addScheduleReducer: (state, action) => {
      state.schedules = action.payload;
    },
  },
});

export const { getAllScheduleReducer, addScheduleReducer } =
  scheduleSlicer.actions;
export default scheduleSlicer.reducer;
