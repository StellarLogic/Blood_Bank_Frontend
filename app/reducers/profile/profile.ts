import { getCurrentUserProfile } from "@/app/actions/profile/profile";
import { createSlice } from "@reduxjs/toolkit";
import { AuthState } from "./type";

const initialState: AuthState = {
  isLoading: false,
  profile: null,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    /* -------------------------------------------------------------------------- */
    /*                                 GET PROFILE                                */
    /* -------------------------------------------------------------------------- */
    builder.addCase(getCurrentUserProfile.pending, (state) => {
      state.isLoading = true;
      state.profile = null;
      state.error = null;
    });
    builder.addCase(getCurrentUserProfile.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.profile = payload;
    });

    builder.addCase(getCurrentUserProfile.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
      state.profile = null;
    });
  },
});

export const {} = authSlice.actions;

export default authSlice.reducer;
