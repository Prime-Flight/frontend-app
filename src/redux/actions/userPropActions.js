import axios from "axios";
import { getAllUsersReducers } from "../reducers/userPropReducer";

export const getAllUsers = () => async (dispatch) => {
    try {
        const { data } = await axios.get (
            `${process.env.REACT_APP_AUTH_API}/user/details`
        )
        dispatch(getAllUsersReducers(data))
    } catch (error) {
        throw error
    }
}