import { createSlice } from "@reduxjs/toolkit";

export const searchFunctionalitySlice = createSlice({
  name: "counter",
  initialState: {
    searchTickerList: [],
    objSearchItem: null,
  },

  reducers: {
    storeSearchTicker: (state, action) => {
      state.searchTickerList = action.payload;
    },
    currentSearchItem: (state, action) => {
      state.objSearchItem = action.payload;
    },
  },
});

export const { storeSearchTicker, currentSearchItem } =
  searchFunctionalitySlice.actions;

export default searchFunctionalitySlice.reducer;
