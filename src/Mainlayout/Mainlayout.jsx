import React from 'react';
import Navbar from '../SharedStyle/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../SharedStyle/Footer';

const Mainlayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Mainlayout;