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
        <div className="product-detail my-4">
            {product && (
                <Card>
                    <Row>
                        <Col lg={6}>
                            <Card.Img variant="top" src={product.image} />
                        </Col>
                        <Col lg={6}>
                            <Card.Body>
                                <Card.Title>{product.name}</Card.Title>
                                <Card.Text>{product.description}</Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Row>
                                    <Col xs={6}>
                                        <Card.Text className='text-primary text-center fw-bold'>Price: {product.price} ₺</Card.Text>
                                    </Col>
                                    <Col xs={6}>
                                        <Button onClick={() => dispatch(addToCart(product))} variant="primary" className="w-100 h-100">
                                            Add to Cart
                                        </Button>
                                    </Col>
                                </Row>
                            </Card.Footer>
                        </Col>
                    </Row>
                </Card>
            )}
        </div>
    );
}

export default ProductDetail;