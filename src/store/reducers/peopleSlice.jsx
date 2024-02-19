import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  info: null,
};

export const peopleSlice = createSlice({
  name: "people",
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
export const { setInfo, resetInfo } = peopleSlice.actions;

export default peopleSlice.reducer;
