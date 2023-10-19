import { User } from "@/app/actions/auth/login.type";
import { AppError } from "@/app/services/axios/type";

export type AuthState = {
  isLoading: boolean;
  isAuthenticated: boolean;
  token: string | null;
  refreshToken: string | null;
  error: AppError | null | undefined;
  user: User | null;
};
