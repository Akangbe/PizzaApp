import { configureStore } from "@reduxjs/toolkit";
import useReducer from "../User/userSlice";
const store = configureStore({
  reducer: {
    user: useReducer,
  },
});
export default store;
