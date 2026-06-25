import { http, delay, HttpResponse } from "msw";
import { database } from "./database";

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

    const auth = request.headers.get("Authorization");
    if (auth === null) {
      return HttpResponse.json({ errorCode: "UNAUTHORIZED" }, { status: 401 });
    }

    const token = auth.replace("Bearer ", "");
    const session = database.sessions.find((s) => s.token === token);
    if (session == null) {
      return HttpResponse.json({ errorCode: "UNAUTHORIZED" }, { status: 401 });
    }

    const foundUser = database.users.find((u) => u.email === session.email);
    if (foundUser == null) {
      return HttpResponse.json({ errorCode: "UNAUTHORIZED" }, { status: 401 });
    }

    return HttpResponse.json({ me: foundUser });
  }),
];

export default handlers;
