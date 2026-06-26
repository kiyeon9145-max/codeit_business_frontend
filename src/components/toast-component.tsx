import { useDispatch, useSelector } from "react-redux";
import type { StateType } from "../store/store";
import { useEffect } from "react";
import { toastActions } from "../store/toast-slice";

const ToastComponent = () => {
  const dispatch = useDispatch();

  const { message, code } = useSelector((state: StateType) => state.toast);

  useEffect(() => {
    if (message === null) {
      return;
    }

    const timer = setTimeout(() => {
      dispatch(toastActions.clear());
    }, 3000);

    return () => {
      // 클린업
      clearTimeout(timer);
    };
  }, [message, dispatch]);

  return (
    <div>
      {message === null ? null : (
        <div
          style={{
            position: "fixed",
            bottom: 16,
            left: 16,
            minWidth: 100,
            padding: 12,
            borderRadius: 8,
            backgroundColor: "#e74c3c",
            color: "#fff",
            fontSize: 16,
            textAlign: "center",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        >
          {`${message} (${code})`}
        </div>
      )}
    </div>
  );
};

export default ToastComponent;
