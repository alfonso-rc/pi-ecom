import React from "react"
import SearchBar from "./SearchBox"
import Slider from "./Slider/Slider"
import { Link } from "react-router-dom";

export default function LandingPage(){
    return(
        <div>
           <SearchBar/>  
           <Slider/>
           <Link to="/home">
           <button className="btn btn-outline btn-success">Empeza tu busqueda</button>
           </Link>
        </div>
    )
}