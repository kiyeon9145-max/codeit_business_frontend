import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import type { StateType } from "../store/store";

const RootScreen = () => {
  const token = useSelector((state: StateType) => state.auth.token);

  // 방법1
  // const navigate = useNavigate();

  // useEffect(() => {
  //   navigate(token === null ? "/signin" : "/memo", { replace: true });
  //   return () => {
  //     // 클린업
  //   };
  // }, [navigate, token]);

  // return null;

  // 방법2
  return <Navigate to={token === null ? "/signin" : "/memo"} replace={true} />;
};

export default RootScreen;
