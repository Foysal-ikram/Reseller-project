import React, { useContext } from 'react';
import { AuthContext } from '../../Loader/UserContext';
import { BsThreeDots } from "react-icons/bs";
import Loading from '../../Loader/Loading';
import './Home.css';
import { FcApproval } from "react-icons/fc";

const AllProductsCard = ({ product, isLoading, refetch }) => {
    if (isLoading) {
        <Loading></Loading>
    }
    console.log(product.email)
    

    return (
        <div className=' bg-white w-full max-w-lg mx-auto rounded-lg drop-shadow-lg  p-4 mt-2 ' >
            <div className='flex justify-between'>
                <div className='flex items-center'>
                    <div className=''><img src={product.seller_img} className='h-12 rounded-lg ' width={42} alt="" /></div>
                    <div className='ml-2'>
                        <h1 className='overflow-hidden text-ellipsis h-6 font-bold  '>{product.seller_name}
                           {
                            <span class="absolute inline-flex "><FcApproval/></span>}
                        </h1>
                        <h1 className='text-xs '>{product.date}</h1>
                    </div>
                </div>
                <div>
                    <h1><BsThreeDots /></h1>
                </div>
            </div>


            <h1 className='font-bold mt-4'>{product.productName}</h1>
            <div>
                <img src={product.product_imgURL} className='mx-auto  h-80 lg:h-48 p-6 hover:scale-125 duration-300 ' alt="" />
            </div>

            <div>

                <h1 className='font-serif'> Resell Price : $ {product.resell_price}</h1>
                <div className='flex justify-between mt-4'>
                    <button className=' btn btn-accent btn-block btn-sm'>Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default AllProductsCard;