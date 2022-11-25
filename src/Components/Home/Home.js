import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import LeftNav from './LeftNav';

const Home = () => {
    return (
        <div className='grid grid-cols-6 gap-4'>
            <div className='self-start sticky top-16 z-0 top-16'>
                <LeftNav></LeftNav>
            </div>
            <div className='col-span-4'>
                <Outlet></Outlet>
            </div>
            <div>
                asdsadasdsadasdsad
            </div>
        </div>
    );
};

export default Home;