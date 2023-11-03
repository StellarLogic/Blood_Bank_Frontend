export const tokenManager = {
  getTokens: function () {
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");
    return { accessToken, refreshToken };
  },

  storeAccessToken: function (accessToken: string) {
    localStorage.setItem("accessToken", accessToken);
  },

  removeAccessToken: function () {
    localStorage.removeItem("accessToken");
  },

  storeRefreshToken: function (refreshToken: string) {
    localStorage.setItem("refreshToken", refreshToken);
  },

  removeRefreshToken: function () {
    localStorage.removeItem("refreshToken");
  },

  storeAccessRefreshToken: function (
    accessToken: string,
    refreshToken: string
  ) {
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
  },

  clearStorage: function () {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  },
};
