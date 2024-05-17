import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: localStorage.getItem("cartTotalPrice")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartTotalPrice: localStorage.getItem("cartTotalPrice")
    ? parseFloat(localStorage.getItem("cartTotalPrice"))
    : 0,
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

        localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        localStorage.setItem('cartTotalPrice', state.cartTotalPrice.toString());
    },      
    removeFromCart(state, action) {
        const { id } = action.payload;
        const existingItem = state.cartItems.find(item => item.id === id);
        
        if (existingItem) {
            state.cartItems = state.cartItems.filter(item => item.id !== id);
            state.cartTotalPrice = calculateTotalPrice(state.cartItems);
        }
        localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        localStorage.setItem('cartTotalPrice', state.cartTotalPrice.toString());
    },    
    increaseItemQuantity(state, action) {
        const { id } = action.payload;
        const itemToIncrease = state.cartItems.find(item => item.id === id);

        if (itemToIncrease) {
            itemToIncrease.quantity += 1;
            state.cartTotalPrice = calculateTotalPrice(state.cartItems);
        }
        localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        localStorage.setItem('cartTotalPrice', state.cartTotalPrice.toString());
    },
    decreaseItemQuantity(state, action) {
        const { id } = action.payload;
        const itemToDecrease = state.cartItems.find(item => item.id === id);

        if (itemToDecrease) {
            itemToDecrease.quantity -= 1;
            state.cartTotalPrice = calculateTotalPrice(state.cartItems);
        }
        localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        localStorage.setItem('cartTotalPrice', state.cartTotalPrice.toString());
    },
  }
});

export const { addToCart, removeFromCart, increaseItemQuantity, decreaseItemQuantity } = cartSlice.actions;

export default cartSlice.reducer;