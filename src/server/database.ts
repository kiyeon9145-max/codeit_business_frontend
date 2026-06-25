export const database = {
  sessions: [],

  users: [
    { email: "asd@asd.com", password: "1234", username: "nick" },
    { email: "qwe@qwe.com", password: "1234", username: "jack" },
  ],
  memos: [
    {
      id: 1,
      email: "asd@asd.com",
      title: "오늘의 일기",
      content: "노잼이었다.",
      createdAt: "2026-06-01T09:00:00.000Z",
    },
    {
      id: 2,
      email: "asd@asd.com",
      title: "오늘의 코딩",
      content: "어려웠다.",
      createdAt: "2026-06-10T09:00:00.000Z",
    },
    {
      id: 3,
      email: "qwe@qwe.com",
      title: "오늘의 생각",
      content: "퇴각이다.",
      createdAt: "2026-06-15T09:00:00.000Z",
    },
  ],
};
