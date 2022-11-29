import React, { useContext } from 'react';
import { ProSidebarProvider } from 'react-pro-sidebar';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../../Hooks/useAdmin';
import useSeller from '../../Hooks/useSeller';
import Loading from '../../Loader/Loading';
import { AuthContext } from '../../Loader/UserContext';
import AddProduct from './AddProduct';
import Banner from './Banner/Banner';
import LeftNav from './LeftNav';
import OtherCards from './OtherCards/OtherCards';
import TopBar from './TopBar';

const Home = () => {
    const { user } = useContext(AuthContext)
    const email = user?.email;
    const [isSeller, isSellerLoading] = useSeller(email)
    const [isAdmin, isAdminLoading] = useAdmin(email)
    console.log(isSeller)

    if (isSellerLoading && isAdminLoading) {
        <Loading></Loading>
    }

    return (

        <div>
            <div className='self-start md:hidden sticky top-16 z-20'>
                <TopBar></TopBar>
            </div>

            <Banner></Banner>
            <OtherCards></OtherCards>
            {isSeller || isAdmin &&
                <AddProduct></AddProduct>
            }
            <h1 className='text-center lg:text-4xl bg-white-200 font-serif py-6 border-2 '>Which catagory product are you finding ?</h1>

            <div className='flex bg-sky-400'>

                {/* <div className='self-start sticky top-16 hidden md:block bg-white'>
                        <LeftNav></LeftNav>
                    </div> */}
                <div className='mx-auto w-full '>
                    <Outlet></Outlet>
                </div>

            </div>
        </div>

    );
};

export default Home;