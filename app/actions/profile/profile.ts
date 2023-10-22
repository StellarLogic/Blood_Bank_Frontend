import axiosInstance from "@/app/services/axios/axios";
import { AppError } from "@/app/services/axios/type";
import { tokenManager } from "@/app/utils/tokenManager/tokenManager";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "sonner";
import { ProfileResponse } from "./type";

/* -------------------------------------------------------------------------- */
/*                          GET CURRENT USER PROFILE                          */
/* -------------------------------------------------------------------------- */
export const getCurrentUserProfile = createAsyncThunk<
  ProfileResponse,
  any,
  { rejectValue: AppError }
>("profile/current_profile", async (_, { rejectWithValue }) => {
  try {
    const { data } = await axiosInstance.get("/profile/current");

    toast.success("Login successful");

    const accessToken = data.accessToken;
    const refreshToken = data.refreshToken;

    tokenManager.setAccessToken(accessToken);
    tokenManager.setRefreshToken(refreshToken);

    return data;
  } catch (err) {
    const error = err as AppError;
    if (error.type == "api") {
      toast.error(error.message);
    }
    return rejectWithValue(error);
  }
});
