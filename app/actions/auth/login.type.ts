export interface LoginPayload {
  email: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  user: User;
}

export interface User {
  _id: string;
  name: string;
  email: string;
  username: string;
  password: string;
  createdAt: string;
  updatedAt: string;
  refreshToken: string;
}
