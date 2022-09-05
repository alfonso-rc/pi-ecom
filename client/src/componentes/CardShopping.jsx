import React from "react";
import { useDispatch } from "react-redux";

export default function CardShopping({image, title, id}){

    return(
        <div>
        <div className="card card-side bg-base-100 shadow-xl card-compact shadow-xlshadow-xl w-64 sm:w-80 h-full">
        <figure><img className="h-full mx-0" src={image} alt="img not found"/></figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          {/* <p>Click the button to watch on Jetflix app.</p> */}
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>
      </div>
    )

}


