import React, { useState } from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
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
        <Container fluid className='bg-primary py-4'>
            <Row>
                <Col xs={2}>
                    <Link to="/" className='fw-bold' style={{ textDecoration: 'none', color: 'white', fontSize: '25px' }}>
                        Eteration
                    </Link>
                </Col>
                <Col xs={6} className='d-flex'>
                    <Form.Control
                        type="text"
                        placeholder="search a product..."
                        value={searchTerm}
                        onChange={onChange}
                        onKeyPress={onKeyPress}
                        style={{ width: '100%', height: '50px' }}
                    />
                    <Button onClick={() => onSearch(searchTerm)} variant="light">Search</Button>
                </Col>
                <Col xs={2}>
                    <p>Total Price: {cartTotalPrice}</p>
                </Col>
            </Row>
        </Container>
    );
}

export default Header;