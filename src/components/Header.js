import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    const onClick = () => {
        window.location.href = '/';
    };

    return (
        <Container fluid className='px-0 bg-primary py-4'>
            <Link to="/" onClick={onClick} style={{ textDecoration: 'none', color: 'white' }}>
                ETERATION
            </Link>
        </Container>
    );
}

export default Header;
