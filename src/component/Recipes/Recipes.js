import React, { useEffect, useState } from 'react';
import Recipe from '../Recipe/Recipe';
import './Recipes.css'

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        fetch('recipe.json')
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, [])
    return (
        <div id='recipe' className='recipes'>

            <h2 className='fw-bold text-center'>
                Foodies Populer Recipes/Item
            </h2>

            <div className='recipes-container'>
                {
                    recipes.map(recipe => <Recipe

                        key={recipe.id}
                        recipe={recipe}

                    ></Recipe>)
                }
            </div>

        </div>
    );
};

export default Recipes;