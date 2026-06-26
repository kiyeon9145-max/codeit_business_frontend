import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth-slice";
import { signOutRequest } from "../api/auth-api";
import { removeLocalStorage } from "../utils/local-storage";

const useSignOut = () => {
  const dispatch = useDispatch();

  const { isPending, mutate } = useMutation({
    mutationFn: async () => {
      const res = await signOutRequest();
      return res;
    },
    onSettled: () => {
      dispatch(authActions.signOut());
      removeLocalStorage("token");
    },
  });

  return { isPending, mutate };
};

export default useSignOut;
