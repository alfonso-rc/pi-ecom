
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../store/actions";
import {BsLinkedin} from "react-icons/bs"
import React from "react";
import fotoNico from "../imagenes/userPhotos/fotoNico.jpeg"


export default function CardUs({ }) {
    const dispatch = useDispatch();


    return (
     <div> 
 {/* <div class="avatar">
  <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src="https://placeimg.com/192/192/people" alt="img not found"/>
  </div>
  <p>Juan Ignacion Biondi </p>
</div> */}
<div className="card w-60 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Juan Ignacion Biondi</h2>
    <div class="avatar">
    <div class="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src="https://placeimg.com/192/192/people" alt="img not found"/>
  </div>
  </div>
    <div className="card-actions justify-end">
      <button className="btn btn-primary"><BsLinkedin/></button>
    </div>
  </div>
</div>
<div className="card w-60 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Nicolas Lautaro Zacarias</h2>
    <div class="avatar">
    <div class="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src={fotoNico} alt="img not found"/>
  </div>
  </div>
    <div className="card-actions justify-end">
      <button className="btn btn-primary"><BsLinkedin/></button>
    </div>
  </div>
</div>
<div className="card w-60 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Alejandro Jaramillo Silva</h2>
    <div class="avatar">
    <div class="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src="https://placeimg.com/192/192/people" alt="img not found"/>
  </div>
  </div>
    <div className="card-actions justify-end">
      <button className="btn btn-primary"><BsLinkedin/></button>
    </div>
  </div>
</div>

<div className="card w-60 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Mariana Mercado</h2>
    <div class="avatar">
    <div class="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src="https://placeimg.com/192/192/people" alt="img not found"/>
  </div>
  </div>
    <div className="card-actions justify-end">
      <button className="btn btn-primary"><BsLinkedin/></button>
    </div>
  </div>
</div>

<div className="card w-60 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Carlos Cruz</h2>
    <div class="avatar">
    <div class="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src="https://placeimg.com/192/192/people" alt="img not found"/>
  </div>
  </div>
    <div className="card-actions justify-end">
      <button className="btn btn-primary"><BsLinkedin/></button>
    </div>
  </div>
</div>

<div className="card w-60 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Lautaro Rematozo</h2>
    <div class="avatar">
    <div class="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src="https://placeimg.com/192/192/people" alt="img not found"/>
  </div>
  </div>
    <div className="card-actions justify-end">
      <button className="btn btn-primary"><BsLinkedin/></button>
    </div>
  </div>
</div>

<div className="card w-60 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Alfonso Rosas</h2>
    <div class="avatar">
    <div class="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src="https://placeimg.com/192/192/people" alt="img not found"/>
  </div>
  </div>
    <div className="card-actions justify-end">
      <button className="btn btn-primary"><BsLinkedin/></button>
    </div>
  </div>
</div>
     </div>
    );
  }