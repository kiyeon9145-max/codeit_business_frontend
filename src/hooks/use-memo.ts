import { useSelector } from "react-redux";
import type { StateType } from "../store/store";
import { useQuery } from "@tanstack/react-query";
import { getMemos } from "../api/memo-apit";

const useMemoService = () => {
  const token = useSelector((state: StateType) => state.auth.token);

  const {
    data: memos,
    isLoading,
    error,
  } = useQuery({
    enabled: token !== null,
    queryKey: ["memos", token],
    queryFn: async () => {
      const { memos } = await getMemos();
      return memos;
    },
  });

  return { memos: memos ?? [], isLoading, error };
};

export default useMemoService;
