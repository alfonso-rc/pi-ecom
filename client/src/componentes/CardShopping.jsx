import React from "react";
import { useDispatch } from "react-redux";

export default function CardShopping({image, title, id}){

    return(
        <div>
            <img src={image} alt="img not found" />
            <h3>{title}</h3>
        </div>
    )

}