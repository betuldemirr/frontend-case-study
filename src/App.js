import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';

const App = () => {
  return (
    <Router>
        <Layout>
            <Routes>
                <Route path="/" element={<ProductList />} />
                <Route path="/product-details/:id" element={<ProductDetail />} />
            </Routes>
        </Layout>
    </Router>
  );
}

export default App;