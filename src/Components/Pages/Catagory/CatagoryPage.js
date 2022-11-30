import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { ProSidebarProvider } from 'react-pro-sidebar';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../../Home/BookingModal';
import LeftNav from '../../Home/LeftNav';
import TopBar from '../../Home/TopBar';
import CatagoryPageCard from './CatagoryPageCard';

const CatagoryPage = () => {
    const [selected,setSelected] = useState(null)
    const data = useLoaderData();
    console.log(data)

    return (
        <ProSidebarProvider>
            <Toaster></Toaster>
            <div><div className=' self-start sticky top-16 z-10 md:hidden'><TopBar></TopBar></div>
                <div className='flex'>
                    <div className='self-start sticky top-16 hidden md:block bg-white'>
                        <LeftNav></LeftNav>
                    </div>
                    <div className='grid w-full lg:grid-cols-3 gap-4 lg:mx-8'>
                        {
                            data.map(product => <CatagoryPageCard
                                key={product._id}
                                product={product}
                                setSelected={setSelected}
                            ></CatagoryPageCard>)
                        }
                    </div>
                </div>
                
                {selected && <BookingModal selected={selected} setSelected={setSelected}></BookingModal>}
           
            </div>
        </ProSidebarProvider>
    );
};

export default CatagoryPage;