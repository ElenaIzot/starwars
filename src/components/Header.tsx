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

    return (<> <nav className="header navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <Link to='/' className="navbar-brand">
                <img className="logo" src={logo} alt={'logo'} />
            </Link>
            <button className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                onClick={toggle}>
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className={isOpen ? 'collapse navbar-collapse'
                : 'navbar-collapse'}
                id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link to='/' className="nav-link active">
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/favorite' className="nav-link">
                            Favorite
                        </Link>
                    </li>
                </ul>
                <form className="d-flex" onSubmit={handleSubmit}>
                    <input
                        className="form__search me-2 "
                        type="text"
                        placeholder="Search"
                        aria-label="Search"
                        value={searchValue}
                        onChange={handleChange} />
                    <input
                        type="submit"
                        className="btn btn-outline-warning "
                        value='Search'
                    />
                </form>
            </div>
        </div>
    </nav>




        {/* <Navbar bg="dark" variant="dark"
                expand="lg"
                className="header container-xxl">
                <Navbar.Brand>
                    <Link to='/' className="menu__link">
                        <img className="logo" src={logo} alt={'logo'} />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" onClick={toggle} />
                <Navbar.Collapse id="navbarScroll"
                    className={isOpen ? 'menu_dropdown' : 'menu'}>
                    <Nav
                        className="menu__item mr-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll>
                        <Link to='/' className="menu__link">
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
            </Navbar> */}
    </>
    )
};