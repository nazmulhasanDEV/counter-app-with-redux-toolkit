import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/slices/counterSlice";

const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});

export default store;
