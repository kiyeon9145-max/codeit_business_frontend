import { http, delay, HttpResponse } from "msw";
import { database } from "./database";

const handlers = [
  http.post("/api/signin", async ({ request }) => {
    await delay(500);
    const body = await request.json();
    const { email, password } = body as { email: string; password: string };
    const foundUser = database.users.find((user) => user.email === email);
    if (foundUser == null || foundUser.password !== password) {
      return HttpResponse.json({
        message: "이메일 또는 비밀번호가 일치하지 않습니다.",
      },
      {status: 401,}
    );
    }

    const token = crypto.randomUUID();
    database.sessions.push({ token, email });

    return HttpResponse.json({ token });
  }),
];

export default handlers;
