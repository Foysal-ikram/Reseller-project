import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Home.css' ;

const Banner = () => {
    const navigate = useNavigate() ;
    const handleGo=()=>{
        navigate("/allproducts")
    }
    return (
        <div className="hero min-h-screen bg5" >
            <div className=""></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md mt-40 md:mt-48 lg:mt-60">
                    <h1 className='font-bold font-serif text-xl'>Buy & Sell your old computer parts here</h1>
                     <button className="btn  btn-sm md:btn-lg mt-2 lg:mt-4" onClick={handleGo}>Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;