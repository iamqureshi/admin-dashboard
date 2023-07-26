import { configureStore } from "@reduxjs/toolkit";
import searchFunctionalitySlice from "./features/searcFunctionality";

export default configureStore({
  reducer: {
    searchReducer: searchFunctionalitySlice,
  },
});
