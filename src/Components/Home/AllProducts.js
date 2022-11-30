import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { ProSidebarProvider } from 'react-pro-sidebar';
import AllProductsCard from './AllProductsCard';
import BookingModal from './BookingModal';
import LeftNav from './LeftNav';
import TopBar from './TopBar';

const AllProducts = () => {
    const [selected, setSelected] = useState(null)
    const { data: products = [], isLoading, refetch } = useQuery({
        queryKey: ['products'],
        queryFn: () => fetch('https://reseller-server-lime.vercel.app/products')
            .then(res => res.json())

    })
    console.log(selected)
    return (
        <ProSidebarProvider>
            <Toaster></Toaster>
            <div>
                <div className=' self-start sticky top-16 z-10 md:hidden'><TopBar></TopBar></div>
                <div className='flex'>
                    <div className='hidden lg:block self-start sticky top-16'><LeftNav></LeftNav></div>
                    <div className='grid w-full lg:grid-cols-3 gap-4 lg:mx-8	'>
                        {
                            products.map(product => <AllProductsCard
                                key={product._id}
                                product={product}
                                isLoading={isLoading}
                                refetch={refetch}
                                setSelected={setSelected}
                            ></AllProductsCard>)
                        }
                    </div>
                </div>

                {selected && <BookingModal selected={selected} setSelected={setSelected}></BookingModal>}
            </div>
        </ProSidebarProvider>
    );
};

export default AllProducts;