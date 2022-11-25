import React from 'react';
import { Sidebar, Menu, MenuItem, useProSidebar, SubMenu } from 'react-pro-sidebar';
import './Home.css' ;

const LeftNav = () => {
    const { collapseSidebar } = useProSidebar();

    return (
        <div className=''>
            <Sidebar className='min-h-screen  bg-gray-200 font-medium m-0 	' >
                <Menu className='bg-gray-200 '>
                    <SubMenu label="Charts" className='menu2'>
                        <MenuItem > Pie charts </MenuItem>
                        <MenuItem> Line charts </MenuItem>
                    </SubMenu>
                    <MenuItem className='menu2'> Documentation </MenuItem>
                    <MenuItem className='menu2'> Calendar </MenuItem>
                    <SubMenu label="Charts" className='menu2'>
                        <MenuItem> Pie charts </MenuItem>
                        <MenuItem> Line charts </MenuItem>
                    </SubMenu>
                    <MenuItem className='menu2'> Documentation </MenuItem>
                    <MenuItem className='menu2'> Calendar </MenuItem>
                </Menu>
            </Sidebar>
            
        </div>
    );
};

export default LeftNav;