import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type AuthSliceStateType = {
    token: string | undefined;
}

const initialState: AuthSliceStateType = {
    token: undefined
}
const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        signIn: (state, action: PayloadAction<string>) => {
            state.token = action.payload
        },
        signOut: (state) => {
            state.token = null;
        },
    }
})

export const authActions = authSlice.actions;
export default authSlice.reducer;
