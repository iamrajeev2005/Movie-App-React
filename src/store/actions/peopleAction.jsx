export { resetInfo } from "../reducers/peopleSlice";
import axios from "../../../utils/axios";
import { setInfo } from "../reducers/peopleSlice";

export const asyncSetperson = (id) => async (dispatch, getState) => {
  try {
    const detail = await axios.get(`/person/${id}`);
    const externalId = await axios.get(`/person/${id}/external_ids`);
    const combinedCredits = await axios.get(`/person/${id}/combined_credits`);
    const tvCredits = await axios.get(`/person/${id}/tv_credits`);
    const movieCredits = await axios.get(`/person/${id}/movie_credits`);
    let allDetails = {
      detail: detail.data,
      externalId: externalId.data,
      combinedCredits: combinedCredits.data.cast,
      tvCredits: tvCredits.data.cast,
      movieCredits: movieCredits.data.cast,
    };
    dispatch(setInfo(allDetails));
  } catch (error) {
    console.log(error);
  }
};
