import { User } from "@/actions/auth/login.type";
import { AppError } from "@/services/type";

export type AuthState = {
  isLoading: boolean;
  isAuthenticated: boolean;
  accessToken: string | null;
  refreshToken: string | null;
  error: AppError | null | undefined;
  user: User | null;
};
