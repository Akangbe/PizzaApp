const initialState={
    cart:[{
        pizzaId:12,
        name:"Mediterranean",
        unitPrice:17,
        totalPrice:32,
    }],
   
}

const cartSlice=createslice({
    name:"cart",
    initialState,
    reducers:{
        addItem(state, action){
            // Payload=newItem
            state.cart.push(action.payload)
        },
        deleteItem(state, action){},
        increaseItemQuatity(state, action){},
        decreaseItemQuatity(state, action){},
        clearCart(state, action){},
    }
})