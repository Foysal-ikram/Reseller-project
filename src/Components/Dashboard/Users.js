import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import Loading from '../../Loader/Loading';
import { AuthContext } from '../../Loader/UserContext';

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
        <div>
                a
        </div>
    );
};

export default Users;