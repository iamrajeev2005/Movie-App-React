export { resetInfo } from "../reducers/movieSlice";
import axios from "../../../utils/axios";
import { setInfo } from "../reducers/movieSlice";

export const asyncSetMovies = (id) => async (dispatch, getState) => {
    try {
        const detail = await axios.get(`/movie/${id}`)
        const externalId = await axios.get(`/movie/${id}/external_ids`)
        const recommendations = await axios.get(`/movie/${id}/recommendations`);
        const similar = await axios.get(`/movie/${id}/similar`);
        const videos = await axios.get(`/movie/${id}/videos`);
        const watchProviders = await axios.get(`/movie/${id}/watch/providers`)
        let allDetails = {
          detail: detail.data,
          externalId: externalId.data,
          recommendations: recommendations.data,
          similar: similar.data,
          videos: videos.data.results.find(m => m.type = "Trailer"),
          watchProviders: watchProviders.data.results.IN,
        };
        dispatch(setInfo(allDetails))
    } catch (error) {
        console.log(error)
    }
};
