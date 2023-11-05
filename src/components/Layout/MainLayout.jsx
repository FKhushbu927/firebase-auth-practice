import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Register from '../Register/Register';

const MainLayout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
          
        </div>
    );
};

export default MainLayout;