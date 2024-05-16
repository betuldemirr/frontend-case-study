import { createAction } from '@reduxjs/toolkit';
import { getAllProducts } from '../services/api';

export const searchProducts = (searchTerm) => async (dispatch) => {
  try {
    const results = await getAllProducts(searchTerm);
    dispatch(setSearchResults(results));
  } catch (error) {
    console.error('An error occurred while searching:', error);
  }
};

export const setSearchResults = createAction('search/setResults');