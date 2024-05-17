import axios, { AxiosRequestHeaders } from "axios";

export const Api = axios.create({
  baseURL: "https://example.com:8080/api",
});


export const authApi = axios.create({
    baseURL: "https://example.com:8080/api/auth",
    headers: {
      "Content-Type": "application/json",
    },
  });
