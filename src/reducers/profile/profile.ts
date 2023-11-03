import { getProfile } from "@/actions/profile/profile";
import { createSlice } from "@reduxjs/toolkit";
import { ProfileType } from "./type";

const initialState: ProfileType = {
  isLoading: false,
  data: null,
  error: null,
};

const profileSlice = createSlice({
  name: "config",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    /* -------------------------------------------------------------------------- */
    /*                             GET CATEGORIES LIST                            */
    /* -------------------------------------------------------------------------- */
    builder.addCase(getProfile.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getProfile.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.data = payload;
    });

    builder.addCase(getProfile.rejected, (state, { payload }) => {
      state.error = payload;
    });
  },
});

// export const {} = configSlice.actions;

export default profileSlice.reducer;
