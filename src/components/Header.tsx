import logo from '../img/logo.svg.png'
import { Form, Nav, Navbar } from "react-bootstrap";
import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useQuery } from "../router/hooks";

export function Header(): JSX.Element {
    const query = useQuery();
    const [searchValue, setSearchValue] = useState(query.get('search') || '');
    const history = useHistory();
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggle = () => setIsOpen(!isOpen);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        history.push(`/?search=${searchValue}`)
    };

    const handleChange = (e: any) => {
        setSearchValue(e.target.value)
    }

    return (
        <>
            <Navbar bg="dark" variant="dark"
                expand="lg"
                className="header container-xxl">
                <Navbar.Brand href="#">
                    <img className="logo" src={logo} alt={'logo'} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" onClick={toggle} />
                <Navbar.Collapse id="navbarScroll"
                    className={isOpen ? 'menu_dropdown' : 'menu'}>
                    <Nav
                        className="mr-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll>
                        <Link to='/starwars' className="menu__link">
                            Home
                        </Link>
                        <Link to='/favorite' className="menu__link">
                            Favorite
                        </Link>
                    </Nav>
                    <Form className="d-flex form" onSubmit={handleSubmit}>
                        <input
                            className="form__search mr-2 "
                            type="text"
                            placeholder='Search'
                            value={searchValue}
                            onChange={handleChange} />
                        <input
                            type="submit"
                            className="form__btn btn btn-outline-warning "
                            value='Search'
                        />
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
};