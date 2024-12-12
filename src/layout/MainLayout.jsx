import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../pages/Home/common/Navbar';
import Footer from '../pages/Home/common/Footer';

const MainLayout = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar/>
            <Outlet />
            <Footer/> 
        </div>
    );
};

export default MainLayout;