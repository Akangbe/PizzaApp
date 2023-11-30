const initialState={
    cart:[{
        pizzaId:12,
        name:"Mediterranean",
        quatity:2,
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
        deleteItem(state, action){
            state.cart=state.cart.filter((item)=>item.pizzaId !==action.payload)
        },
        increaseItemQuatity(state, action){
            // payload=pizzaid
            const item =state.cart.find((item)=>item.pizzaId=== action.payload)
            item.quatity++
            item.totalPrice=item.quatity * item.unitPrice
        },
        decreaseItemQuatity(state, action){
              // payload=pizzaid
              const item =state.cart.find((item)=>item.pizzaId=== action.payload)
              item.quatity--;
            //   item.totalPrice=item.quatity * item.unitPrice
        },
        clearCart(state, action){},
    }
})