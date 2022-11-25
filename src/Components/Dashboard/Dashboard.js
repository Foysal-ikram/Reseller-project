import React from 'react';
import { Toaster } from 'react-hot-toast';
import Others from './Others';
import SideNav from './SideNav';

const Dashboard = () => {
    return (
        <div className='flex'>
            <div className='mr-4 self-start sticky top-16 z-0 top-16'>
                <Toaster></Toaster>
                <SideNav></SideNav>
            </div>
            <div className='w-full md:mr-4'>
                <Others></Others>
            </div>
        </div>
    );
};

export default Dashboard;