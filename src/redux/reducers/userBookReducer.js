import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mybooks: []
}

const myBookSlicer = createSlice({
    name: 'myBook',
    initialState,
    reducers: {
        getAllMyBooksReducer: (state, action) => {
            state.myBooks = action.payload
        }
    }
})

export const { getAllMyBooksReducer } = myBookSlicer.actions
export default myBookSlicer.reducer