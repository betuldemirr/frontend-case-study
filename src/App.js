import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import store from './store/index';
import { Provider } from 'react-redux';

const App = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const onSearch = (searchTerm) => {
        setSearchTerm(searchTerm);
    };

    return (
        <Provider store={store}>
            <Router>
                <Layout onSearch={onSearch}>
                    <Routes>
                        <Route path="/" element={<ProductList searchTerm={searchTerm} />} />
                        <Route path="/product-details/:id" element={<ProductDetail />} />
                    </Routes>
                </Layout>
            </Router>
        </Provider>
    );
}

export default App;