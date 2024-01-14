import { configureStore } from "@reduxjs/toolkit";
import useReducer from "../User/userSlice";
import cartReducer from "../Cart/Cartslice";
// import  CaseReducer  from "@reduxjs/toolkit";
const store = configureStore({
  reducer: {
    user: useReducer,
    cart: cartReducer,
  },
});
export default store;
