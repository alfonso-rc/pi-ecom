import React from "react";
import SearchBar from "./SearchBox";
import Slider from "./Slider/Slider";
import { Link } from "react-router-dom";
import oferta1 from "../imagenes/oferta1.jpg";
import oferta2 from "../imagenes/oferta2.jpg";
import oferta3 from "../imagenes/oferta3.jpg";
import NavBarAdmin from "./NavBarAdmin";
import Footer from "./Footer";
import logo from "../imagenes/logo-ecom.png"

export default function LandingPage() {
  return (
    <div className="bg-white h-full">
      <NavBarAdmin />
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
      <section class="text-gray-600 body-font font-Work py-10">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img class="object-cover object-center rounded" alt="hero" src={logo} />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Encontrá en Ecom
              <br class="hidden lg:inline-block"/>el producto que estás buscando.
            </h1>
            <p class="mb-8 leading-relaxed">Tenemos variedad de productos, un sistema de "coins" en el cual se te devolvera un porcentage en cada compra para que puedas ir acumulando y conseguir el producto que buscas a un precio increible!!</p>
            <div class="flex justify-center">
              <Link to="/home">
                <button className="btn btn-accent btn-lg">
                  Empezá tu busqueda
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="pt-8">
        <Slider />
      </div>
      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
}
