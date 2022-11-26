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
                <div className='flex'>
                    <div className='self-start sticky top-16 hidden md:block'>
                        <LeftNav></LeftNav>
                    </div>
                    <div className='mx-auto '>
                        <Outlet></Outlet>
                    </div>
                   
                </div>
            </div>
        </ProSidebarProvider>
    );
};

export default Home;