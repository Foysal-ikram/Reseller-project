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
        const email = form.email.value;
        const location = form.location.value;
        const phone = form.phone.value;
        const original_price = form.price1.value;
        const resell_price = form.price2.value;
        const productName = form.productName.value;
        const imgURL = form.image.files[0];
        const usedTime = form.usedTime.value;
        const seller_img = user?.photoURL;
        const description = form.description.value;
        const imageHostKey = process.env.REACT_APP_imgbb_key;

        console.log(imgURL
        )



        const formData = new FormData();
        formData.append('image', imgURL);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                console.log(data.data.url)
                const product_imgURL = data.data.url;
                if (data.success) {
                    const product = {
                        seller_name: user?.displayName,
                        email,
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
                            <input type="text" disabled value={date} className="input mr-1 input-bordered w-1/2" ></input>
                            <input name="email" type="email" placeholder="Email Address" required defaultValue={user?.email} disabled className="input  w-1/2 input-bordered" />
                        </div>

                        <div className='flex'>
                            <div className="form-control w-1/2 md:pr-1 mr-1">

                                <input type="text" name='productName' placeholder="Product name & Model" required className=" w-full input input-bordered" />
                            </div>
                            <div className="form-control  md:pr-1">

                                <input type="text" name='usedTime' placeholder="Duration of use" required className=" w-full input input-bordered" />
                            </div>


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

                                <input type="text" name='price2' placeholder="Resell Price in $" className="input input-bordered" />
                            </div>
                        </div>

                        <textarea name="description" className="textarea textarea-bordered h-24 w-full" placeholder="Your product details" required></textarea>

                        <input type="file" name='image' placeholder="image" className="input input-bordered" />


                        <input className='btn btn-info w-full' type="submit" value="Post" />



                    </form>

                </div>
            </div>
        </>
    );
};

export default Modal;