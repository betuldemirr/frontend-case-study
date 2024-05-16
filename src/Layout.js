import React from 'react';
import Header from './components/Header';
import Cart from './components/Cart';
import { Container, Row, Col } from 'react-bootstrap';

const Layout = ({ children, onSearch }) => {
    return (
        <>
            <Header onSearch={onSearch}/>
            <Container fluid>
                <Row>
                    <Col xs={10}>
                        {children}
                    </Col>
                    <Col xs={2}>
                        <Cart />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Layout;