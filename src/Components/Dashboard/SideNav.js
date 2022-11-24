import React, { useState } from 'react';

import control from '../../assets/control.png'
import Chat from '../../assets/Chat.png'
import calender from '../../assets/Calendar.png'
import user from '../../assets/User.png'
import folder from '../../assets/Folder.png'
import setting from '../../assets/Setting.png'
import search from '../../assets/Search.png'
import chart from '../../assets/Chart.png'
import dashboard from '../../assets/Chart_fill.png'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';

const SideNav = () => {
    const [open, setOpen] = useState(true);
    const Menus = [
        { title: "Dashboard", src: dashboard, link: "/dashboard/" },
        { title: "Inbox", src: Chat },

        { title: "All Users", src: user, gap: true, link: "/dashboard/users" },

        // { title: "Schedule ", src: calender },
        // { title: "Search", src: search },
        // { title: "Analytics", src: chart },
        // { title: "Files ", src: folder, gap: true },
        // { title: "Setting", src: setting },

    ];
    return (
        <div className="flex ">
            <div
                className={` ${open ? "w-60" : "w-20 "
                    } bg-blue-900	 min-h-screen p-5  pt-8 relative duration-300`}
            >
                <img
                    src={control} alt=''
                    className={`absolute cursor-pointer -right-3 top-9 w-7 border-blue-900	 
             border-2 rounded-full  ${!open && "rotate-180"}`}
                    onClick={() => setOpen(!open)}
                />
                <div className="flex gap-x-4 items-center">
                    <img
                        src={logo} alt=''
                        className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"
                            }`}
                    />
                    <h1
                        className={`text-white origin-left font-medium text-xl duration-200 ${!open && "scale-0"
                            }`}
                    >
                        Designer
                    </h1>
                </div>
                <ul className="pt-6">
                    {Menus.map((Menu, index) => (
                        <li
                            key={index}
                            className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
                ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"
                                } `}
                        >
                            <Link to={Menu.link} className='flex  items-center'>
                                <img src={Menu.src} alt='' />
                                <span className={`${!open && "hidden"} pt-1 pl-2 items-center origin-left duration-200`}>
                                    {Menu.title}
                                </span>
                            </Link> </li>
                    ))}
                </ul>
            </div>

        </div>
    );
};

export default SideNav;