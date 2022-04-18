import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
const Footer = () => {
    return (
        <div className='ft'>
        <div className='footer'>
            <div className='link-section'>
                <h2 className='fw-bold'>Useful Link</h2>
                <div className='useful-link'>
                            <div>
                             <Link className='linkstyle text-dark' to="/home">Home</Link>
                              <Link className='linkstyle text-dark' to="/about">About</Link>
                              <Link className='linkstyle text-dark' to="/blog">Blog</Link>
                            </div>
                </div>
                </div>
                <div className='contact'>
                    <h2 className='fw-bold'>Contact Us</h2>
                    <p>Gazipur-1704 . Gazipr City Corporation</p>
                    <p>Phone : 0123456789</p>
                    <p>E-mail : abcdef@geh.com</p>
                </div>
        </div>
        <p className='text-center fw-bold'> All right reserved by Foodies  </p>
        </div>
    );
};

export default Footer;