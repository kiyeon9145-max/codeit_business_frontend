import axios from "axios";

const client = axios.create();
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
  const res = await client.post("/api/signin", { email, password });
  return res.data;
};

export const signUpRequest = async (data: {
  email: string;
  password: string;
  username: string;
}) => {
  const { email, password, username } = data;
  // 서버로 요청을 보낸다.
  const res = await client.post("/api/signup", { email, password, username });
  return res.data;
};

export const getMe = async (data: { token: string }) => {
  const { token } = data;
  // 서버로 요청을 보낸다.
  const res = await client.get("/api/users/me");
  return res.data;
};
