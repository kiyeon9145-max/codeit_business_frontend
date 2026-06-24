import { http, HttpResponse } from "msw";

const handlers = [
  http.post("/api/signin", () => {
    console.log("서버에서 요청을 받았다!");
    return HttpResponse.json({
      token: "hahaha",
    });
  }),
];

export default handlers;
