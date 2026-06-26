import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import RootScreen from "./screens/rootscreen";
import SignInScreen from "./screens/sign-in-screen";
import MemoScreen from "./screens/memo-screen";
import WriteMemoScreen from "./screens/write-memo-screen";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      { index: true, element: <RootScreen></RootScreen> },
      { path: "signin", element: <SignInScreen></SignInScreen> },
      { path: "memo", element: <MemoScreen></MemoScreen> },
      { path: "memo/write", element: <WriteMemoScreen></WriteMemoScreen> },
    ],
  },
]);

export default router;
