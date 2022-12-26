import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: []
}

const userSlicer = createSlice({
    name: 'user',
    initialState,
    reducers: {
        getAllUsersReducers: (state, action) => {
            state.users = action.payload
        }
    }
})

export const { getAllUsersReducers } = userSlicer.actions
export default userSlicer.reducer