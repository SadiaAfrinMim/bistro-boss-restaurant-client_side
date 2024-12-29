import React from 'react';
import Banner from '../Component/Banner';
import Category from '../Component/Category';
import PopularMenu from '../Component/PopularMenu';
import Featured from '../Component/Featured/Featured';
import Testomonials from '../Component/Testomonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testomonials></Testomonials>
        </div>
    );
};

export default Home;