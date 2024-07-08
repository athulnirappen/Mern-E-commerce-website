import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.cart.find(
        (item) => item._id === action.payload._id
        
      );
      
    
      if (existingProduct) {
        state.cart = state.cart.map((item) =>
          
          item._id === action.payload._id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      } else {
        state.cart.push(action.payload);
      }
    },
    removeCart: (state, action) => {
      state.cart = state.cart.filter((item) => item._id !== action.payload);
    },
    IncrementQty: (state, action) => {
      state.cart = state.cart.map((item) =>
        item._id === action.payload._id ? { ...item, qty: item.qty + 1 } : item
      );
    },
    decrementQty: (state, action) => {
      state.cart = state.cart.map((item) =>
        item._id === action.payload._id ? { ...item, qty: item.qty - 1 } : item
      );
    },
  },
});

export const { addToCart, removeCart, IncrementQty, decrementQty } =
  cartSlice.actions;
export default cartSlice.reducer;
