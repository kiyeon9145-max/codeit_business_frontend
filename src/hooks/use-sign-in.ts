import { useState } from "react";
import { signInRequest } from "../api/auth-api";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth-slice";
import { useMutation } from "@tanstack/react-query";
import { setLocalStorage } from "../utils/local-storage";

const useSignIn = () => {
  const dispatch = useDispatch();

  const { isPending, mutate } = useMutation({
    mutationFn: async (data: { email: string; password: string }) => {
      const { email, password } = data;
      const res = await signInRequest({ email, password });
      return res;
    },
    onSuccess: (res) => {
      const { token } = res;
      dispatch(authActions.signIn({ token }));
      setLocalStorage("token", token);
    },
  });

  return { isPending, mutate };

  // const [isPending, setIsPending] = useState(false);

  // const mutate = async (
  //   data: { email: string; password: string },
  //   onSuccess: () => void,
  //   onError: (err: unknown) => void,
  // ) => {
  //   setIsPending(true);

  //   try {
  //     const { email, password } = data;
  //     const { token } = await signInRequest({ email, password });
  //     dispatch(authActions.signIn({ token }));
  //     onSuccess();
  //   } catch (err) {
  //     if (err instanceof ApiError) {
  //       onError({ errorCode: err.errorCode });
  //       return;
  //     }

  //     throw err;
  //   } finally {
  //     setIsPending(false);
  //   }
  // };

  // return { isPending, mutate };
};

export default useSignIn;