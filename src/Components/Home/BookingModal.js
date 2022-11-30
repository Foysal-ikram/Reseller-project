import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Loader/UserContext';

const BookingModal = ({ selected, setSelected }) => {
    const { user } = useContext(AuthContext)
    //console.log(selected, user)

    const handleBooking = event => {

        event.preventDefault();
        const form = event.target;
        const buyer_email = user.email;
        const buyer_phone = form.phone.value;
        const seller_email = selected.email;
        const seller_name = selected.seller_name;
        const seller_phone = selected.phone;
        const buyer_name = user?.displayName;
        const meeting_location = form.location.value;
        const product = selected.productName;
        const img = selected.product_imgURL;
        const original_price = selected.original_price;
        const resell_price = selected.resell_price;

        const booking = {
            product,
            buyer_email,
            buyer_phone,
            buyer_name,
            seller_email,
            seller_phone,
            seller_name,
            meeting_location,
            img,
            original_price,
            resell_price,
        }

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    // alert('ok')
                   toast.success('Your order is placed')
                 setSelected(null)
                }
            })



    }
    return (
        <>

            <input type="checkbox" id="booking-modal" className="modal-toggle " />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-1' >

                        <div className='flex'>
                            <div className="form-control md:w-1/2 pr-1">
                                <label className="label pl-2">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input type="text" name='userName' disabled defaultValue={user?.displayName} className="mr-1 input w-full input-bordered" ></input>
                            </div>
                            <div className="form-control md:w-1/2 pr-1">
                                <label className="label pl-2">
                                    <span className="label-text">Your Email</span>
                                </label>
                                <input type="text" name='email' disabled defaultValue={user?.email} className="input w-full input-bordered" ></input>
                            </div>

                        </div>
                        <div className='flex'>
                            <div className="form-control md:w-1/2 pr-1">
                                <label className="label pl-2">
                                    <span className="label-text">Item Name</span>
                                </label>
                                <input type="text" name='productName' disabled defaultValue={selected?.productName} className="input w-full input-bordered" ></input>
                            </div>
                            <div className="form-control md:w-1/2 pr-1">
                                <label className="label pl-2">
                                    <span className="label-text">Item Price ($)</span>
                                </label>
                                <input type="text" name='price' disabled defaultValue={selected?.resell_price} className="input w-full input-bordered" ></input>
                            </div>

                        </div>

                        <input name="phone" type="text" placeholder="Phone Number" required className="input w-full input-bordered" />
                        <input name="location" type="text" placeholder="Meeting Location" required className="input w-full input-bordered" />
                        <br />
                        <input className='btn btn-accent w-full mt-0' type="submit" value="Submit" />
                    </form>

                </div>
            </div>

        </>
    );
};

export default BookingModal;