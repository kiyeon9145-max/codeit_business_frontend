import { useMutation } from "@tanstack/react-query";
import { createMemo } from "../api/memo-apit";

const useMemoMutation = () => {
  const { isPending, mutate } = useMutation({
    mutationFn: async (data: { title: string; content: string }) => {
      const res = await createMemo(data);
      return res;
    },
  });

  return { isPending, mutate };
};

export default useMemoMutation;
