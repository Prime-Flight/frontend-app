import axios from "axios";
import { getAllDetailReducer } from "../reducers/detailReducer";

export const getAllDetailForAdmin = (id) => async (dispatch) => {
    try {
        const { data } = await axios.get (
            `${process.env.REACT_APP_AUTH_API}/booking/details/${id}`
        )
        dispatch(getAllDetailReducer(data.data))
    } catch (error) {
        throw error
    }
}