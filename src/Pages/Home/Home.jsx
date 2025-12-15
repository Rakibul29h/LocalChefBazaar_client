import React from 'react';
import Container from '../../components/Shared/Container/Container';
import Banner from '../../components/Home/Banner';
import HMeals from '../../components/Home/HMeals';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HMeals></HMeals>
        </div>
    );
};

export default Home;