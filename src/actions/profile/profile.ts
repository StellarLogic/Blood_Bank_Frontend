import axiosInstance from "@/services/axios";
import { AppError } from "@/services/type";
import { notificationManager } from "@/utils/notificationManager";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ProfileResponse } from "./profile.type";

/* -------------------------------------------------------------------------- */
/*                               GET CATEGORIES                               */
/* -------------------------------------------------------------------------- */
export const getProfile = createAsyncThunk<
  ProfileResponse,
  void,
  { rejectValue: AppError }
>("auth/login", async (_, { rejectWithValue }) => {
  try {
    const { data } = await axiosInstance.get("/profile");

    return data.data;
  } catch (err) {
    const error = err as AppError;
    if (error.type == "api") {
      notificationManager.error(error.message);
    }
    return rejectWithValue(error);
  }
});
