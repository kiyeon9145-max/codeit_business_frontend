import { useState } from "react";
import { ApiError, signInRequest } from "../api/auth-api";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth-slice";

const useSignIn = () => {
  const dispatch = useDispatch();

  const [isPending, setIsPending] = useState(false);

  const mutate = async (
    data: { email: string; password: string },
    onSuccess: () => void,
    onError: (err: unknown) => void,
  ) => {
    setIsPending(true);

    try {
      const { email, password } = data;
      const { token } = await signInRequest({ email, password });
      dispatch(authActions.signIn({ token }));
      onSuccess();
    } catch (err) {
      if (err instanceof ApiError) {
        onError({ errorCode: err.errorCode });
        return;
      }

      throw err;
    } finally {
      setIsPending(false);
    }
  };

  return { isPending, mutate };
};

export default useSignIn;
