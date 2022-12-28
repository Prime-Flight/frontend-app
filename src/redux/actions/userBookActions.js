import axios from "axios";
import { getAllMyBooksReducer } from "../reducers/userBookReducer";

export const getAllMyBooks = () => async (dispatch, getState) => {
    try {
        const { token } = getState().auth
        const result = await axios.get (
            `${process.env.REACT_APP_AUTH_API}/booking/mybooking` ,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )
        dispatch(getAllMyBooksReducer(result.data))
    } catch (error) {
        throw error
    }
}