import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { ProSidebarProvider } from 'react-pro-sidebar';
import { useLoaderData } from 'react-router-dom';
import LeftNav from '../../Home/LeftNav';
import CatagoryPageCard from './CatagoryPageCard';

const CatagoryPage = () => {
    const data = useLoaderData();
    console.log(data)




    return (
        <ProSidebarProvider>
            <div className='flex'>
                <div className='self-start sticky top-16 hidden md:block bg-white'>
                    <LeftNav></LeftNav>
                </div>
                <div className='grid md:grid-cols-2 lg:grid-cols-2  gap-4 mx-8	'>
                    {
                        data.map(product => <CatagoryPageCard
                            key={product._id}
                            product={product}
                        ></CatagoryPageCard>)
                    }

                </div>
            </div>
        </ProSidebarProvider>
    );
};

export default CatagoryPage;