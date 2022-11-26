import React, { useContext } from 'react';
import { AuthContext } from '../../Loader/UserContext';
import { BsThreeDots } from "react-icons/bs";
import Loading from '../../Loader/Loading';
import './Home.css'

const AllProductsCard = ({ product, isLoading, refetch }) => {
    if (isLoading) {
        <Loading></Loading>
    }
    console.log(product)

    return (
        <div className='bg-white w-full max-w-lg mx-auto rounded-lg border-2 border-gray-800  p-4 mt-2 ' >
            <div className='flex justify-between'>
                <div className='flex items-center'>
                    <div className=''><img src={product.seller_img} className='h-12 rounded-lg' width={42} alt="" /></div>
                    <div className='ml-2'>
                        <h1 className='overflow-hidden text-ellipsis h-6 font-bold '>{product.seller_name}</h1>
                        <h1 className='text-xs '>{product.date}</h1>
                    </div>
                </div>
                <div>
                    <h1><BsThreeDots /></h1>
                </div>
            </div>



            <div>
                <img src={product.product_imgURL} className='w-full h-80 lg:h-48 p-6 ' alt="" />
            </div>

            <div>
                <h1>{product.productName}</h1>
                <div className='flex justify-between'>
                    <button className='mybtn '>Book Now</button>
                    <button className='mybtn '>View </button>
                </div>
            </div>
        </div>
    );
};

export default AllProductsCard;