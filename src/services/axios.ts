import { notifications } from "@mantine/notifications";
import Axios from "axios";

export const BASE_URL = "http://localhost:8080/api/v1";

const axiosInstance = Axios.create({
  baseURL: BASE_URL,
  maxBodyLength: Infinity,
  timeout: 10000,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

const WITHOUT_TOKEN_URLS = ["/auth/login", "/auth/register"];

axiosInstance.interceptors.request.use(
  async (config) => {
    if (WITHOUT_TOKEN_URLS.includes(config.url || "")) return config;

    const token = localStorage.getItem("token");

    if (token) {
      config.headers["Content-Type"] = "application/json";
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.log("🚀 ~ file: axios.ts:33 ~ error:", error);
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (Axios.isAxiosError(error)) {
      if (error.response) {
        const { status, data } = error.response;
        return Promise.reject({
          type: "api",
          status,
          message: data.message,
        });
      } else if (error.request) {
        const body = { type: "network", message: "Network Error" };

        notifications.show({
          color: "red",
          message: body.message,
        });

        return Promise.reject(body);
      } else {
        const body = { type: "network", message: "An error occurred" };

        notifications.show({
          color: "red",
          message: body.message,
        });
        return Promise.reject(body);
      }
    } else {
      const body = { type: "network", message: "An unexpected error occurred" };

      notifications.show({
        color: "red",
        message: body.message,
      });
      return Promise.reject(body);
    }
  }
);

export default axiosInstance;
