import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Link to="home"> <img className='logo-img' src="https://i.ibb.co/fQ31hd6/ae1a268493aee72b59ef53170e572b8c-1.png" alt=""/> </Link>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Link className='linkstyle'  to="home">Home</Link>
                                <Link className='linkstyle' to="about">About</Link>
                                <Link className='linkstyle' to="checkout">Checkout</Link>
                                
                            </Nav>
                            <Nav>
                                <Link className='linkstyle' to="login">Login</Link>
                                <Link className='linkstyle' to="signup">Signup</Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

            </div>
        </div>
    );
};

export default Header;