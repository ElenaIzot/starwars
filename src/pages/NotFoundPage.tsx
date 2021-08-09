import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NotFoundPage() {
    return (
        <Container className='container-xxl section-content'>
            <h1>404 - Not Found!</h1>
            <Link to="/">
                Go Home
            </Link>
        </Container>
    )
};

export default NotFoundPage;