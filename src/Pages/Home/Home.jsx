import React from 'react';
import Container from '../../components/Shared/Container/Container';
import Banner from '../../components/Home/Banner';
import HMeals from '../../components/Home/HMeals';
import { Helmet } from 'react-helmet-async';
import HReview from '../../components/Home/HReview';
import WhyChoose from '../../components/Home/WhyChoose';

const Home = () => {
    return (

        <div>
                  <Helmet>
                    <title>Home - LocalChefBazaar</title>
                  </Helmet>
            <Banner></Banner>
            <HMeals></HMeals>
            <WhyChoose></WhyChoose>
            <HReview></HReview>
        </div>
    );
};

export default Home;