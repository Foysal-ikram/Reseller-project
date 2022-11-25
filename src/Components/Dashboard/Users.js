import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import Loading from '../../Loader/Loading';
import { AuthContext } from '../../Loader/UserContext';
import UsersCard from './UsersCard';

const Users = () => {
    const {user , loading } = useContext(AuthContext) ;
    
    const {data: users=[] , isLoading , refetch } = useQuery({
        queryKey : ['users'],
        queryFn :()=> fetch('http://localhost:5000/users')
        .then(res=>res.json())

    })

    console.log(users)
    if(isLoading){
        <Loading></Loading>
    }
    return (
        <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
       
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
          {
            users.map((user , i)=><UsersCard
            key={user._id}
            i={i+1}
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