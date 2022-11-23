import React, { useContext, useState } from 'react';
import { Form, Link, useLocation, useNavigate } from 'react-router-dom';
import UseTitle from '../../Hooks/UseTitle';
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../Loader/UserContext';
import { GoogleAuthProvider } from 'firebase/auth';
import Swal from 'sweetalert2'
import useToken from '../../Hooks/useToken';

const Login = () => {
    UseTitle('Login')

    // precaution: 1. check index.js [wrap app with userContext]
    //             2. first make email login, then google login 
    const [userEmail, setUserEmail] = useState('');

    const [error, setError] = useState(null)
    const { user, google, signin, forgetPass } = useContext(AuthContext)

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const provider = new GoogleAuthProvider();

    const [mail,setMail] = useState('')
    const [Token] = useToken(mail)

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;

        const password = form.password.value;

        console.log(email, password)

        signin(email, password)
            .then(res => {
                const user = res.user;
                setMail(user.email)
                console.log(user)
                navigate('/')
            })
            .catch(error => setError('Password did not match'))


    }

    const google2 = () => {
        google(provider)
            .then(result => {
                console.log(result)
                const user = result.user;
                navigate('/')
            })
            .catch(err => console.log(err))

    }

    const handleBlur = event => {
        const email = event.target.value;
        setUserEmail(email)
    }

    const onSubmit = () => {
        if (!userEmail) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'You have not placed your email. Please enter your email first then try to reset',

            })
            return
        }
        forgetPass(userEmail)
        Swal.fire({
            title: 'Password reset email has been sent to your mail',
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        })

    }



    return (
        <div className=''>

            <div className="card  mx-auto max-w-sm shadow-2xl bg-base-100 mt-6">
                <h1 className="text-5xl text-center font-bold">Login </h1>

                <form onSubmit={handleSubmit} className="card-body">


                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name='email' placeholder="email" onBlur={handleBlur} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="text" name='password' placeholder="password" className="input input-bordered" />

                        {/* --------------------------------------------------Reset password-------------------------------- */}

                        <div>
                            <button className='pt-3 text-red-600' onClick={onSubmit} >Reset Password</button>

                        </div>


                        {/* ----------------------------------------------------------------------------------------------------------- */}
                        <p className='label text-red-600 mx-auto '>{error}</p>


                    </div>
                    <div className="form-control mt-2">
                        <input type="submit" className='btn btn-info' value="Login" />
                    </div>
                    <div className='block mt-6'>
                        <button onClick={google2} className='btn btn-outline w-full btn-dark text-3xl my-1'><FcGoogle /></button>

                    </div>
                    <Link to='/register' className="text-center  link-hover">New here? Sign up</Link>

                </form>
            </div >
        </div >

    );
};

export default Login;