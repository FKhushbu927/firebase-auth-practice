import React, { useState } from 'react';
import SocialLoginBtn from '../SocialLoginBtn/SocialLoginBtn';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../../firebase/firebase.config';

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const auth = getAuth(app);
    const handleRegister = (event) => {

        event.preventDefault();

        if (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
            console.log("okay tikh ace ");
          } else {
            setError("invalid password ");
            return;
          }
      

      if(email){
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
      }else{
        setError("broo hobe na email and pass lagbe");
     
      }
            
    };

    console.log(email, password);
    return (
        <>
            <div className="container mt-4">
                <div className='row d-flex justify-content-center align-items-center'>
                    <div className='col-md-6'>
                        <div className="border w-100 m-auto text-center p-5">
                            <p><small className='text-danger'>{error}</small></p>
                            <form>
                                <input
                                    type="text"
                                    className='email p-2 m-2  w-75'
                                    placeholder="enter your Name"
                                    required
                                />
                                <br />

                                <input type="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    className='email p-2 m-2  w-75'
                                    placeholder="enter your email"
                                />
                                <br />

                                <input
                                    onChange={(e) => setPassword(e.target.value)}
                                    type="password"
                                    className='email p-2 m-2  w-75'
                                    placeholder="enter password"
                                    required
                                />

                                <button className='btn btn-info w-75 p-2 mt-3 text-white'  onClick={handleRegister}>
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