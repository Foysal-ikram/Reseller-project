import { format } from 'date-fns';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Loader/UserContext';

const Modal = ({ refetch }) => {
    const { user } = useContext(AuthContext)
    const [today, setToday] = useState(Date);
    const date = today.slice(4, 15);

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const catagory = form.catagory.value;

        console.log(catagory)

        const product = {

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
                    // alert('ok')


                    refetch();

                }
            })


    }

    return (
        <>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold text-center">{user.name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10' >
                        
                        <input type="text" disabled value={date} className="input w-full input-bordered" ></input>
                        <input name="email" type="email" placeholder="Email Address" defaultValue={user.email} disabled className="input w-full input-bordered" />

                        <div>                            
                            <p className='label'>Select catagory</p>
                            <select name="catagory" className="select select-bordered w-full"  >

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
                                <label className="label">
                                    {/* <span className="label-text">Location</span> */}
                                </label>
                                <input type="text" name='location' placeholder="location" required className="input input-bordered" />
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    {/* <span className="label-text">Phone Number</span> */}
                                </label>
                                <input type="text" name='phone' placeholder="phone" className="input input-bordered" />
                            </div>
                        </div>

                        <div className='md:flex'>
                            <div className="form-control md:w-1/2 md:pr-1">
                                <label className="label">
                                    <span className="label-text">Orginal Price</span>
                                </label>
                                <input type="text" name='price1' placeholder="Orginal Price" required className="input input-bordered" />
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Resell Price</span>
                                </label>
                                <input type="text" name='price2' placeholder="Resell Price" className="input input-bordered" />
                            </div>
                        </div>

                        <textarea name="message" className="textarea textarea-bordered h-24 w-full" placeholder="Your product details" required></textarea>


                        <br />
                        <input className='btn btn-info w-full' type="submit" value="Submit" />
                    </form>

                </div>
            </div>
        </>
    );
};

export default Modal;