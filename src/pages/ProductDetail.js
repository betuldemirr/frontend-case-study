import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../services/api';
import { Card, Col, Row, Button } from 'react-bootstrap';
import { addToCart } from '../features/cartSlice';
import { useDispatch } from 'react-redux';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const product = await getProductById(id);
                setProduct(product);
            } catch (error) {
                console.error(`An error occurred while fetching product (${id}):`, error);
            }
        };
        fetchProduct();
    }, [id]);

    return (
        <div className="product-detail">
            {product && (
                <Card>
                    <Row>
                        <Col md={6}>
                            <Card.Img variant="top" src={product.image} />
                        </Col>
                        <Col md={6}>
                            <Card.Body>
                                <Card.Title>{product.name}</Card.Title>
                                <Card.Text>{product.description}</Card.Text>
                                <Card.Text>Price: {product.price}</Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Button onClick={() => dispatch(addToCart(product))} variant="success" className="w-100">
                                    Add to Cart
                                </Button>
                            </Card.Footer>
                        </Col>
                    </Row>
                </Card>
            )}
        </div>
    );
}

export default ProductDetail;