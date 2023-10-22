import { User } from "@/app/actions/auth/login.type";
import { ProfileResponse } from "@/app/actions/profile/type";
import { AppError } from "@/app/services/axios/type";

export type AuthState = {
  isLoading: boolean;
  profile: ProfileResponse | null;
  error: AppError | null | undefined;
};
