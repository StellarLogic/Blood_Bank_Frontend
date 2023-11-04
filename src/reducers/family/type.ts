import { FamilyResponse } from "@/actions/family/family.type";
import { AppError } from "@/services/type";

export type FamilyType = {
  isLoading: boolean;
  data: FamilyResponse[] | null;
  error: AppError | undefined | null;
};
