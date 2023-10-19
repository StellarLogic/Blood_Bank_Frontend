export type AppError =
  | { type: "network"; message: string }
  | { type: "api"; status: number; message: string }
  | { type: "custom"; message: string };
