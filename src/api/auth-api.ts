import axios from "axios";
import store from "../store/store";

const client = axios.create({
  baseURL: "/api",
});

client.interceptors.request.use((config) => {
  if (store.getState().auth.token !== null) {
    config.headers.Authorization = `Bearer ${store.getState().auth.token}`;
  }
  return config;
});
/**
 * 요청 종류
 *
 */
export const signInRequest = async (data: {
  email: string;
  password: string;
}) => {
  const { email, password } = data;
  // 서버로 요청을 보낸다.
  const res = await client.post("signin", { email, password });
  return res.data;
};

export const signUpRequest = async (data: {
  email: string;
  password: string;
  username: string;
}) => {
  const { email, password, username } = data;
  // 서버로 요청을 보낸다.
  const res = await client.post("signup", { email, password, username });
  return res.data;
};

export const getMe = async (data: { token: string }) => {
  const { token } = data;
  // 서버로 요청을 보낸다.
  const res = await client.get("users/me");
  return res.data;
};
