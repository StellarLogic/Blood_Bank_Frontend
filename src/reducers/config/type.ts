import { Datum } from "@/actions/categories/categories.type";
import { AppError } from "@/services/type";

export type ConfigType = {
  categories: CategoriesType;
};

export type CategoriesType = {
  isLoading: boolean;
  data: Datum[] | null;
  error: AppError | undefined | null;
};
