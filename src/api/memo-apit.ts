import { isAxiosError } from "axios";
import client, { ApiError } from "./client";

export const createMemo = async (data: { title: string; content: string }) => {
  try {
    const res = await client.post("/memos", data);
    return res.data;
  } catch (err) {
    if (isAxiosError(err)) {
      throw new ApiError(err.response?.data.errorCode);
    }
    throw err;
  }
};

export const getMemos = async () => {
  try {
    const res = await client.get("/memos");
    return res.data;
  } catch (err) {
    if (isAxiosError(err)) {
      throw new ApiError(err.response?.data.errorCode);
    }
    throw err;
  }
};
