/* -------------------------------------------------------------------------- */
/*                                    LOGIN                                   */
/* -------------------------------------------------------------------------- */

export type LoginPayload = {
  userName: string;
  password: string;
};

export type LoginResponse = {
  success: null;
  message: string;
  data: LoginResponseData;
  metadata: null;
  status: number;
  action: null;
  signature: null;
  type: string;
  id: null;
  ok: boolean;
};

export type LoginResponseData = {
  userProfile: LoginResponseDataUserProfile;
  token: string;
};

export type LoginResponseDataUserProfile = {
  name: string;
  email: string;
  mobile: string;
  gender: null;
  role: string;
  userId: string;
};
