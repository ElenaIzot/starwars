import logo from '../img/logo.svg.png'
import { Form, Nav, Navbar } from "react-bootstrap";
import { Link , useHistory} from 'react-router-dom';
import { useState } from 'react';
import { useQuery } from "../router/hooks";

export function Header(): JSX.Element {
    let query = useQuery();
    let [searchValue, setSearchValue] = useState(query.get('search') || '');
    let history = useHistory();

    const handleSubmit = (e: any) => {
        e.preventDefault();
        history.push(`/?search=${searchValue}`)
    };

    const handleChange = (e: any) =>{
        setSearchValue(e.target.value)
        console.log(e.target.value)
    }

    return (
        <>
            <Navbar className="header" bg="dark" variant="dark">
                <Navbar.Brand href="#">
                    <img className="logo" src={logo} alt={'logo'} />
                </Navbar.Brand>
                <Navbar.Collapse className="menu">
                    <Nav
                        className="menu mr-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll>
                            <Link to='/' className="menu__link">Главная</Link>
                            <Link to='/favorite' className="menu__link">
                                Избранное
                            </Link>
                    </Nav>
                    <Form className="d-flex" onSubmit={handleSubmit}>
                        <input 
                            className="mr-2"
                            type="text" 
                            placeholder='search'
                            value={searchValue}
                            onChange={handleChange}
                        />
                        <input 
                            type="submit" 
                            className="btn btn-outline-warning"
                            value='Search'
                        />
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
};