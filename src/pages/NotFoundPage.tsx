import React from 'react';
import { Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

function NotFoundPage() {
    let location = useLocation();

    return (
        <Container className='container-xxl section-content notfoundpage'>
            <h1 className='section-content__title'>404 - Not Found!</h1>
            <p className='section-content__text'>
                This page does not exist.
            </p>
            <Link to="/" className="section-content__link">
                Go Home
            </Link>
        </Container>
    )
};

export default NotFoundPage;