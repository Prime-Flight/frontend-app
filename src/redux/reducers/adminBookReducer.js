import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    books: []
}

const bookSlicer = createSlice({
    name: 'book',
    initialState,
    reducers: {
        getAllbooksReducer: (state, action) => {
            state.books = action.payload
        }
    }
})

export const { getAllbooksReducer } = bookSlicer.actions
export default bookSlicer.reducer