import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import RootScreen from "./screens/rootscreen";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [{ index: true, element: <RootScreen></RootScreen> }],
  },
]);

export default router;
