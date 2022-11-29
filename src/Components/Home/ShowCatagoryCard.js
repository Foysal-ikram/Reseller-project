import React from 'react';
import { Link } from 'react-router-dom';

const ShowCatagoryCard = ({ catagory }) => {
    const viewDetails = () => {

    }

    return (
        <Link to={`/catagory/${catagory.catagory_name}`} onClick={viewDetails} className='w-full h-full '>
            <div className='p-8 drop-shadow-lg bg-white text-center active:scale-95    cursor-pointer font-serif lg:text-3xl' >

                <h1 className='' >{catagory.catagory_name}</h1>
            </div >
        </Link>
    );
};

export default ShowCatagoryCard;