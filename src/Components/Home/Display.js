import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AddProduct from './AddProduct';
import AllProducts from './AllProducts';
import Modal from './Modal';

const Display = () => {
    
    const { data: products = [], isLoading, refetch } = useQuery({
        queryKey: ['products'],
        queryFn: () => fetch('http://localhost:5000/products')
            .then(res => res.json())

    })


    return (
        <div>
            <AddProduct></AddProduct>
            <AllProducts></AllProducts>
            <Modal 
            refetch={refetch}
            isLoading={isLoading}
            ></Modal>
        </div>
    );
};

export default Display;