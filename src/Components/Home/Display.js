import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast';
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
            <Toaster></Toaster>
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