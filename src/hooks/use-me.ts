import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import type { StateType } from "../store/store";
import { getMe } from "../api/auth-api";

const useMe = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const token = useSelector((state: StateType) => state.auth.token);

  useEffect(() => {
    if (token === null) {
        return;
      }
      setIsLoading(true);
      getMe()
        .then((res) => {
          const { me } = res;
          setData(() => me);
          setError(null);
        })
        .catch((err) => {
            setData(null);
            setError(err);
        })
        .finally(() => {
            setIsLoading(false);
        });
        
    return () => {
      // 클린업
    };
  }, []);

  return { data, isLoading, error };
};

export default useMe;
