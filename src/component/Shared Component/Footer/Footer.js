import React from 'react';
import { NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Home from '../../Home/Home';

const Footer = () => {
    return (
        <div>

            <h2>This is footer</h2>
            <div>
                <div className='useful-link'>
                    <Link to="/home">Home</Link>
                    <NavLink path="/home" element={<Home></Home>}></NavLink>
                    <NavLink path="/home" element={<Home></Home>}></NavLink>
                    <NavLink path="/home" element={<Home></Home>}></NavLink>
                    <NavLink path="/home" element={<Home></Home>}></NavLink>
                    
                </div>
                <div className='contact'>
                    
                </div>
            </div>
        </div>
    );
};

export default Footer;