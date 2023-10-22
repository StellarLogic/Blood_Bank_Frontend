import { LoginResponse } from "./login.type";

export interface RegisterPayload {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
}

export type RegisterResponse = LoginResponse;
