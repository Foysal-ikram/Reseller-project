import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Loader/UserContext';
import './Layout.css';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user)
    const logOut2 = () => {
        logOut()
    }

    const menue = <React.Fragment>
        <li><Link to={'/'} className='font-font-medium nav2 mx-1 rounded-md '>Home</Link></li>
        <li><Link to={'/'} className='font-font-medium nav2 mx-1 rounded-md '>About</Link></li>
        <li><Link to={'/'} className='font-font-medium nav2 mx-1 rounded-md '>Contact</Link></li>

        {user?.uid ?

            <>
                <li><button onClick={logOut2} className='font-font-medium nav2 mx-1 rounded-md text-xl'>Sign out</button></li>

                <li><Link to={'/dashboard'} className='font-font-medium nav2 mx-1 rounded-md text-xl'>Dashboard</Link></li>


            </>
            :

            <>
                <li><Link to={'/login'} className='font-font-medium nav2 mx-1 rounded-md text-xl'>Login</Link></li>
                <li><Link to={'/signup'} className='font-font-medium nav2 mx-1 rounded-md text-xl'>Signup</Link></li>
            </>
        }
    </React.Fragment>

    return (
        <div className='border-b-2 border-blue-900  self-start sticky top-0 z-20 bg-white	'>
            <div className=" max-w-screen-2xl mx-auto z-20 navbar  lg:pl-20 self-start sticky top-0 col-span-1">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <img src="" alt="" />
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                        <ul tabIndex={0} className="min-h-screen	 menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                            {menue}

                        </ul>
                    </div>
                    <a href='/' className="text-2xl"> <span className='font-medium text-black-400	'>Old</span><span className='text-fuchsia-600	'>Kickers</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">

                        {menue}
                    </ul>
                </div>
                {/* Here it is social icon part/}
            /* <div className="navbar-end lg:mr-20">
                <a href='https://www.facebook.com/foysal.ikram' target="_blank" rel="noopener noreferrer"><img src={fb} alt="" className=' icon' width={22} /></a>
                <a href='https://twitter.com/foysal_ikram' target="_blank" rel="noopener noreferrer"><img src={tw} alt="" className='mx-2 rounded icon' width={22} /></a>
                <a href='https://www.linkedin.com/in/md-foysal-ikram-610b1b152/' target="_blank" rel="noopener noreferrer"><img src={li} alt="" className='icon' width={22} /></a>
            </div> */}
            </div>
        </div>
    );
};

export default Header;