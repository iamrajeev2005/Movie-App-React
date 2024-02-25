export { resetInfo } from "../reducers/peopleSlice";
import axios from "../../../utils/axios";
import { setInfo } from "../reducers/peopleSlice";

export const asyncSetperson = (id) => async (dispatch, getState) => {
  try {
    const detail = await axios.get(`/person/${id}`);
    const externalId = await axios.get(`/person/${id}/external_ids`);
    let allDetails = {
      detail: detail.data,
      externalId: externalId.data,
    };
    dispatch(setInfo(allDetails));
  } catch (error) {
    console.log(error);
  }
};
