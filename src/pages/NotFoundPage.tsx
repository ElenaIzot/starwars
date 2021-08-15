import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NotFoundPage(): JSX.Element {

    return (
        <Container className='container-xxl section-content notfoundpage'>
            <h1 className='section-content__title'>404 - Not Found!</h1>
            <p className='section-content__text'>
                The page you requested may have been moved or deleted.
                It is also possible that you made a small typo when entering the request.
            </p>
            <p className='section-content__text'>
                Please use the navigation or the search form to find the information you are interested in.
            </p>
            <Link to="/"
                className="section-content__link section-content__link_large">
                Go Home
            </Link>
        </Container>
    )
};

export default NotFoundPage;