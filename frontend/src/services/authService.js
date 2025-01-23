// src/services/authService.js
import httpClient from "../utils/httpClient";

export const authService = {
  login: async (credentials) => {
    const { data } = await httpClient.post("/auth/login", credentials);
    if (data.token) {
      localStorage.setItem("token", data.token);
    }
    return data;
  },

  logout: () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  },

  isAuthenticated: () => {
    return !!localStorage.getItem("token");
  },

  socialLogin: async (provider) => {
    const { data } = await httpClient.post(`/auth/${provider}`);
    if (data.token) {
      localStorage.setItem("token", data.token);
    }
    return data;
  },
};
