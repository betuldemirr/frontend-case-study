import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';

const App = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const onSearch = (searchTerm) => {
        setSearchTerm(searchTerm);
    };

    return (
        <Router>
            <Layout onSearch={onSearch}>
                <Routes>
                    <Route path="/" element={<ProductList searchTerm={searchTerm} />} />
                    <Route path="/product-details/:id" element={<ProductDetail />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
