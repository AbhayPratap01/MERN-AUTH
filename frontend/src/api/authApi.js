import api from "./axios";

export const signupUser = (data) =>
  api.post("/auth/signup", data);

export const loginUser = (data) =>
  api.post("/auth/login", data);

export const logoutUser = () =>
  api.post("/auth/logout");

export const getDashboard = (token) =>
  api.get("/user/dashboard", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const refreshToken = () =>
  api.post("/auth/refresh");