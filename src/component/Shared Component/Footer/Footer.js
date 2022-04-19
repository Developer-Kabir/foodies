import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
const Footer = () => {
    return (
        <div className='ft'>
        <div className='footer'>
            <div className='text-center'>
                <img className='img-fluid' height={180} width={300} src="https://i.ibb.co/fQ31hd6/ae1a268493aee72b59ef53170e572b8c-1.png" alt=""/>
                <h2 className='fw-bold'>FooDiEs</h2>
            </div>
            <div className='link-section'>
                <h2 className='fw-bold text-success'>Useful Link</h2>
                <div className='useful-link'>
                            
                             <div>
                             <Link className='linkstyle text-dark' to="/home">Home</Link>
                             </div>
                              <div><Link className='linkstyle text-dark' to="/about">About</Link></div>
                              <div>
                              <Link className='linkstyle text-dark' to="/blog">Blog</Link>
                              </div>
                            
                </div>
                </div>
                <div className='contact'>
                    <h2 className='fw-bold text-success'>Contact Us</h2>
                    <p className='fw-bold'>Gazipur-1704 . Gazipr City Corporation</p>
                    <p className='fw-bold'>Phone : 0123456789</p>
                    <p className='fw-bold'>E-mail : foodies@abc.com</p>
                </div>
        </div>
        <p className='text-center fw-bold bg-success'> All right reserved by Foodies © 2022 </p>
        </div>
    );
};

export default Footer;