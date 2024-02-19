import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  info: null,
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setInfo: (state, action) => {
      state.info = action.payload;
    },
    resetInfo: (state) => {
      state.info = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setInfo, resetInfo } = movieSlice.actions;

export default movieSlice.reducer;
