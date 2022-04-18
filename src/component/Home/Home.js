import React from 'react';
import Banner from '../Banner/Banner';
import Recipes from '../Recipes/Recipes';
import Services from '../Services/Services';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Recipes></Recipes>
        </div>
    );
};

export default Home;