import { AppError } from "@/services/type";

export interface User {
  name: string;
  email: string;
  mobile: string;
  gender: null;
  role: string;
  userId: string;
}

export type AuthState = {
  isLoading: boolean;
  isAuthenticated: boolean;
  token: string | null;
  error: AppError | null | undefined;
  user: User | null;
};
