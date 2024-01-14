// import { Reducer } from "react"
// import 
import { createSlice } from '@reduxjs/toolkit';
const initialState={
    cart:[{
        pizzaId:12,
        name:"Mediterranean",
        quantity:2,
        unitPrice:17,
        totalPrice:32,
    }],
   
}

const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        addItem(state, action){
        //    payload=newitem
        state.cart.push(action.payload)
        },
        deleteItem(state, action){
            state.cart=state.cart.filter((item)=>item.pizzaId !==action.payload)
        },
        increaseItemQuantity(state, action){
            // payload=pizzaid
            const item =state.cart.find((item)=>item.pizzaId=== action.payload)
            item.quantity++
            item.totalPrice=item.quantity * item.unitPrice
        },
        decreaseItemQuantity(state, action){
              // payload=pizzaid
              const item =state.cart.find((item)=>item.pizzaId=== action.payload)
              item.quantity--;
            //   item.totalPrice=item.quantity * item.unitPrice
        },
        clearCart(state){
            state.cart=[];

        },
    }
})
export const {
    addItem,
    deleteItem,
increaseItemQuantity,
decreaseItemQuantity,
clearCart,
}=cartSlice

export default cartSlice.reducer;