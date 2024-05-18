import { combineReducers } from 'redux';
import cartReducer from '../features/cartSlice';
import filterReducer from '../features/filterSlice';

const rootReducer = combineReducers({
    cart: cartReducer,
    filter: filterReducer,
});

export default rootReducer;
