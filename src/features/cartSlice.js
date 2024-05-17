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
    removeFromCart(state, action) {},
    increaseItemQuantity(state, action) {},
    decreaseItemQuantity(state, action) {},
  }
});

export const { addToCart, removeFromCart, increaseItemQuantity, decreaseItemQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer;