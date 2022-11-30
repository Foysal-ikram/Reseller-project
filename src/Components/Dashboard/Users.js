import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Toaster } from 'react-hot-toast';
import Loading from '../../Loader/Loading';
import UsersCard from './UsersCard';

const Users = () => {


    const { data: users = [], isLoading, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: () => fetch('https://reseller-server-lime.vercel.app/users')
            .then(res => res.json())

    })

    console.log(users)
    if (isLoading) {
        <Loading></Loading>
    }
    return (
        <div className="overflow-x-auto">
            <Toaster></Toaster>
            <div  className=' py-4'>
                <h1  className='text-center text-4xl font-serif '>All Users</h1>
            </div>
            <table className="table table-zebra w-full">

                <thead>
                    <tr>
                        <th>index</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Account</th>
                        <th className='text-center'>Action</th>
                        <th className='text-center'>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, i) => <UsersCard
                            key={user._id}
                            i={i + 1}
                            user={user}
                            refetch={refetch}
                            isLoading={isLoading}
                        ></UsersCard>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Users;