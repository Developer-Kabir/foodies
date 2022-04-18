import React from 'react';
import './Recipe.css'

const Recipe = ({recipe}) => {
    const {name, price, picture} = recipe;
    return (
        <div>
            <div className='single-recipe'>
            <div className='recipe-img'>
                <img className='img-fluid' src={picture} alt="" />
            </div>
            <div className='recipe-info'>
                <h4>{name}</h4>
                <h5>Price : $ {price}</h5>
            </div>
        </div>
        </div>
    );
};

export default Recipe;