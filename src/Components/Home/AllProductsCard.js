import React, { useContext } from 'react';
import { AuthContext } from '../../Loader/UserContext';
import { BsThreeDots } from "react-icons/bs";
import Loading from '../../Loader/Loading';

const AllProductsCard = ({ product, isLoading, refetch }) => {
    if(isLoading){
        <Loading></Loading>
    }
    console.log(product)
    
    return (
        <div className='bg-white max-w-lg mx-auto rounded-lg border-sky-200  p-4 mt-2' >
            <div className='flex justify-between'>
                <div className='flex items-center'>
                    <div className=''><img src={product.seller_img} className='h-12 rounded-lg' width={42} alt="" /></div>
                    <div className='ml-2'>
                        <h1 className='text-lg font-bold '>{product.seller_name}</h1>
                        <h1 className='text-xs '>{product.date}</h1>
                    </div>
                </div>
                <div>
                    <h1><BsThreeDots/></h1>
                </div>
            </div>


            <div className='py-4 text-sm'>
                <h1>
                    {product.description.slice(0, 100)}..
                </h1>
            </div>
            <div>
                <img src={product.product_imgURL} className='w-full p-6' alt="" />
            </div>
        </div>
    );
};

export default AllProductsCard;