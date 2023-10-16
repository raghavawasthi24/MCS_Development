import { configureStore } from "@reduxjs/toolkit";
import personSlice from "./slices/personSlice";

const store = configureStore({
  reducer: {
   person:personSlice
  },
});

export default store;