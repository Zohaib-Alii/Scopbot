import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./models/user";

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});
