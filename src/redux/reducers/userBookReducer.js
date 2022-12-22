import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mybooks: []
}

const myBookSlicer = createSlice({
    name: 'myBook',
    initialState,
    reducers: {
        getAllMyBooksReducer: (state, action) => {
            state.mybooks = action.payload
        }
    }
})

export const { getAllMyBooksReducer } = myBookSlicer.actions
export default myBookSlicer.reducer