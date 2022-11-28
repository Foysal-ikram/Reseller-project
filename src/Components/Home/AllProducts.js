import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AllProductsCard from './AllProductsCard';

const AllProducts = () => {
    const { data: products = [], isLoading, refetch } = useQuery({
        queryKey: ['products'],
        queryFn: () => fetch('http://localhost:5000/products')
            .then(res => res.json())

    })
    console.log(products)

    return (
        <div className='grid  lg:grid-cols-3 gap-4 lg:mx-8	'>
            {
                products.map(product=><AllProductsCard
                key={product._id}
                product={product}
                isLoading={isLoading}
                refetch={refetch}
                ></AllProductsCard>)
            }
        </div>
    );
};

export default AllProducts;