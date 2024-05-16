import React, { useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const onChange = (e) => {
        setSearchTerm(e.target.value);
        onSearch(e.target.value);
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