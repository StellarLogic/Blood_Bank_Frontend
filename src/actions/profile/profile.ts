import axiosInstance from "@/services/axios";
import { AppError } from "@/services/type";
import { notificationManager } from "@/utils/notificationManager";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ProfilePayload, ProfileResponse } from "./profile.type";

/* -------------------------------------------------------------------------- */
/*                               GET CATEGORIES                               */
/* -------------------------------------------------------------------------- */
export const getProfile = createAsyncThunk<
  ProfileResponse,
  void,
  { rejectValue: AppError }
>("profile/get_profile", async (_, { rejectWithValue }) => {
  try {
    const { data } = await axiosInstance.get("/profile");

    return data;
  } catch (err) {
    const error = err as AppError;

    if (error.type == "api") {
      notificationManager.error(error.message);
    }
    return rejectWithValue(error);
  }
});

/* -------------------------------------------------------------------------- */
/*                               CREATE PROFILE                               */
/* -------------------------------------------------------------------------- */
export const createProfile = createAsyncThunk<
  ProfileResponse,
  ProfilePayload,
  { rejectValue: AppError }
>(
  "profile/create_profile",
  async (payload: ProfilePayload, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post("/profile", payload);

      return data;
    } catch (err) {
      const error = err as AppError;
      if (error.type == "api") {
        if (Array.isArray(error.message)) {
          error.message.map((msg) => notificationManager.error(msg));
        } else {
          notificationManager.error(error.message);
        }
      }
      return rejectWithValue(error);
    }
  }
);
