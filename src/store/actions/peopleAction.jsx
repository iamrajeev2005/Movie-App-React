export { resetInfo } from "../reducers/peopleSlice";
import axios from "../../../utils/axios";
import { setInfo } from "../reducers/peopleSlice";

export const asyncSetperson = (id) => async (dispatch, getState) => {
  try {
    const detail = await axios.get(`/person/${id}`);
    let allDetails = {
      detail: detail.data,
    };
    dispatch(setInfo(allDetails));
  } catch (error) {
    console.log(error);
  }
};
