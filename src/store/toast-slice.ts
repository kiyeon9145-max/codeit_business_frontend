import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type ToastSliceStateType = {
  toast: {
    meesage: string,
    code: number;
  } | null;
};

const initialState: ToastSliceStateType = {
    toast: null,
};
const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    },
  },
);

export const toastActions = toastSlice.actions;
export default toastSlice.reducer;
