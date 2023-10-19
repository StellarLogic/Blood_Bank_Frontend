/* -------------------------------------------------------------------------- */
/*                                    LOGIN                                   */

import axiosInstance from "@/app/services/axios/axios";
import { AppError } from "@/app/services/axios/type";
import { tokenManager } from "@/app/utils/tokenManager/tokenManager";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "sonner";
import { LoginPayload, LoginResponse } from "./login.type";

/* -------------------------------------------------------------------------- */
export const login = createAsyncThunk<
  LoginResponse,
  LoginPayload,
  { rejectValue: AppError }
>("auth/login", async (payload: LoginPayload, { rejectWithValue }) => {
  try {
    const { data } = await axiosInstance.post("/auth/login", payload);

    toast.success("Login successful");

    const accessToken = data.accessToken;
    const refreshToken = data.refreshToken;

    tokenManager.setAccessToken(accessToken);
    tokenManager.setRefreshToken(refreshToken);

    return data;
  } catch (err) {
    console.log("🚀 ~ file: auth.ts:25 ~ > ~ err:", err);
    const error = err as AppError;
    if (error.type == "api") {
      toast.error(error.message);
    }
    return rejectWithValue(error);
  }
});
