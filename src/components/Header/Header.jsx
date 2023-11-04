import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
           <nav className='d-flex justify-content-around align-items-center bg-secondary p-3 flex-wrap'>
               <div className='logo'>
                  <img className='logo-img' src="https://i.ibb.co/TtRpKPP/doctor.png" alt="" />
               </div>

               <div className='menu-container d-flex flex-wrap'>
                  <Link to="/home" className='text-decoration-none'>
                     <li className='nav-link items ms-3 text-info fw-bolder'>Home</li>
                  </Link>

                  <Link to="/login" className='text-decoration-none'>
                     <li className='nav-link items ms-3 text-info fw-bolder'>LogIn</li>
                  </Link>
                  <li role="button" className='nav-link ms-3 text-info fw-bolder'>
                         LogOut
                  </li>

                  <Link to='/register'  className='text-decoration-none'>
                       <li  className='nav-link items ms-3 text-info fw-bolder'>  Register</li>
                  </Link>
               </div>

           </nav>
        </div>
    );
};

export default Header;