
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../store/actions";
import {BsLinkedin} from "react-icons/bs"
import React from "react";
import fotoNico from "../imagenes/userPhotos/fotoNico.jpeg"


export default function CardUs({ }) {
    const dispatch = useDispatch();


    return (
     <div  className="flex flex-row flex-wrap justify-center  gap-10 font-Work"> 
 {/* <div class="avatar">
  <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src="https://placeimg.com/192/192/people" alt="img not found"/>
  </div>
  <p>Juan Ignacion Biondi </p>
</div> */}
<div className="card w-60 bg-white shadow-xl text-black border-2 border-stone-500 border-opacity-20">
  <div className="card-body">
    <h2 className="card-title text-lg">Juan Ignacion Biondi</h2>
    <div className="avatar">
    <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src="https://placeimg.com/192/192/people" alt="img not found"/>
  </div>
  </div>
    <div className="card-actions justify-end">
      <button className="btn btn-primary"><BsLinkedin/></button>
    </div>
  </div>
</div>
<div className="card w-60 bg-white shadow-xl text-black border-2 border-stone-500 border-opacity-20">
  <div className="card-body">
    <h2 className="card-title text-lg">Nicolas Lautaro Zacarias</h2>
    <div className="avatar">
    <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src={fotoNico} alt="img not found"/>
  </div>
  </div>
    <div className="card-actions justify-end">
      <button className="btn btn-primary"><BsLinkedin/></button>
    </div>
  </div>
</div>
<div className="card w-60 bg-white shadow-xl text-black border-2 border-stone-500 border-opacity-20">
  <div className="card-body">
    <h2 className="card-title text-lg">Alejandro Jaramillo Silva</h2>
    <div className="avatar">
    <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src="https://placeimg.com/192/192/people" alt="img not found"/>
  </div>
  </div>
    <div className="card-actions justify-end">
      <button className="btn btn-primary"><BsLinkedin/></button>
    </div>
  </div>
</div>

<div className="card w-60 bg-white shadow-xl text-black border-2 border-stone-500 border-opacity-20">
  <div className="card-body">
    <h2 className="card-title text-lg">Mariana Mercado</h2>
    <div className="avatar">
    <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src="https://placeimg.com/192/192/people" alt="img not found"/>
  </div>
  </div>
    <div className="card-actions justify-end">
      <button className="btn btn-primary"><BsLinkedin/></button>
    </div>
  </div>
</div>

<div className="card w-60 bg-white shadow-xl text-black border-2 border-stone-500 border-opacity-20">
  <div className="card-body">
    <h2 className="card-title text-lg">Carlos Cruz</h2>
    <div className="avatar">
    <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src="https://placeimg.com/192/192/people" alt="img not found"/>
  </div>
  </div>
    <div className="card-actions justify-end">
      <button className="btn btn-primary"><BsLinkedin/></button>
    </div>
  </div>
</div>

<div className="card w-60 bg-white shadow-xl text-black border-2 border-stone-500 border-opacity-20">
  <div className="card-body">
    <h2 className="card-title text-lg">Lautaro Retamozo</h2>
    <div className="avatar">
    <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src="https://placeimg.com/192/192/people" alt="img not found"/>
  </div>
  </div>
    <div className="card-actions justify-end">
      <button className="btn btn-primary"><BsLinkedin/></button>
    </div>
  </div>
</div>

<div className="card w-60 bg-white shadow-xl text-black border-2 border-stone-500 border-opacity-20">
  <div className="card-body">
    <h2 className="card-title text-lg">Alfonso Rosas</h2>
    <div className="avatar">
    <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
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