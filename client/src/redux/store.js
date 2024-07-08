import { configureStore } from "@reduxjs/toolkit";
import ProductReduer from './productSlice'
import CartReducer from './cartSlice'
import CategoryReducer from './categorySlice'
import SearchReducer from './searchSlice'
import wishlistReducer from './wishlistSlice'



const store = configureStore({
    reducer: {
        product: ProductReduer,
        wishlist:wishlistReducer,
        cart: CartReducer,
        category: CategoryReducer,
        search:SearchReducer
    }
})



export default store