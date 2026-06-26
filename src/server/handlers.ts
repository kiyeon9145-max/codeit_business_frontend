import { http, delay, HttpResponse } from "msw";
import database from "./database";


const handlers = [
  http.post("/api/signin", async ({ request }) => {
    await delay(500);

    const body = await request.json();
    const { email, password } = body as { email: string; password: string };

    const foundUser = database.users.find((user) => user.email === email);
    if (foundUser == null || foundUser.password !== password) {
      return HttpResponse.json(
        {
          errorCode: "INVALID_AUTH",
        },
        {
          status: 401,
        },
      );
    }

    const token = crypto.randomUUID();
    database.sessions.push({ token, email });

    return HttpResponse.json({ token });
  }),

  http.get("/api/users/me", async ({ request }) => {
    await delay(500);

    const authHeader = request.headers.get("Authorization");
    const token = authHeader.replace("Bearer ", "");
    if (token === null) {
      return HttpResponse.json(
        {
          errorCode: "INVALID_TOKEN",
        },
        {
          status: 401,
        },
      );
    }

    const foundSession = database.sessions.find(
      (session) => session.token === token,
    );
    if (foundSession == null) {
      return HttpResponse.json(
        {
          errorCode: "INVALID_TOKEN",
        },
        {
          status: 401,
        },
      );
    }

    const foundUser = database.users.find(
      (user) => user.email === foundSession.email,
    );
    if (foundUser == null) {
      return HttpResponse.json(
        {
          errorCode: "INVALID_TOKEN",
        },
        {
          status: 401,
        },
      );
    }

    return HttpResponse.json({
      me: {
        username: foundUser.username,
      },
    });
  }),

  http.get("/api/memos", async ({ request }) => {
    await delay(500);

    const authHeader = request.headers.get("Authorization");
    const token = authHeader?.replace("Bearer ", "");

    const foundSession = database.sessions.find(
      (session) => session.token === token,
    );
    if (foundSession == null) {
      return HttpResponse.json({ errorCode: "INVALID_TOKEN" }, { status: 401 });
    }

    const memos = database.memos.filter(
      (memo) => memo.email === foundSession.email,
    );

    return HttpResponse.json({ memos });
  }),
];

export default handlers;