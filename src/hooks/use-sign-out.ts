import { useDispatch } from "react-redux";
import { authActions } from "../store/auth-slice";
import { useMutation } from "@tanstack/react-query";
import { signOutRequest } from "../api/auth-api";

const useSignOut = () => {
  const dispatch = useDispatch();

  const { isPending, mutate } = useMutation({
    mutationFn: () => signOutRequest(),
    onSuccess: () => {
      dispatch(authActions.signOut());
    },
  });

  return { isPending, mutate };
};

export default useSignOut;
