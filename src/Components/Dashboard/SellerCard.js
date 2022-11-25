import React from 'react';
import Loading from '../../Loader/Loading';
import { AiFillDelete } from "react-icons/ai";
import toast from 'react-hot-toast';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';


const SellerCard = ({ seller, i, refetch, isLoading }) => {

    const handleDelete = id => {

        confirmAlert({
            title: 'Confirm to submit',
            message: 'Are you sure to do this.',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        console.log('deleting', id)
                        fetch(`http://localhost:5000/users?id=${id}`, {
                            method: 'DELETE',
                        })
                            .then(res => res.json())
                            .then(res => {
                                if(res.acknowledged){
                                    refetch()
                                    toast.success('succesfully deleted')
                                }
                              
                            })
                    }
                },
                {
                    label: 'No',
                    onClick: () => { return }
                }
            ]
        });
    }



    if (isLoading) {
        <Loading></Loading>
    }
  

    return (
        <tr>
            <th>{i}</th>
            <td>{seller.name}</td>
            <td>{seller.email}</td>
            <td>{seller.phone}</td>
            <td className='text-center'>
                <button onClick={() => handleDelete(seller._id)} className='btn btn-sm btn-error w-20' > <AiFillDelete /></button>
            </td>
        </tr>
    );
};

export default SellerCard;