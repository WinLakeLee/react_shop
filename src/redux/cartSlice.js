import { createSlice } from "@reduxjs/toolkit"
import { incCount } from "./store";

const cart = createSlice({
  name: 'cart',
  initialState: [
    { id: 0, title: 'apple', count: 3 },
    { id: 2, title: 'watermelon', count: 10 }
  ],
  reducers: {
    incCount: (state, action) => {
      state[action.payload].count++;
    },
    decCount: (state, action) => {
      state[action.payload].count--;
    },
    addItem: (state, action) => {
      // state에서 data.id 일치하는지 찾은 후 index를 반환
      let index =  state.findIndex(data => {
        return data.id == action.payload.id
      })
      if(index !== -1) {
        state[index].count++
      } else {
        state.push(action.payload)
      }
    },
    removeItem: (state, action) => {
      let index =  state.findIndex(data => {
        return data.id == action.payload.id
      })
      if(index !== -1) {
        console.log('없는 상품');
      } else {
        console.log(index);
        state.splice(index, 1)
      }
    }
  }
})

export default cart;