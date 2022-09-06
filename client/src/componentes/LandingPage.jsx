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
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={ oferta1 } className="w-full" alt="oferta1" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={ oferta2 } className="w-full" alt="oferta2" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img alt="..."
            src="https://tienda.claro.com.ar/wcsstore/Claro/Attachment/huawei-band-watch-joy-tienda-claro-desktop.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img alt="..."
            src="https://tienda.claro.com.ar/wcsstore/Claro/Attachment/motorola-familia-g-tienda-claro-desktop.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      <section className="text-gray-600 body-font font-Work py-10">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img className="object-cover object-center rounded" alt="hero" src={ logo } />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Encuentra en Ecom
              <br className="hidden lg:inline-block"/>el producto que estás buscando.
            </h1>
            <p className="mb-8 leading-relaxed">Contamos con una gran variedad de productos al alcance de tus manos, disfruta de las nuevas tecnologías y las mejores marcas del mercado a precios increibles y con un excelente servicio de entregas en la puerta de tu casa.</p>
            <div className="flex justify-center">
              <Link to="/home">
                <button className="btn btn-accent btn-lg">
                  Empieza tu busqueda
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
