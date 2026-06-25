import { use, useState } from "react";
import { useDispatch } from "react-redux";
import { signInRequest } from "../api/auth-api";
import { authActions } from "../store/auth-slice";

const useSignIn = () => {
  const dispatch = useDispatch();

  const [isPending, setIsPending] = useState(false);

  const mutate = async (
    data: { email: string; password: string },
    onSucces: () => void,
    onError: (err: unknown) => void,
  ) => {
    setIsPending(true);
    try {
      const { email, password } = data;
      const { token } = await signInRequest({ email, password });
      dispatch(authActions.signIn({ token }));
      onSucces();
    } catch (err) {
      onError(err);
    } finally {
      setIsPending(false);
    }
  };
  return { isPending, mutate };
};

export default useSignIn;
