import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, sendEmailVerification } from 'firebase/auth';
import { AuthContext } from '../../Loader/UserContext';
import toast, { Toaster } from 'react-hot-toast';




const Register = () => {
    const provider = new GoogleAuthProvider()
    const navigate = useNavigate();
    const { user, createUser, google, verifyEmail } = useContext(AuthContext);
    const [error, setError] = useState([]);
    const [mail, setMail] = useState('');


    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const name = form.name.value;
        const phone = form.phone.value;
        const password = form.password.value;
        const account_type = parseInt(form.slot.value) ;

        console.log(account_type)

        if(account_type == 1){
            console.log('Buyer account')
            createUser(email, password)
            .then(res => {
              //  console.log(res)
                form.reset()
                saveUser(email,name,phone)
                

            })
            .catch(error => setError('This email already exist'))


        }
        if(account_type == 0){
            console.log('seller account')
            createUser(email, password)
            .then(res => {
              //  console.log(res)
                form.reset()
                saveUser(email,name,phone)
            })
            .catch(error => setError('This email already exist'))
        }
       

    }
    const google2 = () => {
        google(provider)
            .then(res => {
                const user = res.user ;
                console.log(user)
                saveUser(user.email , user.displayName)
               
            })
            .catch(err => console.log(err))

    }
    // --------------------------------Save user to my database-----------------------------


    const saveUser = (email,name,phone) => {
        const user = { email,name , phone }
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => {
                //console.log(res)
                toast.success('succesful')
                // setMail(mail)

            })

    }
    const saveSeller = (email,name,phone) => {
        const user = { email,name , phone }
        fetch('http://localhost:5000/sellers', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => {
                //console.log(res)
                toast.success('succesful')
                // setMail(mail)

            })

    }


    return (
        <div className='mt-16'>
            <Toaster></Toaster>
            <div className="card  mx-auto max-w-sm shadow-2xl bg-base-100 mt-6">
                <h1 className="text-5xl text-center font-bold">Signup </h1>

                <form onSubmit={handleSubmit} className="card-body">
                    <label className=''>
                        <span className="label-text pl-1 "> Account type </span>
                        <select name="slot" className="select select-bordered w-full bg2" >

                            <option value={0} className='text-md'> Seller Account</option>
                            <option value={1} className=''>Buyer Account </option>

                        </select>
                    </label>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Full Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Name" required className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name='email' placeholder="email" required className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Phone</span>
                        </label>
                        <input type="text" name='phone' placeholder="Phone Number" required className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="text" name='password' placeholder="password" className="input input-bordered" />


                    </div>
                    <p className='text-error'>{error}</p>
                    <div className="form-control mt-8">
                        <input type="submit" className='btn btn-info' value="Signup" />
                    </div>
                    <div className='block mt-4'>
                        <button onClick={google2} className='btn btn-outline w-full btn-dark text-3xl my-1'><FcGoogle /></button>

                    </div>
                    <Link to='/login' className="text-center  link-hover">Already have account? Log in</Link>

                </form>
            </div>
        </div>
    );
};

export default Register;