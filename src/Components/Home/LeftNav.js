import React from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import './Home.css';
import catagories from '../../Catagory.json'
import { Link } from 'react-router-dom';

const LeftNav = () => {

    

    return (
        <div className=''>
            <Sidebar className='min-h-screen   font-medium m-0 	w-2/3' >
                <Menu className=''>
                    <SubMenu label="catagories" className='menu2'>
                        {catagories.map(catagory => 
                        <Link to={`/catagory/${catagory.catagory_name}`}><MenuItem
                        key={catagory.catagory_id}
                        >{catagory.catagory_name}</MenuItem></Link>

                        )}

                    </SubMenu>
                    <MenuItem className='menu2' href='/allproducts'> All Products </MenuItem>
                    <MenuItem className='menu2'> Calendar </MenuItem>
                    
                    <MenuItem className='menu2'> Documentation </MenuItem>
                    <MenuItem className='menu2'> Calendar </MenuItem>
                </Menu>
            </Sidebar>

        </div>
    );
};

export default LeftNav;