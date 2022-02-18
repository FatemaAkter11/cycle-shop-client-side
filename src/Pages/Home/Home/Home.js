import React from 'react';
import DisplayReview from '../../Review/DisplayReview';
import Banner from '../Banner/Banner';
import ContentBanner from '../ContentBanner/ContentBanner';
import FeaturedProduct from '../FeaturedProduct/FeaturedProduct';
import NewsLetter from '../NewsLetter/NewsLetter';

const Home = () => {
    return (
        <div>
            <Banner />
            <FeaturedProduct />
            <ContentBanner />
            <DisplayReview />
            <NewsLetter />
        </div>
    );
};

export default Home;