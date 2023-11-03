export const tokenManager = {
  getToken: function () {
    const token = localStorage.getItem("token");
    return token;
  },

  storeToken: function (token: string) {
    localStorage.setItem("token", token);
  },

  removeToken: function () {
    localStorage.removeItem("token");
  },
};
