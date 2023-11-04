import { getFamilyMember } from "@/actions/family/family";
import { createSlice } from "@reduxjs/toolkit";
import { FamilyType } from "./type";

const initialState: FamilyType = {
  isLoading: false,
  data: null,
  error: null,
};

const familySlice = createSlice({
  name: "config",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    /* -------------------------------------------------------------------------- */
    /*                             GET CATEGORIES LIST                            */
    /* -------------------------------------------------------------------------- */
    builder.addCase(getFamilyMember.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getFamilyMember.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.data = payload;
    });

    builder.addCase(getFamilyMember.rejected, (state, { payload }) => {
      state.error = payload;
    });
  },
});

// export const {} = configSlice.actions;

export default familySlice.reducer;
