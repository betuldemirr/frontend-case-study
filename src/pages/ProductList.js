import React, { useState, useEffect } from 'react';
import { Card, Button, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { getAllProducts } from '../services/api';

const ProductList = ({ searchTerm }) => {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const products = await getAllProducts();
                setProducts(products);
            } catch (error) {
                console.error('An error occurred while fetching the products:', error);
            }
        };
        fetchProducts();
    }, []);

    useEffect(() => {
        const filterProducts = async () => {
            try {
                const allProducts = await getAllProducts();
                
                const filteredProducts = searchTerm
                    ? allProducts.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
                    : allProducts;
                setProducts(filteredProducts);
            } catch (error) {
                console.error('An error occurred while filtering the products:', error);
            }
        };
        filterProducts();
    }, [searchTerm]);

    const goToProductDetail = (productId) => {
        navigate(`/product-details/${productId}`);
    };

    const addToCart = (productId) => {
        console.log(` add to cart ${productId} `);
    };

    return (
        <div className="product-list bg-info">
            <h2 className="text-center mb-4">Products</h2>
            <Row xs={1} md={2} lg={4} className="g-4">
                {products.map(product => (
                    <Col key={product.id}>
                        <Card onClick={() => goToProductDetail(product.id)} style={{ cursor: 'pointer' }}>
                            <Card.Img variant="top" src={product.image} />
                            <Card.Body>
                                <Card.Title>{product.name}</Card.Title>
                            </Card.Body>
                            <Card.Footer>
                                <Card.Text>{product.price} ₺</Card.Text>
                                <Button onClick={() => addToCart(product.id)} variant="success" className="w-100">
                                    Add to Cart
                                </Button>
                            </Card.Footer>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default ProductList;
