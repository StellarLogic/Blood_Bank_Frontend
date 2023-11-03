import configSlice from "@/reducers/config/config";
import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import authSlice from "../reducers/auth/auth";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    config: configSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
