import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { getLocalStorage } from "../utils/local-storage";

type AuthSliceStateType = {
  token: string | undefined;
};

const initialState: AuthSliceStateType = {
  token: getLocalStorage("token"),
};
const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    signIn: (state, action: PayloadAction<{ token: string }>) => {
      state.token = action.payload.token;
    },
    signOut: (state) => {
      state.token = null;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
