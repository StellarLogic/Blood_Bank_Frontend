import axiosInstance from "@/app/services/axios/axios";
import { AppError } from "@/app/services/axios/type";
import { tokenManager } from "@/app/utils/tokenManager/tokenManager";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "sonner";
import { LoginPayload, LoginResponse, User } from "./login.type";
import { RegisterPayload, RegisterResponse } from "./register.type";

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

/* -------------------------------------------------------------------------- */
/*                                    LOGIN                                   */
/* -------------------------------------------------------------------------- */
export const register = createAsyncThunk<
  RegisterResponse,
  RegisterPayload,
  { rejectValue: AppError }
>("auth/register", async (payload: RegisterPayload, { rejectWithValue }) => {
  try {
    const { data } = await axiosInstance.post("/auth/register", payload);

    toast.success("Register successful");

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

/* -------------------------------------------------------------------------- */
/*                                    LOGIN                                   */
/* -------------------------------------------------------------------------- */
export const getCurrentUser = createAsyncThunk<
  User,
  { token: string },
  { rejectValue: AppError }
>("auth/user", async ({ token: string }, { rejectWithValue }) => {
  try {
    const { data } = await axiosInstance.get("/user/current");
    toast.success("Login successful");
    return data;
  } catch (err) {
    const error = err as AppError;
    tokenManager.clearLocalStorage();
    return rejectWithValue(error);
  }
});
