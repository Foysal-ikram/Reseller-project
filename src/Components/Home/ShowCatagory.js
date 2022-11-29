import React from 'react';
import catagories from '../../Catagory.json'
import ShowCatagoryCard from './ShowCatagoryCard';

const ShowCatagory = () => {

    return (
        <div className='grid md:grid-cols-3 gap-4 mx-8 my-8 '>
         {
            catagories.map(catagory=><ShowCatagoryCard
            key={catagory.catagory_id}
            catagory={catagory}
            ></ShowCatagoryCard>)
         }   
        </div>
    );
};

export default ShowCatagory;