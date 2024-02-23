export { resetInfo } from "../reducers/tvSlice";
import axios from "../../../utils/axios";
import { setInfo } from "../reducers/tvSlice";

export const asyncSettvs = (id) => async (dispatch, getState) => {
  try {
    const detail = await axios.get(`/tv/${id}`);
    const externalId = await axios.get(`/tv/${id}/external_ids`);
    const recommendations = await axios.get(`/tv/${id}/recommendations`);
    const videos = await axios.get(`/tv/${id}/videos`);
    const watchProviders = await axios.get(`/tv/${id}/watch/providers`);
    let allDetails = {
      detail: detail.data,
      externalId: externalId.data,
      recommendations: recommendations.data.results,
      videos: videos.data.results.find((m) => (m.type = "Trailer")),
      watchProviders: watchProviders.data.results.IN,
    };
    dispatch(setInfo(allDetails));
  } catch (error) {
    console.log(error);
  }
};
