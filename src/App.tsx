import { Outlet } from "react-router-dom";
import ToastComponent from "./components/toast-component";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
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
        }}
      >
        <button>다크모드</button>
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
