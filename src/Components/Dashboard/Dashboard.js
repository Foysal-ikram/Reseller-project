import React from 'react';
import Others from './Others';
import SideNav from './SideNav';

const Dashboard = () => {
    return (
        <div className='flex'>
            <div className='mr-4'>
                <SideNav></SideNav>
            </div>
            <div className='w-full md:mr-4'>
                <Others></Others>
            </div>
        </div>
    );
};

export default Dashboard;