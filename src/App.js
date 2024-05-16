import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import { Provider } from 'react-redux';
import store from './store/index';

const App = () => {
  return (
    <Provider store={store}>
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<ProductList />} />
                    <Route path="/product-details/:id" element={<ProductDetail />} />
                </Routes>
            </Layout>
        </Router>
    </Provider>
  );
}

export default App;