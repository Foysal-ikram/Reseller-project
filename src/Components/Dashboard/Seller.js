import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Toaster } from 'react-hot-toast';
import Loading from '../../Loader/Loading';
import SellerCard from './SellerCard';

const Seller = () => {

    const { data: sellers = [], isLoading, refetch } = useQuery({
        queryKey: ['sellers'],
        queryFn: () => fetch('http://localhost:5000/sellers')
            .then(res => res.json())

    })

    console.log(sellers)
    if (isLoading) {
        <Loading></Loading>
    }

    return (
        <div className="overflow-x-auto">
            <Toaster></Toaster>
            <h1 className='text-center text-4xl py-4 font-serif'>Seller Page</h1>
            <table className="table table-zebra w-full">

                <thead>
                    <tr>
                        <th>index</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th className='text-center'>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        sellers.map((seller, i) => <SellerCard
                            key={seller._id}
                            i={i + 1}
                            seller={seller}
                            refetch={refetch}
                            isLoading={isLoading}
                        ></SellerCard>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Seller;