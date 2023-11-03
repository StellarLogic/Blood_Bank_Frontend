import { LoginResponseDataUserProfile } from "./login.type";

export type UserResponse = {
  message: string;
  data: LoginResponseDataUserProfile;
  metadata: null;
  status: number;
  action: null;
  signature: null;
  type: string;
  id: null;
  ok: boolean;
};

export type UserResponseReturn = {
  data: LoginResponseDataUserProfile;
  token: Token;
};

export type Token = string;
