import axiosInstance from "@/services/axios";
import { AppError } from "@/services/type";
import { notificationManager } from "@/utils/notificationManager";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { CategoriesResponse } from "./categories.type";

/* -------------------------------------------------------------------------- */
/*                               GET CATEGORIES                               */
/* -------------------------------------------------------------------------- */
export const getCategoriesList = createAsyncThunk<
  CategoriesResponse,
  void,
  { rejectValue: AppError }
>("auth/login", async (_, { rejectWithValue }) => {
  try {
    const { data } = await axiosInstance.get("/categories");

    return data.data;
  } catch (err) {
    const error = err as AppError;
    if (error.type == "api") {
      notificationManager.error(error.message);
    }
    return rejectWithValue(error);
  }
});
