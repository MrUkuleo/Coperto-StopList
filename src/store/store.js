import { configureStore } from "@reduxjs/toolkit";
import stopListReducer from "./stopListSlice";

export const store = configureStore({
  reducer: {
    stopList: stopListReducer,
  },
});