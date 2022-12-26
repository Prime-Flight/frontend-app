import axios from "axios";
import { getAllbooksReducer } from "../reducers/adminBookReducer";

export const getAllBooks = () => async (dispatch) => {
    try {
        const { data } = await axios.get (
            `${process.env.REACT_APP_AUTH_API}/booking/all`
        )
        dispatch(getAllbooksReducer(data.data))
    } catch (error) {
        throw error
    }
}