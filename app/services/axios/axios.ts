import { tokenManager } from "@/app/utils/tokenManager/tokenManager";
import Axios from "axios";
import { toast } from "sonner";
import { AppError } from "./type";

export const BASE_URL = "http://localhost:8080/api/v1";

const axiosInstance = Axios.create({
  baseURL: BASE_URL,
  maxBodyLength: Infinity,
  timeout: 10000,
});

const WITHOUT_TOKEN_URLS = ["/auth/login", "/auth/register"];

axiosInstance.interceptors.request.use(
  async (config) => {
    if (WITHOUT_TOKEN_URLS.includes(config.url || "")) return config;

    const token = tokenManager.getAccessToken();
    console.log("🚀 ~ file: axios.ts:20 ~ token:", token);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    let body: AppError;
    if (Axios.isAxiosError(error)) {
      if (error.response) {
        const { status, data } = error.response;
        body = {
          type: "api",
          status,
          message: data.message,
        };
      } else if (error.request) {
        body = { type: "network", message: "Network Error" };
      } else {
        body = { type: "network", message: "An error occurred" };
      }
    } else {
      body = { type: "network", message: "An unexpected error occurred" };
    }
    toast.error("Error", {
      description: body.message,
    });

    return Promise.reject(body);
  }
);

export default axiosInstance;
