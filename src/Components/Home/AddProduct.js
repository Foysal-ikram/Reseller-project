import React, { useContext } from 'react';
import { AuthContext } from '../../Loader/UserContext';
import img from '../../assets/user.jpg'

const AddProduct = () => {
    const { user } = useContext(AuthContext)


    return (
        <div className='mt-2 mb-2'>
            {/* -------------------------------------- */}
           
            {/* -------------------------------------- */}


            <div className='bg-white max-w-lg mx-auto rounded-lg border-sky-200 flex p-4'>
                <div>
                    {user?.photoURL ?

                        <img src={user.photoURL} alt="aa" width={50} />
                        :
                        <img src={img} alt="" className='rounded-full' width={50} />
                    }
                </div>


                <div className='bg-gray-200 w-full rounded-full'>
                    <label htmlFor="my-modal-3" className=" btn btn-active btn-ghost w-full rounded-full">
                        <div className=' w-full'>
                            <h1 className='p-2 rounded-full'>Add your product</h1>
                        </div>
                    </label>
                </div>


            </div>
        </div>
    );
};

export default AddProduct;