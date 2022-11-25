import React from 'react';
import { ProSidebarProvider } from 'react-pro-sidebar';
import { Link, Outlet } from 'react-router-dom';
import LeftNav from './LeftNav';
import RightNav from './RightNav';

const Home = () => {
    return (
        <ProSidebarProvider>
            <div className='grid grid-cols-6 gap-4 bg-gray-200'>
                <div className='self-start sticky  top-16 '>
                    <LeftNav></LeftNav>
                </div>
                <div className='col-span-4'>
                    <Outlet></Outlet>
                </div>
                <div className='self-start sticky  top-16 '>
                    <RightNav></RightNav>
                </div>
            </div>
        </ProSidebarProvider>
    );
};

export default Home;