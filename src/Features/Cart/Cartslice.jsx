const initialState={
    cart:[],
   
}

const cartSlice=createslice({
    name:"cart",
    initialState,
    reducers:{
        addItem(state, action){},
        deleteItem(state, action){},
        increaseItemQuatity(state, action){},
        decreaseItemQuatity(state, action){},
        clearCart(state, action){},
    }
})