import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllProducts } from '../services/api';

export const fetchBrandsAndModels = createAsyncThunk(
    'filter/fetchBrandsAndModels',
    async () => {
        const products = await getAllProducts();
        const brands = [...new Set(products.map(product => product.brand))];
        const models = [...new Set(products.map(product => product.model))];
        return { products, brands, models };
    }
);

const initialState = {
    brands: [],
    models: [],
    filteredBrands: [],
    filteredModels: [],
    filteredProducts: [],
    status: 'idle',
    error: null,
};

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setBrands: (state, action) => {
            state.filteredBrands.includes(action.payload) 
                ? state.filteredBrands = state.filteredBrands.filter(brand => brand !== action.payload)
                : state.filteredBrands.push(action.payload)
        },
        setModels: (state, action) => {
            state.filteredModels.includes(action.payload)
                ? state.filteredModels = state.filteredModels.filter(model => model !== action.payload)
                : state.filteredModels.push(action.payload)
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchBrandsAndModels.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchBrandsAndModels.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.brands = action.payload.brands;
                state.models = action.payload.models;
                state.filteredProducts = action.payload.products; 
            })
            .addCase(fetchBrandsAndModels.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

export const { setBrands, setModels } = filterSlice.actions;
export default filterSlice.reducer;