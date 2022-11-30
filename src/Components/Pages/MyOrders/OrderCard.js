import React from 'react';
import { AiFillDelete } from "react-icons/ai";
import swal from 'sweetalert';
import './Orders.css' ;
import Swal from 'sweetalert2';
import Loading from '../../../Loader/Loading';




const OrderCard = ({ booking ,refetch, isLoading}) => {
    console.log(booking)
    const { _id,product, resell_price, img, seller_name, seller_phone, meeting_location, original_price } = booking;
   const handleDelete= id =>{
    console.log(id)
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
            fetch(`https://reseller-server-lime.vercel.app/bookings?id=${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(res=>{
                    refetch()
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      );
                     
                })
            
        }
      })
   }
   if(isLoading){
    <Loading></Loading>
   }
   
   
    return (
        <div className='mx-6 shadow-xl '>
            <div className='my-10 p-6 md:flex  justify-between'>
                <div className=' my-auto'>
                    <h1><span className='font-serif font-bold'>Item : </span>{product}</h1>
                    <h1><span className='font-serif font-bold'>Original Price : </span>{original_price}$</h1>
                    <h1><span className='font-serif font-bold'>Resell Price : </span>{resell_price}$</h1>
                    <h1><span className='font-serif font-bold'>Seller Information :<br></br> </span>{seller_name}</h1>
                    <h1 className=''><span></span>{seller_phone}</h1>
                    <h1><span className='font-serif font-bold'>Meeting Location : </span>{meeting_location}</h1>
                </div>
                <div className='justify-center items-center'>
                    <img src={img} alt="" className='h-48' />
                </div>
                <div className='bg-error w-10 text-center flex orderBtn ' onClick={()=>handleDelete(_id)}>
                    <div className=' my-auto mx-auto'>
                        <AiFillDelete className='mx-auto text-2xl'/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderCard;