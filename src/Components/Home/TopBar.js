import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowBarDown } from "react-icons/bs";
import catagories from '../../Catagory.json'

const TopBar = () => {
    return (
        <div className="dropdown w-full dropdown-bottom">
            <label tabIndex={0} className=" btn btn-ghost w-full bg-gray-200 rounded-0">Catagories <span className='pl-1'><BsArrowBarDown/></span></label>
            <ul tabIndex={0} className="dropdown-content   p-2 shadow bg-gray-200 rounded-box w-full">
                {
                    catagories.map(catagory=>
                    <Link to={`/catagory/${catagory.catagory_name}`}><li className='w-full text-center hover:bg-white mx-auto'>{catagory.catagory_name}</li></Link>
                    )
                }
            </ul>
        </div>
    )
};

export default TopBar;