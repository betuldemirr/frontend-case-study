import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  cartTotalPrice: 0
};

const calculateTotalPrice = (items) => {
    let totalPrice = 0;
    for (const item of items) {
      totalPrice += item.price * item.quantity;
    }
    return parseFloat(totalPrice.toFixed(2));
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
        const { id, name, price } = action.payload;
        const existingItem = state.cartItems.find(item => item.id === id);
        
        existingItem
          ? existingItem.quantity += 1
          : state.cartItems.push({ id, name, price, quantity: 1 });
        
        state.cartTotalPrice = calculateTotalPrice(state.cartItems);
    },      
    removeFromCart(state, action) {
        const { id } = action.payload;
        const existingItem = state.cartItems.find(item => item.id === id);
        
        if (existingItem) {
            state.cartItems = state.cartItems.filter(item => item.id !== id);
            state.cartTotalPrice = calculateTotalPrice(state.cartItems);
        }
    },    
    increaseItemQuantity(state, action) {
        const { id } = action.payload;
        const itemToIncrease = state.cartItems.find(item => item.id === id);

        if (itemToIncrease) {
            itemToIncrease.quantity += 1;
            state.cartTotalPrice = calculateTotalPrice(state.cartItems);
        }
    },
    decreaseItemQuantity(state, action) {
        const { id } = action.payload;
        const itemToDecrease = state.cartItems.find(item => item.id === id);

        if (itemToDecrease) {
            itemToDecrease.quantity -= 1;
            state.cartTotalPrice = calculateTotalPrice(state.cartItems);
        }
    },
  }
});

export const { addToCart, removeFromCart, increaseItemQuantity, decreaseItemQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer;