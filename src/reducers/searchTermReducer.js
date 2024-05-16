import { createReducer } from '@reduxjs/toolkit';
import { setSearchResults } from '../actions/searchTermActions';

const initialState = {
    results: [],
};

const searchReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(setSearchResults, (state, action) => {
            state.results = action.payload;
    });
});

export default searchReducer;