import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { ProSidebarProvider } from 'react-pro-sidebar';
import AllProductsCard from './AllProductsCard';
import LeftNav from './LeftNav';

const AllProducts = () => {
    const { data: products = [], isLoading, refetch } = useQuery({
        queryKey: ['products'],
        queryFn: () => fetch('http://localhost:5000/products')
            .then(res => res.json())

    })
    console.log(products)

    return (
        <ProSidebarProvider>
            <div className='flex'>
                <div className='self-start sticky top-16'><LeftNav></LeftNav></div>
                <div className='grid w-full lg:grid-cols-3 gap-4 lg:mx-8	'>
                    {
                        products.map(product => <AllProductsCard
                            key={product._id}
                            product={product}
                            isLoading={isLoading}
                            refetch={refetch}
                        ></AllProductsCard>)
                    }
                </div>
            </div>
        </ProSidebarProvider>
    );
};

export default AllProducts;