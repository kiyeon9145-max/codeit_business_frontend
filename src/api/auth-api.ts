import { isAxiosError } from "axios";
import z from "zod";
import client, { ApiError } from "./client";

export const signInRequest = async (data: {
  email: string;
  password: string;
}) => {
  try {
    const { email, password } = data;
    const res = await client.post("/signin", { email, password });

    const signInResDataSchema = z.object({
      token: z.string(),
    });
    const parsed = signInResDataSchema.safeParse(res.data);
    if (parsed.success === false) {
      throw parsed.error;
    }

    return parsed.data;
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