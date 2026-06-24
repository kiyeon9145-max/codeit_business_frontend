import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";

const store = configureStore({
    reducer: {
      auth: authSlice,  
    }
});

export type StateType = ReturnType<typeof store.getState>

export default store;

