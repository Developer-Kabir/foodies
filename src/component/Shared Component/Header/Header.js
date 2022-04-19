import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';


const Header = () => {
    const [user] = useAuthState(auth);

  const handleSignOut = () =>{
    signOut(auth);
  }

    return (
        <div>
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Link to="home"> <img className='logo-img' src="https://i.ibb.co/fQ31hd6/ae1a268493aee72b59ef53170e572b8c-1.png" alt="" /> </Link>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Link className='linkstyle' to="home">Home</Link>
                                <Link className='linkstyle' to="about">About</Link>
                                <Link className='linkstyle' to="blog">Blog</Link>
                                <Link className='linkstyle' to="checkout">Checkout</Link>

                            </Nav>
                            {
                                user ?
                                    <Link className='linkstyle' to="/" onClick={handleSignOut}>Sign Out</Link>
                                    :
                                    <div className='d-lg-flex'>
                                        <Link className='linkstyle' to="/login">Log In</Link>
                                        <Link className='linkstyle' to="/signup">Sign Up</Link>
                                    </div>

                            }
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

            </div>
        </div>
    );
};

export default Header;