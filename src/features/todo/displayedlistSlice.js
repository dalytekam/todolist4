import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listState: "all"
};

const displayedlistSlice = createSlice({
  name: "displayedList",
  initialState: initialState,
  reducers: {
    setListState: (state, action) => {
      state.listState = action.payload;
    }
  }
});

export default displayedlistSlice.reducer;

export const { setListState } = displayedlistSlice.actions;
