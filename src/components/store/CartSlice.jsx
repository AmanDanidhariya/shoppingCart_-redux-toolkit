import {createSlice} from "@reduxjs/toolkit"


const CartSlice = createSlice({
    name: 'cart',
    initialState:[],
    reducer:{
        add(state , action){
             state.push(action.payload)
        }
    } 

});
export const {add} = CartSlice.action; 
export default CartSlice.reducer;