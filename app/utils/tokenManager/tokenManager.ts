export const tokenManager = {
  setAccessToken: function (token: string) {
    localStorage.setItem("token", token);
  },

  getAccessToken: function () {
    return localStorage.getItem("token");
  },

  removeAccessToken: function () {
    localStorage.removeItem("token");
  },

  setRefreshToken: function (token: string) {
    localStorage.setItem("refresh-token", token);
  },

  getRefreshToken: function () {
    return localStorage.getItem("refresh-token");
  },

  removeRefreshToken: function () {
    localStorage.removeItem("refresh-token");
  },

  clearLocalStorage: function () {
    localStorage.clear();
  },
};
