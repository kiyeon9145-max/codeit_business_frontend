import { Outlet, useNavigate } from "react-router-dom";
import ToastComponent from "./components/toast-component";
import ButtonComponent from "./components/button-component";
import { useSelector } from "react-redux";
import type { StateType } from "./store/store";
import useSignOut from "./hooks/use-sign-out";

const App = () => {
  const token = useSelector((state: StateType) => state.auth.token);
  const navigate = useNavigate();
  const { mutate: signOut } = useSignOut();

  const handleSignOut = () => {
    signOut(undefined, { onSuccess: () => navigate("/") });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        maxWidth: 480,
        backgroundColor: "#fff",
        margin: "0 auto",
        padding: 24,
      }}
    >
      <ToastComponent />

      <header
        style={{
          flex: 0,
          backgroundColor: "#fff",
          paddingBottom: 16,
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: 12,
        }}
      >
        {token ? (
          <ButtonComponent
            text="로그아웃"
            type="button"
            onClick={handleSignOut}
            style={{
              padding: "6px 12px",
              fontSize: 12,
            }}
          />
        ) : null}
        <ButtonComponent
          text="Dark Mode"
          type="button"
          style={{
            padding: "6px 12px",
            fontSize: 12,
          }}
        />
      </header>

      <div style={{ flex: 1 }}>
        <Outlet></Outlet>
      </div>

      <footer
        style={{
          flex: 0,
          color: "#999",
          paddingTop: 16,
          borderTop: "1px solid #eee",
          textAlign: "center",
        }}
      >
        © {new Date().getFullYear()} (주)메모잇
      </footer>
    </div>
  );
};

export default App;
