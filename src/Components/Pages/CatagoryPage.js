import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CatagoryPageCard from './CatagoryPageCard';

const CatagoryPage = () => {
    const data = useLoaderData() ;
    console.log(data)

  


    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3  gap-4 	'>
         {
            data.map(data=><CatagoryPageCard
            key={data._id}
            data={data}
            ></CatagoryPageCard>)
         }
      
        </div>
    );
};

export default CatagoryPage;