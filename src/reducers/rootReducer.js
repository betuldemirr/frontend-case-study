import { combineReducers } from 'redux';
import searchTermReducer from './searchTermReducer';

const rootReducer = combineReducers({
    searchTerm: searchTermReducer,
});

export default rootReducer;
