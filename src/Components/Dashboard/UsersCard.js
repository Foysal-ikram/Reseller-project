import React from 'react';
import toast from 'react-hot-toast';
import Loading from '../../Loader/Loading';

const UsersCard = ({ user, i, refetch,isLoading }) => {

    const makeAdmin = id => {
        console.log(id)

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

    if(isLoading){
      <Loading></Loading>
    }
    return (
        <tr>
            <th>{i}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user?.role !== 'admin' && <button onClick={() => makeAdmin(user._id)} className='btn btn-sm btn-success w-32' > Make Admin</button>}
                {user?.role == 'admin' && <button onClick={() => removeAdmin(user._id)} className='btn btn-sm btn-error w-32'>Remove Admin</button>}
            </td>
        </tr>
    );
};

export default UsersCard;