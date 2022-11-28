import React from 'react';
import { ProSidebarProvider } from 'react-pro-sidebar';
import { Link, Outlet } from 'react-router-dom';
import Banner from './Banner/Banner';
import LeftNav from './LeftNav';
import OtherCards from './OtherCards/OtherCards';
import RightNav from './RightNav';
import TopBar from './TopBar';

const Home = () => {
    return (
        <ProSidebarProvider>
            <div>
                <div className='md:hidden'>
                    <TopBar></TopBar>
                </div>
                
                <Banner></Banner>
                <OtherCards></OtherCards>
                <h1 className='text-center text-4xl bg-purple-200 font-serif py-6 border-2 underline decoration-wavy'>Find Your Product </h1>
          
                 <div className='flex bg-purple-200'>
                
                    <div className='self-start sticky top-16 hidden md:block bg-white'>
                        <LeftNav></LeftNav>
                    </div>
                    <div className='mx-auto w-full '>
                        <Outlet></Outlet>
                    </div>

                </div>
            </div>
        </ProSidebarProvider>
    );
};

export default Home;