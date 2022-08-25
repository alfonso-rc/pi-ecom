import React from "react";
import SearchBar from "./SearchBox";
import Slider from "./Slider/Slider";
import { Link } from "react-router-dom";
import oferta1 from "../imagenes/oferta1.jpg";
import oferta2 from "../imagenes/oferta2.jpg";
import oferta3 from "../imagenes/oferta3.jpg";
import NavBarDetail from "./NavBarDetail";

export default function LandingPage() {
  return (
    <div className="bg-white h-full">
      <NavBarDetail />
      <div class="carousel w-full">
        <div id="slide1" class="carousel-item relative w-full">
          <img src={oferta1} class="w-full" />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" class="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" class="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" class="carousel-item relative w-full">
          <img src={oferta2} class="w-full" />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" class="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" class="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" class="carousel-item relative w-full">
          <img
            src="https://tienda.claro.com.ar/wcsstore/Claro/Attachment/huawei-band-watch-joy-tienda-claro-desktop.jpg"
            class="w-full"
          />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" class="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" class="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" class="carousel-item relative w-full">
          <img
            src="https://tienda.claro.com.ar/wcsstore/Claro/Attachment/motorola-familia-g-tienda-claro-desktop.jpg"
            class="w-full"
          />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" class="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" class="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      <Link to="/home">
        <button className="btn btn-outline btn-success">
          Empeza tu busqueda
        </button>
      </Link>
      <Slider />
    </div>
  );
}
