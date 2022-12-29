import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    schedules: []
}

const scheduleSlicer = createSlice ({
    name: 'schedule',
    initialState,
    reducers: {
        getAllScheduleReducer: (state, action) => {
            state.schedules = action.payload
        }
    }
})

export const { getAllScheduleReducer } = scheduleSlicer.actions
export default scheduleSlicer.reducer