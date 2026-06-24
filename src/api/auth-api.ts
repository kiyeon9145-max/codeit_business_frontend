import axios from "axios"

const client = axios.create();

export const signInRequest = async () => {
    // 서버로 요청을 보낸다.
    const res = await client.get("/api/signin");
    return res.data;
}