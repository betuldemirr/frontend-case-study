import React, { useState, useEffect } from 'react';
import { Card, Button, Col, Row, Pagination} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { getAllProducts } from '../services/api';
import { addToCart } from '../features/cartSlice';
import { useDispatch } from 'react-redux';

const ProductList = ({ searchTerm }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 12;

    useEffect(() => {
        setCurrentPage(1);
        const filterProducts = async () => {
            try {
                const allProducts = await getAllProducts();
                
                const filteredProducts = searchTerm
                    ? allProducts.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
                    : allProducts;
                console.log("Filtered Products:", filteredProducts);
                setProducts(filteredProducts);
            } catch (error) {
                console.error('An error occurred while filtering the products:', error);
            }
        };
        filterProducts();
    }, [searchTerm]);
    
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

    const totalProducts = products.length;
    const totalPages = Math.ceil(totalProducts / productsPerPage);

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
    
    const onPaginationClick = (page) => {
        setCurrentPage(page);
    };

    const goToProductDetail = (productId) => {
        navigate(`/product-details/${productId}`);
    };

    return (
        <div className="product-list my-4">
            <Row xs={1} md={2} lg={3} xl={4} className="g-4">
                {currentProducts.map(product => (
                    <Col key={product.id}>
                        <Card>
                            <Card.Body onClick={() => goToProductDetail(product.id)} style={{ cursor: 'pointer' }}>
                                <Card.Img className='pb-4' variant="top" src={product.image} />
                                <Card.Title>{product.name}</Card.Title>
                            </Card.Body>
                            <Card.Footer>
                                <Card.Text className='text-primary fw-bold'>{product.price} ₺</Card.Text>
                                <Button onClick={() => dispatch(addToCart(product))} variant="primary" className="w-100">
                                    Add to Cart
                                </Button>
                            </Card.Footer>
                        </Card>
                    </Col>
                ))}
            </Row>
            <Row className="my-4">
                <Pagination className='d-flex justify-content-center'>
                    {Array.from({ length: totalPages }, (_, i) => (
                        <Pagination.Item key={i + 1} active={i + 1 === currentPage} onClick={() => onPaginationClick(i + 1)}>
                            {i + 1}
                        </Pagination.Item>
                    ))}
                </Pagination>
            </Row>
        </div>
    );
};

export default ProductList;