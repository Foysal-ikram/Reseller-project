import React from 'react';
import { ProSidebarProvider } from 'react-pro-sidebar';
import { Link, Outlet } from 'react-router-dom';
import LeftNav from './LeftNav';
import RightNav from './RightNav';
import TopBar from './TopBar';

const Home = () => {
    return (
        <ProSidebarProvider>
            <div>
                <div className='md:hidden'>
                    <TopBar></TopBar>
                </div>
                <div className='grid grid-cols-6 gap-4 bg-gray-200 '>
                    <div className='self-start sticky col-span-2 lg:col-span-1 top-16 hidden md:block'>
                        <LeftNav></LeftNav>
                    </div>
                    <div className='col-span-6 md:col-span-4 md:col-span-5'>
                        <Outlet></Outlet>
                    </div>
                   
                </div>
            </div>
        </ProSidebarProvider>
    );
};

export default Home;