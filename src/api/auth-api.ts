import axios, { isAxiosError } from "axios";
import store from "../store/store";
import z from "zod";

const client = axios.create({
  baseURL: "/api",
});

client.interceptors.request.use((config) => {
  if (store.getState().auth.token !== null) {
    config.headers.Authorization = `Bearer ${store.getState().auth.token}`;
  }
  return config;
});

export class ApiError extends Error {
  errorCode: string;

  constructor(errorCode: string) {
    super();
    this.errorCode = errorCode;
  }
}

export const signInRequest = async (data: {
  email: string;
  password: string;
}) => {
  try {
    const { email, password } = data;
    const res = await client.post("/signin", { email, password });

    const signInTesDataSchema = z.object({
      token: z.string(),
    });
    const parsed = signInTesDataSchema.safeParse(res.data);
    if (!parsed.success) {
      throw parsed.error;
    }

    return res.data;
  } catch (err) {
    if (isAxiosError(err)) {
      throw new ApiError(err.response?.data.errorCode);
    }

    throw err;
  }
};

export const signUpRequest = async (data: {
  email: string;
  password: string;
  username: string;
}) => {
  const { email, password, username } = data;
  const res = await client.post("/signup", { email, password, username });
  return res.data;
};

export const getMe = async () => {
  const res = await client.get("/users/me");
  return res.data;
};
