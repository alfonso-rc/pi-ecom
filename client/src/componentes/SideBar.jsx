import React from "react";
import { useState } from "react";
import Orderings from "./Orderings";

const SideBar = () =>{
    const [open, setOpen] = useState (false);



    return(
        <div className="flex fixed z-10 pl-2 mr-2 shadow-xl">
            <div className="flex flex-row md:flex-col ">
                <div className="flex justify-start">
                    <label className="btn swap swap-rotate" >
                        <p className="pl-10 hidden md:block">Filtros</p>
                        <input type="checkbox" onClick={() => setOpen(!open)}/>
                        <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
                        <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>
                    </label>  
                </div>
                <div className="flex flex-row bg-primary opacity-90 rounded-md">
                    {open ? <Orderings/> : null}
                </div>
            </div>  
        </div>
        
    )
}

export default SideBar