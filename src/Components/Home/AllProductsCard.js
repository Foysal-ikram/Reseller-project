import React, { useContext } from 'react';
import { AuthContext } from '../../Loader/UserContext';
import { BsThreeDots } from "react-icons/bs";
import Loading from '../../Loader/Loading';
import './Home.css';
import { FcApproval } from "react-icons/fc";
import useSellerverify from '../../Hooks/useSellerverify';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import BookingModal from './BookingModal';


const AllProductsCard = ({ product, isLoading, refetch,setSelected }) => {
    if (isLoading) {
        <Loading></Loading>
    }
    const [isverified, isverifiedLoading] = useSellerverify(product?.email)
    
    if (isverifiedLoading) {
        <Loading></Loading>
    }

    const handleBooking=(id)=>{
        console.log(id)
        setSelected(product) 

    }

    return (
        <div  className=' ease-in-out bg-white w-full max-w-lg mx-auto rounded-lg drop-shadow-lg  p-4 mt-2 ' >
            <div className='flex justify-between'>
                <div className='flex items-center'>
                    <div className=''><img src={product.seller_img} className='h-12 rounded-lg ' width={42} alt="" /></div>
                    <div className='ml-2'>
                        <h1 className='overflow-hidden text-ellipsis h-6 font-bold  '>{product.seller_name}
                            {isverified &&
                                <span className="absolute inline-flex "><FcApproval /></span>
                            }
                        </h1>
                        <h1 className='text-xs '>{product.date}</h1>
                    </div>
                </div>
                <div>
                    <h1><BsThreeDots /></h1>
                </div>
            </div>


            <h1 className='font-bold mt-4'>{product.productName} <span className='font-medium'>[{product.usedTime} used]</span> </h1>
            <h2><span className='font-medium'>Location :</span> {product.location}</h2>
            <PhotoProvider>
                <div className="foo"> 
                    <PhotoView src={product.product_imgURL}>
                        <img src={product.product_imgURL} className='mx-auto  h-80 lg:h-60 p-6 hover:scale-125 duration-300 ' alt="" />
                    </PhotoView>
                </div>
            </PhotoProvider>

            <div>
                <div className='flex justify-between  font-medium'>
                    <h1 className='font-sans'> Market: $ {product.original_price}</h1>
                    <h1 className='font-sans'> Resell : $ {product.resell_price}</h1>
                </div>
                <p className='h-20 mt-4'>{product.description}</p>

                <div className='flex justify-between mt-4'>
                <label
                   
                    htmlFor="booking-modal"
                    className="btn btn-accent btn-block "
                    onClick={() => handleBooking(product._id)}
                >Book Now
                </label>

                     </div>
            </div>
            
        </div>
    );
};

export default AllProductsCard;