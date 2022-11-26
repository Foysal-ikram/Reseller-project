import { format } from 'date-fns';
import React, { useContext, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from '../../Loader/UserContext';

const Modal = ({ refetch, setModal }) => {
    const { user } = useContext(AuthContext)
    const [today, setToday] = useState(Date);
    const date = today.slice(4, 15);

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const catagory_name = form.catagory_name.value;
        const location = form.location.value;
        const phone = form.phone.value;
        const original_price = form.price1.value;
        const resell_price = form.price2.value;
        const productName = form.productName.value;
        const product_imgURL = form.image.value ;
        const usedTime = form.usedTime.value ;
        const seller_img = user?.photoURL ;
        const description = form.description.value ;

        console.log(catagory_name,
            location,
            phone,
            original_price,
            resell_price
        )

        const product = {
            seller_name : user?.displayName ,
            seller_img,
            productName,
            date,
            catagory_name,
            product_imgURL,
            location,
            phone,
            original_price,
            resell_price,
            description,
            usedTime

        }
        // 

        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Product add Succesfu')
                    refetch();
                    window.location.reload();
                }
            })


    }

    return (
        <> <Toaster></Toaster>
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />

            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-6" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold text-center">{user?.name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10' >
                        <div className='flex'>
                            <input type="text" disabled value={date}  className="input mr-1 input-bordered w-1/2" ></input>
                            <input name="email" type="email" placeholder="Email Address" required defaultValue={user?.email} disabled className="input  w-1/2 input-bordered" />
                        </div>

                        <div className="form-control  md:pr-1">
                            <label className="label">
                                    <span className="label-text">Item Name </span>
                                </label> 
                            <input type="text" name='productName' placeholder="Model no" required className=" w-full input input-bordered" />
                        </div>
                        <div>
                            
                            <label className="label">
                                    <span className="label-text">Select catagory </span>
                                </label> 
                            <select name="catagory_name" className="select select-bordered w-full"  >

                                <option >Monitor</option>
                                <option >Keyboard</option>
                                <option >Mouse</option>
                                <option >Graphics Card</option>
                                <option >Motherboard</option>
                                <option >Others</option>

                            </select>
                        </div>

                        <div className='md:flex'>
                            <div className="form-control md:w-1/2 md:pr-1">

                                <input type="text" name='location' placeholder="location" required className="input input-bordered" />
                            </div>
                            <div className="form-control md:w-1/2">

                                <input type="text" name='phone' placeholder="phone number" required className="input input-bordered" />
                            </div>
                        </div>

                        <div className='md:flex'>
                            <div className="form-control md:w-1/2 md:pr-1">
                                {/* <label className="label">
                                    <span className="label-text">Orginal Price</span>
                                </label> */}
                                <input type="text" name='price1' placeholder="Orginal Price in$" required className="input input-bordered" />
                            </div>
                            <div className="form-control md:w-1/2">
                                {/* <label className="label">
                                    <span className="label-text">Resell Price</span>
                                </label> */}
                                <input type="text" name='price2' placeholder="Resell Price in $" className="input input-bordered" />
                            </div>
                        </div>

                        <textarea name="description" className="textarea textarea-bordered h-24 w-full" placeholder="Your product details" required></textarea>
                        <input type="text" name='image' placeholder="product image URL" required className=" w-full input input-bordered"  />
                        <input type="text" name='usedTime' placeholder="Duration of use" required className=" w-full input input-bordered"  />
                           
                
                        <input className='btn btn-info w-full' type="submit" value="Post" />



                    </form>

                </div>
            </div>
        </>
    );
};

export default Modal;