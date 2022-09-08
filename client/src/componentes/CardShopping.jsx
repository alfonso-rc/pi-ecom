import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function CardShopping({image, title, id, price, date}){
    return(
        <div>
          <div className="card card-side bg-base-100 shadow-xl font-Work text-white ">
            <figure className="w-40 h-52 sm:w-64 sm:h-96 bg-white"><img className=" mx-0" src={image} alt="img not found"/></figure>
            <div className="card-body flex justify-center bg-gradient-to-t from-slate-900 to-slate-700 flex-col w-40 h-52  sm:w-64 sm:h-96 ">
              <h2 className="card-title flex justify-center text-base sm:text-xl">{title}</h2>
              <p className="flex flex-col justify-end text-xs sm:text-base"><span className="font-bold">Fecha de adquisición:</span> {date}</p>
              <p className="flex justify-center pt-0 sm:pt-6 text-xs sm:text-base"><span className="font-bold">Precio:</span>${price}</p>
              <p></p>
              <div className="card-actions justify-center ">
                <Link to={`/${id}`} className="btn btn-primary btn-xs sm:btn-md">Ver</Link>
              </div>
            </div>
          </div>
        </div>
    )
}


