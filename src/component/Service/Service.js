import React from 'react';
import './Service.css'

const Service = ({service}) => {
    const {name, price, picture, Description} = service;
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
        </div>
    );
};

export default Service;
