import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import Logo from "../ECOM-10_2.png";
import Orderings  from './Orderings';
import SearchBar from "./SearchBox";
import {Link} from 'react-router-dom';
import {
    getArticles,
  } from "../store/actions";

export default function NavBar() {

    let dispatch = useDispatch();

    function resetCharacters(e) {
        e.preventDefault();
        dispatch(getArticles());
      }

  return (
    <div className="bg-slate-800 flex flex-row justify-between mr-3">
      <img src={Logo} alt="Logo" className="w-36 h-26"/>
      <div className="">
        <Orderings />
      </div>
      <div className=" m-5">
        <button onClick={(e) => resetCharacters(e)} className="btn btn-outline btn-accent">Reseteo</button>
      </div>
      <div className="">
        <SearchBar />
      </div>
    </div>
  )
}