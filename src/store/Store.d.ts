import type { EnhancedStore } from "@reduxjs/toolkit";
import type { StopListState } from "./stopListSlice";

export type RootState = {
  stopList: StopListState;
};

export declare const store: EnhancedStore<RootState>;