import axios from 'axios';

const apiUrl = 'https://5fc9346b2af77700165ae514.mockapi.io/products';

export const getAllProducts = async () => {
    try {
        const response = await axios.get(apiUrl);
        return response.data;
    } catch (error) {
        console.error('An error occurred while fetching the products:', error);
        throw error;
    }
};

export const getProductById = async (productId) => {
    try {
        const response = await axios.get(`${apiUrl}/${productId}`);
        return response.data;
    } catch (error) {
        console.error(`An error occurred while fetching product (${productId}):`, error);
        throw error;
    }
};