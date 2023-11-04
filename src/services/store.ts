import familySlice from "@/reducers/family/family";
import profileSlice from "@/reducers/profile/profile";
import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import authSlice from "../reducers/auth/auth";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    profile: profileSlice,
    family: familySlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
