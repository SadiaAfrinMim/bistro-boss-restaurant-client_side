import React from 'react';
import Banner from '../Component/Banner';
import Category from '../Component/Category';
import PopularMenu from '../Component/PopularMenu';
import Featured from '../Component/Featured/Featured';
import Testomonials from '../Component/Testomonials';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
              <Helmet>
   <title>Bistro Boss || Home</title>
                        </Helmet>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testomonials></Testomonials>
        </div>
    );
};

export default Home;