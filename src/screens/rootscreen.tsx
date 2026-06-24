import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const RootScreen = () => {
  const token = null;

  // 방법 1
  // const navigate = useNavigate();

  // useEffect(() => {
  //   navigate(token === null ? "/signin" : "/memo", {replace: true});
  //   return () => {
  //     // 클린업
  //   }
  // }, [token, navigate]);

  // return null;

  // 방법2
  return (
    <Navigate
      to={token === null ? "/signin" : "/memo"}
      replace={true}
    />
  );
};

export default RootScreen;
