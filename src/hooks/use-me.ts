import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import type { StateType } from "../store/store";
import { getMe } from "../api/auth-api";
import { useQuery } from "@tanstack/react-query";

const useMe = () => {
    const token = useSelector((state: StateType) => state.auth.token);

    const { data, isLoading, error } = useQuery({
        queryKey: ["me", token],
        queryFn: () => getMe().then((res) => res.me),
        enabled: token === null ? false : true,
    });

    return { data, isLoading, error };
 //   const [data, setData] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const token = useSelector((state: StateType) => state.auth.token);

//   useEffect(() => {
//     if (token === null) {
//         return;
//       }
//       setIsLoading(true);
//       getMe()
//         .then((res) => {
//           const { me } = res;
//           setData(() => me);
//           setError(null);
//         })
//         .catch((err) => {
//             setData(null);
//             setError(err);
//         })
//         .finally(() => {
//             setIsLoading(false);
//         });
        
//     return () => {
//       // 클린업
//     };
//   }, []);

//   return { data, isLoading, error };
};

export default useMe;
