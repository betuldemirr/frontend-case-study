import React, { useState } from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = ({ onSearch }) => {
    const cartTotalPrice = useSelector(state => state.cart.cartTotalPrice);
    const [searchTerm, setSearchTerm] = useState('');

    const onChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const onKeyPress = (e) => {
        if (e.key === 'Enter') {
            onSearch(searchTerm);
            setSearchTerm('');
        }
    };

    return (
        <Container fluid className='Header bg-primary p-4'>
            <Row>
                <Col xs={3} lg={3}>
                    <Link to="/" className='fw-bold' style={{ textDecoration: 'none', color: 'white', fontSize: '25px' }}>
                        Eteration
                    </Link>
                </Col>
                <Col xs={6} lg={5} className='search-wrapper'>
                    <Form.Control
                        type="text"
                        placeholder="search a product..."
                        className='input'
                        value={searchTerm}
                        onChange={onChange}
                        onKeyPress={onKeyPress}
                    />
                    <Button className='btn' onClick={() => onSearch(searchTerm)} variant="light">Search</Button>
                </Col>
                <Col xs={3} lg={4} className='total-price-wrapper'>
                    <FontAwesomeIcon icon={faCartShopping} />
                    <span>{cartTotalPrice} ₺</span>
                </Col>
            </Row>
        </Container>
    );
}

export default Header;