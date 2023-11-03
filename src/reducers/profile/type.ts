import { ProfileResponse } from "@/actions/profile/profile.type";
import { AppError } from "@/services/type";

export type ProfileType = {
  isLoading: boolean;
  data: ProfileResponse | null;
  error: AppError | undefined | null;
};
