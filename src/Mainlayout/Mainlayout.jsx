import React from 'react';
import Navbar from '../SharedStyle/Navbar';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../SharedStyle/Footer';

const Mainlayout = () => {
        const location = useLocation()
        const noHeaderFooter = location.pathname.includes('/login') || location.pathname.includes('/signup')
    return (
        <div>
           {noHeaderFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
           {noHeaderFooter ||  <Footer></Footer>}
        </div>
    );
};

export default Mainlayout;