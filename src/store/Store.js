import { configureStore } from "@reduxjs/toolkit";
import stopListReducer from "./Stoplistslice";

export const store = configureStore({
  reducer: {
    stopList: stopListReducer,
  },
});
