import { LoginResponse } from "./login.type";

export interface RegisterPayload {
  name: string;
  email: string;
  username: string;
  password: string;
}

export type RegisterResponse = LoginResponse;
