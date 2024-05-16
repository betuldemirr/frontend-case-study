import React, { useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { searchProducts } from '../actions/searchTermActions';

const Header = () => {
    const dispatch = useDispatch();
    const [searchTerm, setSearchTermLocal] = useState('');

    const onChange = (e) => {
        const { value } = e.target;
        setSearchTermLocal(value);
        dispatch(searchProducts(value));
    };

    return (
        <Container fluid className='bg-primary py-4'>
            <Row>
                <Col xs={2}>
                    <Link to="/" className='fw-bold' style={{ textDecoration: 'none', color: 'white', fontSize: '25px' }}>
                        Eteration
                    </Link>
                </Col>
                <Col xs={8}>
                    <Form.Control
                        type="text"
                        placeholder="search a product..."
                        value={searchTerm}
                        onChange={onChange}
                        style={{ width: '100%', height: '50px' }}
                    />
                </Col>
            </Row>
        </Container>
    );
}

export default Header;