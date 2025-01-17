import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    wishlist: [],
  },
  reducers: {
    addToWishlist: (state, action) => {
       state.wishlist.push(action.payload); 
      },
      removeWishlist: (state, action) => {
        state.wishlist=  state.wishlist.filter((item)=>item._id !==action.payload)
      }
  },
});


export const { addToWishlist,removeWishlist } = wishlistSlice.actions
export default wishlistSlice.reducer
