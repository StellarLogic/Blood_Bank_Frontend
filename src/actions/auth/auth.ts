import axiosInstance from "@/services/axios";
import { AppError } from "@/services/type";
import { notificationManager } from "@/utils/notificationManager";
import { tokenManager } from "@/utils/tokenManager";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { LoginPayload, LoginResponse } from "./login.type";
import { RegisterPayload } from "./register.types";
import { Token, UserResponseReturn } from "./user.type";

/* -------------------------------------------------------------------------- */
/*                                    LOGIN                                   */
/* -------------------------------------------------------------------------- */
export const login = createAsyncThunk<
  LoginResponse,
  LoginPayload,
  { rejectValue: AppError }
>("auth/login", async (payload: LoginPayload, { rejectWithValue }) => {
  try {
    const { data } = await axiosInstance.post("/auth/login", payload);

    const accessToken = data.accessToken;
    const refreshToken = data.refreshToken;
    notificationManager.success("Login SuccessFull");
    tokenManager.storeAccessRefreshToken(accessToken, refreshToken);

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
/*                                  REGISTER                                  */
/* -------------------------------------------------------------------------- */
export const register = async (payload: RegisterPayload) => {
  try {
    const { data } = await axiosInstance.post("/register", payload);
    notificationManager.success(data.message);
    return data;
  } catch (err) {
    const error = err as AppError;
    if (error.type == "api") {
      notificationManager.error(error.message);
    }

    return { error: true };
  }
};

/* -------------------------------------------------------------------------- */
/*                              GET USER PROFILE                              */
/* -------------------------------------------------------------------------- */

export const getUserProfile = createAsyncThunk<
  UserResponseReturn,
  Token,
  { rejectValue: AppError }
>("auth/currentUser", async (token: Token, { rejectWithValue }) => {
  try {
    const { data } = await axiosInstance.get("/profile");
    return {
      data: data.data,
      token,
    };
  } catch (err) {
    const error = err as AppError;
    if (error.type == "api") {
      tokenManager.clearStorage();
      notificationManager.error(error.message);
    }
    return rejectWithValue(error);
  }
});
