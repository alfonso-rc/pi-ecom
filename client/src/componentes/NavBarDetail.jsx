import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import Log2 from "../imagenes/logo-ecom.png";
import { Link } from 'react-router-dom';
import {
  toggleCart,
} from "../store/actions";
import Profile from './LoginComponents/Profile';
import LogOut from './LoginComponents/logOut';
import LoginAuth0 from './LoginComponents/loginAuth0';

const styleNavBar = {
  boxShadow: "0px 3px 5px 1px rgba(0, 0, 0, 0.1)",
}

export default function NavBarDetail() {
  let dispatch = useDispatch();
  return (
    <div style={ styleNavBar } className="bg-primary from-slate-400  to-slate-600 flex place-content-between mr-3 ">
        <Link to="/home" className='flex transition delay-100 hover:scale-110 pl-2'><img style={ { alignSelf: "center", marginLeft: "5px" } } src={ Log2 } alt="Logo" className="w-46 h-16" /></Link>
        <div className='flex place-content-end '>
          <LogOut/>
        {        
        sessionStorage.name ? <Profile/> : <LoginAuth0/>
      }
        
          
            <div className=" m-5">
                {/* BOTÓN PARA MOSTRAT EL CARRITO */ }
                <button onClick={ () => dispatch(toggleCart()) } className="btn btn-outline text-white ">{ <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                </svg> }</button>
            </div>
        </div>    
    </div>
  )
};
