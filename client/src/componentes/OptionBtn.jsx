import React from "react";
import { useState } from "react";
import { IoMenu } from "react-icons/io5"

import Profile from './LoginComponents/Profile';
import LoginAuth0 from './LoginComponents/loginAuth0';




const OptionBtn = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="flex pt-5 flex-row md:flex-col">
            <div className="flex justify-start">
                <label className="btn btn-sm m-1 text-3xl text-white  bg-primary border-0">
                    <IoMenu />
                    <input type="button" onClick={ () => setOpen(!open) } />
                </label>

            </div>
            <div className="flex flex-row bg-primary opacity-100 rounded-md shadow-xl absolute  h-20 mt-14 mr-20">
                { open ? sessionStorage.name ? <div className=""><Profile /></div> : <div><LoginAuth0 /></div> : null }
            </div>
        </div>

    )
}

export default OptionBtn