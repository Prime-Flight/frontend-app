import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    details: []
}

const detailSlicer = createSlice ({
    name: 'detail',
    initialState,
    reducers: {
        getAllDetailReducer: (state, actions) => {
            state.detail = action.payload
        }
    }
})

export const { getAllDetailReducer } = detailSlicer.actions
export default detailSlicer.reducer