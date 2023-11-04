import axiosInstance from "@/services/axios";
import { AppError } from "@/services/type";
import { notificationManager } from "@/utils/notificationManager";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  FamilyListResponse,
  FamilyPayload,
  FamilyResponse,
} from "./family.type";

/* -------------------------------------------------------------------------- */
/*                             ADD FAMILY MEMBERS                             */
/* -------------------------------------------------------------------------- */
export const createFamilyMember = createAsyncThunk<
  FamilyResponse,
  FamilyPayload,
  { rejectValue: AppError }
>("profile/create_family_Member", async (payload, { rejectWithValue }) => {
  try {
    const { data } = await axiosInstance.post("/profile", payload);

    return data.data;
  } catch (err) {
    const error = err as AppError;
    if (error.type == "api") {
      notificationManager.error(error.message);
    }
    return rejectWithValue(error);
  }
});

/* -------------------------------------------------------------------------- */
/*                               GET FAMILY LIST                              */
/* -------------------------------------------------------------------------- */
export const getFamilyMember = createAsyncThunk<
  FamilyListResponse,
  void,
  { rejectValue: AppError }
>("profile/get_family_Member", async (_, { rejectWithValue }) => {
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
