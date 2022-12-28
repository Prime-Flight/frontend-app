import axios from "axios";
import { getAllScheduleReducer } from "../reducers/scheduleReducer";

export const getAllSchedules = () => async (dispatch) => {
    try {
        const { data } = await axios.get (
            `${process.env.REACT_APP_AUTH_API}/flight/get-flight`
        )
        dispatch(getAllScheduleReducer(data.data))
    } catch (error) {
        throw error
    }
}