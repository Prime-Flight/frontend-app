import axios from "axios";
import { getAllMyBooksReducer } from "../reducers/userBookReducer";

export const getAllMyBooks = () => async (dispatch) => {
    try {
        const { data } = await axios.get (
            `${process.env.REACT_APP_AUTH_API}/booking/mybooking`
        )
        dispatch(getAllMyBooksReducer(data))
    } catch (error) {
        throw error
    }
}