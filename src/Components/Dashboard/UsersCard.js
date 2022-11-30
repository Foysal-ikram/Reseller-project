import React from 'react';
import toast from 'react-hot-toast';
import Loading from '../../Loader/Loading';
import { AiFillDelete } from "react-icons/ai";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';


const UsersCard = ({ user, i, refetch, isLoading }) => {


    const handleDelete = id => {

        confirmAlert({
            title: 'Confirm to submit',
            message: 'Are you sure to do this.',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        console.log('deleting', id)
                        fetch(`https://reseller-server-lime.vercel.app/users?id=${id}`, {
                            method: 'DELETE',
                        })
                            .then(res => res.json())
                            .then(res => {
                                if (res.acknowledged) {
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

    const makeAdmin = id => {
        //console.log(id)
        fetch(`http://localhost:5000/admin?id=${id}`, {
            method: 'PUT',
        })
            .then(res => res.json())
            .then(res => {
                refetch()
                toast.success('succesfully added')
            })
    }

    const removeAdmin = id => {
        fetch(`http://localhost:5000/removeadmin?id=${id}`, {
            method: 'PUT',
        })
            .then(res => res.json())
            .then(res => {
                refetch()
                toast.success('succesfully removed')
            })
    }


    if (isLoading) {
        <Loading></Loading>
    }
    return (

        <tr>
            <th>{i}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>

            <td>{user?.role ? user.role : user.account_type}</td>


            <td className='text-center'>
                {user.account_type !== 'seller' ?
                    <>
                        {user?.role !== 'admin' && <button onClick={() => makeAdmin(user._id)} className='btn btn-sm btn-success w-32' > Make Admin</button>}
                        {user?.role == 'admin' && <button onClick={() => removeAdmin(user._id)} className='btn btn-sm btn-error w-32'>Remove Admin</button>}
                    </>
                    :
                    <>
                        <button className='btn btn-sm btn-success w-32 ' disabled > Disabled</button>
                    </>
                }
            </td>


            <td className='text-center'>
                <button onClick={() => handleDelete(user._id)} className='btn btn-sm btn-error w-20' > <AiFillDelete /></button>
            </td>
        </tr>
    );
};

export default UsersCard;