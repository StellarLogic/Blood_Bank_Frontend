import { getCategoriesList } from "@/actions/categories/categories";
import { createSlice } from "@reduxjs/toolkit";
import { ConfigType } from "./type";

const initialState: ConfigType = {
  categories: {
    isLoading: false,
    data: null,
    error: null,
  },
};

const configSlice = createSlice({
  name: "config",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    /* -------------------------------------------------------------------------- */
    /*                             GET CATEGORIES LIST                            */
    /* -------------------------------------------------------------------------- */
    builder.addCase(getCategoriesList.pending, (state) => {
      state.categories.isLoading = true;
    });
    builder.addCase(getCategoriesList.fulfilled, (state, { payload }) => {
      state.categories.isLoading = false;
      state.categories.data = payload;
    });

    builder.addCase(getCategoriesList.rejected, (state, { payload }) => {
      state.categories.error = payload;
    });
  },
});

// export const {} = configSlice.actions;

export default configSlice.reducer;
