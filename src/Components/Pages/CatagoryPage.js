import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CatagoryPageCard from './CatagoryPageCard';

const CatagoryPage = (id) => {
    const data = useLoaderData() ;
    console.log(data)


    return (
        <div className='pl-2'>
         {
            data.map(data=><CatagoryPageCard
            key={data._id}
            data={data}
            ></CatagoryPageCard>)
         }
         <h1>sadsadasd</h1>
        </div>
    );
};

export default CatagoryPage;