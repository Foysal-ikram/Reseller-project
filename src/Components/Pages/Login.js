import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Loader/UserContext';
import { FcGoogle } from "react-icons/fc";
import './Page.css';
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {
    const [error, setError] = useState(null)
    const { user, google,signin } = useContext(AuthContext)
    const provider = new GoogleAuthProvider();
    const navigate = useNavigate()
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;

        const password = form.password.value;

        console.log(email, password)

        signin(email, password)
            .then(res => {
                const user = res.user;
                
                console.log(user)
                navigate('/')
            })
            .catch(error => setError('Password did not match'))


    }

    const google2 = () => {
        
        google(provider)
        .then(result => {
            console.log(result)
            toast.success('Succesfull Login')
            navigate('/')
            
        })
        .catch(err => console.log(err))
    }


    const handleBlur = () => {

    }

    return (
        <div className='mt-16'>
            <Toaster></Toaster>
            <div className="card  mx-auto max-w-sm shadow-2xl bg-base-100 mt-6">
                <h1 className="text-5xl text-center font-bold">Log in </h1>

                <form onSubmit={handleSubmit} className="card-body">
                           
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name='email' placeholder="email" required className="input input-bordered" />
                    </div>
                    
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="text" name='password' placeholder="password" className="input input-bordered" />


                    </div>
                    <p>{error}</p>
                    <div className="form-control mt-8">
                        <input type="submit" className='btn btn-2' value="Login" />
                    </div>
                    <div className='block mt-4'>
                        <button onClick={google2} className='btn btn-outline w-full btn-dark text-3xl my-1'><FcGoogle /></button>

                    </div>
                    <Link to='/signup' className="text-center  link-hover">New ? Sign up Here</Link>

                </form>
            </div>
        </div>
    );
};

export default Login;