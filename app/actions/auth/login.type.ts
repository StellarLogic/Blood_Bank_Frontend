export interface LoginPayload {
  email: string;
  password: string;
}

export type LoginResponse = {
  accessToken: string;
  refreshToken: string;
  user: User;
};

export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  createdAt: string;
  updatedAt: string;
}
