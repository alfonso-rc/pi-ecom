import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import Log2 from "../imagenes/logo-ecom.png";
import { Link } from 'react-router-dom';
import {BiUserCircle} from "react-icons/bi"
import {
  toggleCart,
} from "../store/actions";
import { useAuth0 } from '@auth0/auth0-react';
import LoginAuth0 from './LoginComponents/loginAuth0';
import LogOut from './LoginComponents/logOut';
import Profile from './LoginComponents/Profile';

const styleNavBar = {
  boxShadow: "0px 3px 5px 1px rgba(0, 0, 0, 0.1)",
}

export default function NavBarAdmin() {
  const { isAuthenticated } = useAuth0();
  let dispatch = useDispatch();
  return (
    <div style={ styleNavBar } className="bg-gradient-to-r from-slate-400  to-slate-600 flex place-content-between mr-3">
        <Link to="/home" className='flex transition delay-100 hover:scale-110 pl-2'><img style={ { alignSelf: "center", marginLeft: "5px" } } src={ Log2 } alt="Logo" className="w-46 h-16" /></Link>
        <div className='flex place-content-end'>
        {
          isAuthenticated ? <LogOut/> : <LoginAuth0/>
        } 
         <Profile/>
          
        </div>    
    </div>
  )
}