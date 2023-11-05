import React from 'react';
import SocialLoginBtn from '../SocialLoginBtn/SocialLoginBtn';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../../firebase/firebase.config';

const Register = () => {
    const auth = getAuth(app);
    const handleRegister = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              
                const user = userCredential.user;
                
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }
    return (
        <>
            <div className="container">
                <div className='row d-flex justify-content-center align-items-center'>
                    <div className='col-md-6'>
                        <div className="border w-100 m-auto text-center p-5">
                            <form>
                                <input
                                    type="text"
                                    className='email p-2 m-2  w-75'
                                    placeholder="enter your Name"
                                    required
                                />
                                <br />

                                <input type="email"
                                    // onChange={(e) => setEmail(e.target.value)}
                                    className='email p-2 m-2  w-75'
                                    placeholder="enter your email"
                                />
                                <br />

                                <input
                                    type="password"
                                    className='email p-2 m-2  w-75'
                                    placeholder="enter password"
                                    required
                                />

                                <button className='btn btn-info w-75 p-2 mt-3 text-white'>
                                    Register
                                </button>
                                <p className='p-2'><small className='text-info'>Already have account? login here?</small></p>
                            </form>
                        </div>

                    </div>
                    <div className='col-md-6'>
                        <img
                            className='w-100'
                            src="https://i.ibb.co/Vmyggr3/undraw-Login-re-4vu2.png" alt="" />
                    </div>

                </div>
                <SocialLoginBtn></SocialLoginBtn>
            </div>

        </>
    );
};

export default Register;