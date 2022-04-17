import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Home from '../../Home/Home';
import './Header.css'

const Header = () => {
    return (
        <div> 
            <div>
                <Navbar className='my-nav' bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">FooDiEs</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link to="#home" element={<Home></Home>}>Home</Nav.Link>
                           
                        </Nav>
                    </Container>
                </Navbar>

            </div>
        </div>
    );
};

export default Header;