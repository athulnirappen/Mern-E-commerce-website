import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";



export const STATUSES = Object.freeze({
  SUCCESS: "SUCCESS",
  ERROR: "error",
  Loading: "LOADING",
});


const productSlice = createSlice({
    name: "PRODUCT",
    initialState: {
        data: [],
        status:STATUSES.SUCCESS
    },
    reducers: {

        setProducts: (state, action) => {
            state.data=action.payload
        },
        setStatus: (state, action) => {
            state.status=action.payload
        }
        
    }
})


export const { setProducts, setStatus } = productSlice.actions
export default productSlice.reducer



//middleware function

export const fetchAllProducts = () => {
    return async function fetchProductThunk(dispatch) {
        dispatch(setStatus(STATUSES.Loading))

        try {

            const res = await axios.get(
              "http://localhost:8000/api/product/getallproducts"
            );
            const data = await res.data.data
          
            dispatch(setProducts(data))
            dispatch(setStatus(STATUSES.SUCCESS))
            
        } catch (error) {
            console.log(error);
            dispatch(setStatus(STATUSES.ERROR))
            
        }
    }
}