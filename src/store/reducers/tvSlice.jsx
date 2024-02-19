import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  info: null,
};

export const tvSlice = createSlice({
  name: "tv",
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
export const { setInfo, resetInfo } = tvSlice.actions;

export default tvSlice.reducer;
