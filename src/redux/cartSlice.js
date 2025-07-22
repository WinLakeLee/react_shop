import { createSlice } from "@reduxjs/toolkit"

const cart = createSlice({
  name: 'cart',
  initialState: [
    {id: 0, title: 'apple', count: 3},
    {id: 2, title: 'watermelon', count: 10}
  ],
  reducers: {
    addCount: (state, action) =>{
      state[action.payload].count ++;
    },
    decCount: (state, action) =>{
      state[action.payload].count --;
    }
  }
})

export default cart;