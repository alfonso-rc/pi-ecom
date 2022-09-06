import React from 'react';
import Log2 from "../imagenes/logo-ecom.png";
import { Link } from 'react-router-dom';
// import {
//   toggleCart,
// } from "../store/actions";
import LoginAuth0 from './LoginComponents/loginAuth0';
import LogOut from './LoginComponents/logOut';
import Profile from './LoginComponents/Profile';

const styleNavBar = {
  boxShadow: "0px 3px 5px 1px rgba(0, 0, 0, 0.1)",
  width: "100%",
}

export default function NavBarAdmin() {
  return (
    <div style={ styleNavBar } className="bg-primary flex place-content-between mr-3 w-screen">
        <Link to="/home" className='flex transition delay-100 hover:scale-110 pl-2'><img style={ { alignSelf: "center", marginLeft: "5px" } } src={ Log2 } alt="Logo" className="w-36 h-12" /></Link>
        <div className='flex place-content-end gap-6 mr-2 sm:mr-14'>
          {        
            sessionStorage.name ? <Profile/> : <LoginAuth0/>
          }          
        </div>    
    </div>
  )
}