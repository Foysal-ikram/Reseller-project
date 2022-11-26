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
                <div className='mr-2'>
                    {user?.photoURL ?

                        <img src={user.photoURL} alt="aa" className='rounded-full h-12' width={50} />
                        :
                        <img src={img} alt="" className='rounded-full ' width={50} />
                    }
                </div>


                <div className='bg-gray-200 w-full rounded-full'>
                    <label htmlFor="my-modal-6" className=" btn btn-active btn-ghost w-full rounded-full">
                        <div className=' w-full'>
                            <h1 className='p-2 rounded-full'>Add your computer items</h1>
                        </div>
                    </label>
                </div>
                


            </div>
        </div>
    );
};

export default AddProduct;