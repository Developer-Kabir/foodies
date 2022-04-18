import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { name, price, picture, Description } = service;
    return (
        <div className='single-service'>
            <div className='service-img'>
                <img className='img-fluid' src={picture} alt="" />
            </div>
            <div className='service-info'>
                <h4>{name}</h4>
                <h5>Price : $ {price}</h5>
            </div>
            <div>
                <p className='p-3'>{Description}</p>
            </div>

                <Button className='btnbtn' variant="secondary" size="lg">
                    <Link className='c-link' to="/checkout">Go for Checkout</Link>
                </Button>
        </div>
        
        

    );
};

export default Service;
