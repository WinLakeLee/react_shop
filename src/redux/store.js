import { configureStore, createSlice } from "@reduxjs/toolkit";
import cart from "./cartSlice";

export const {addCount, decCount} = cart.actions
export default configureStore({
  reducer: {
    cart: cart.reducer,
  }
})