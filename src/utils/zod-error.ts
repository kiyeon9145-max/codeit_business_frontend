import z from "zod";

export const parseZodError = (error: z.ZodError, field: string) => {
  return z.flattenError(error).fieldErrors[field]?.[0];
};
