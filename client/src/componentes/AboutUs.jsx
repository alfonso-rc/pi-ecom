import Footer from "./Footer";
import NavBarDetail from "./NavBarDetail";
import {BsLinkedin} from "react-icons/bs"
import logo from "../imagenes/logo-ecom.png"

export default function AboutUs() {
    return ( 
        <div>
            <div>
            <NavBarDetail/>
            </div>
            <div class="hero min-h-screen bg-base-200">
     <title class="text-5xl font-bold">SOBRE NOSOTROS</title>
        {/* <p>
Ecom es una empresa de venta de articulos tecnologicos ficticia con el fin de desarrollar nuestras habilidades aprendidas en la academia de Henry. El proyecto es grupal con la finalidad de poder acercarnos a como vendria siendo a un trabajo. 
Este trabajo deja mostrar la logica y la forma que se veria un E-COMERCE. 
</p> */}
<div class="hero-content flex-col lg:flex-row">
<p class="py-6">Ecom es un Ecommerse de articulos de tecnología desarrollada sobre la premisa de una simulacion de un proyecto grupal en un ambito laboral, con el cual quisimos sacar nuestro mayor provecho de nuestros conocimientos aprendidos en la academia de Henry. Es por eso que nuestro modelo se basa en un Ecommerse ya que tiene funcionalidades tanto como en el front como en el back igual de complejas y implementar nuevas tecnologias aprendidas en el trayecto.
Nos asociamos con nuestros compañeros de trabajo para diseñar los primeros productos electronicos para clientes. Esto para crear un mercado tecnologico con opciones mejores y estilizado lo mas amigable para el cliente.
 De forma de practica pudimos demostrar en lo que ustedes ven ahora mismo como nuestro Proyecto Final o como el Primero de muchos.</p>
 <title>Esto no se podria haber desarrollado sin la ayuda de:</title>
 <p>Juan Ignacion Biondi <BsLinkedin/></p>
 <p>Nicolas Lautaro Zacarias <BsLinkedin/></p>
 <p>Alejandro Jaramillo Silva <BsLinkedin/></p>
 <p>Mariana Mercado <BsLinkedin/></p>
 <p>Carlos Cruz <BsLinkedin/></p>
 <p>Lautaro Rematozo <BsLinkedin/></p>
 <p>Alfonso Rosas <BsLinkedin/></p>
 <img class="max-w-sm rounded-lg shadow-2xl" alt="hero" src={ logo } />
 </div>
 </div>
        </div>
    )
}