import React from 'react';
import Banner from '../Banner/Banner';
import ContentBanner from '../ContentBanner/ContentBanner';
import FeaturedProduct from '../FeaturedProduct/FeaturedProduct';

const Home = () => {
    return (
        <div>
            <Banner />
            <FeaturedProduct />
            <ContentBanner />
        </div>
    );
};

export default Home;