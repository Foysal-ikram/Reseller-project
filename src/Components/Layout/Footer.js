import React from 'react';
import { AiFillFacebook ,AiFillTwitterCircle  } from "react-icons/ai";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import img from '../../assets/logoo.PNG'



const Footer = () => {
    return (
        <div>
           <div>
           <footer className="footer p-16 bg-blue-900 text-white hidden lg:inline-grid">
                <div>
                    {/* <img src={star} width={100} alt="" /> */}
                    <img src={img} alt="" width={100} />
                    <p>DocPoint<br /></p>
                    <p>Have a great fame for our service</p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <a href="/" className="link link-hover">Our Blog</a>
                    <a href="/" className="link link-hover">Membership</a>
                    <a href="/" className="link link-hover">Marketing</a>
                    <a href="/" className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Foody</span>
                    <a href="/" className="link link-hover">About us</a>
                    <a href="/" className="link link-hover">Contact</a>
                    <a href="/" className="link link-hover">Posts</a>
                    <a href="/" className="link link-hover">Delivery</a>
                </div>
                <div>
                    <span className="footer-title">Others</span>
                    <a href="/" className="link link-hover">Terms of use</a>
                    <a href="/" className="link link-hover">Privacy policy</a>
                    <a href="/" className="link link-hover">Add policy</a>
                   <div className='flex text-2xl items-center'>
                   <a href="/" className=""><AiFillFacebook/></a>
                    <a href="/" className="mx-2"><AiFillTwitterCircle/></a>
                    <a href="/" className=" text-3xl"><TiSocialLinkedinCircular/></a>
                   </div>

                </div>
            </footer>
           </div>
           <div className='bg-cyan-900 text-white block lg:hidden text-center py-4 '>
            <h1>Thank You for visiting</h1>
            <h1 className='text-sm font-erif'>copyright claim</h1>
           </div>
        </div>
    );
};

export default Footer;