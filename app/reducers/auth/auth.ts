import { login } from "@/app/actions/auth/auth";
import { createSlice } from "@reduxjs/toolkit";
import { AuthState } from "./type";

const initialState: AuthState = {
  isLoading: false,
  isAuthenticated: false,
  token: null,
  refreshToken: null,
  error: null,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginOnRefresh: (state, { payload }) => {
      state.token = payload;
      state.isAuthenticated = true;
    },

    logOut: (state) => {
      localStorage.removeItem("token");
      state.isLoading = false;
      state.isAuthenticated = false;
      state.token = null;
      state.error = null;
      state.user = null;
    },
  },

  extraReducers: (builder) => {
    /* -------------------------------------------------------------------------- */
    /*                                    LOGIN                                   */
    /* -------------------------------------------------------------------------- */
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
      state.isAuthenticated = false;
      state.error = null;
    });
    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.token = payload.accessToken;
      state.refreshToken = payload.refreshToken;
      state.user = payload.user;
      state.isAuthenticated = true;
    });

    builder.addCase(login.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
      state.isAuthenticated = false;
    });
  },
});

export const { logOut } = authSlice.actions;

export default authSlice.reducer;
