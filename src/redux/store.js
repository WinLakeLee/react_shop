import { configureStore, createSlice } from "@reduxjs/toolkit";
import cart from "./cartSlice";

export const {incCount, decCount, addItem, removeItem} = cart.actions
export default configureStore({
  reducer: {
    cart: cart.reducer,
  }
})