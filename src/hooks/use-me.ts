import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import type { StateType } from "../store/store";
import { getMe } from "../api/auth-api";
import { useQuery } from "@tanstack/react-query";

const useMe = () => {
  const token = useSelector((state: StateType) => state.auth.token);

  const { data, isLoading, error } = useQuery({
    enabled: token !== null ? true : false,
    queryKey: ["me", token],
    queryFn: async () => {
      const { me } = await getMe();
      return me;
    },
  });

  return { data, isLoading, error };

  // const [data, setData] = useState(null);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   if (token === null) {
  //     return;
  //   }

  //   setIsLoading(true);
  //   getMe()
  //     .then((res) => {
  //       const { me } = res;
  //       setData(() => me);
  //       setError(null);
  //     })
  //     .catch((err) => {
  //       setData(null);
  //       setError(err);
  //     })
  //     .finally(() => {
  //       setIsLoading(false);
  //     });

  //   return () => {
  //     // 클린업
  //   };
  // }, [token]);

  // return { data, isLoading, error };
};

export default useMe;