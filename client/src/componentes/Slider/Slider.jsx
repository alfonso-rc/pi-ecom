import s from "./Slider.module.css"
import { mostFavoriteArticles } from "./mostFavoriteArticles"  // LLegan por props
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

export default function Slider() {
   const [actualSlide, setActualSlide] = useState(0)
   const itemsPerPage = window.innerWidth < 600 ? 2 : 4
   const timeInterval = 4300 //milisegundos

   // Para que se
   useEffect(() => {
      const interval = setInterval(() => {
         irAdelante()
      }, timeInterval)
      return () => clearInterval(interval)   // Eliminar el intervalo cuando se desmonte
   }, [actualSlide] //
   )

   function irAdelante() {
      console.log("ir adelante")
      setActualSlide((prev) => {
         if (prev >= mostFavoriteArticles.length - itemsPerPage) return 0
         return prev + 1
      })
   }

   function irAtras() {
      actualSlide <= 0 ?
         setActualSlide(mostFavoriteArticles.length - itemsPerPage) :
         setActualSlide((prev) => prev - 1)
   }


   // EL WIDTH NECESARIO PARA ACOMODAR CORRECTAMENTE LAS IMÁGENES UNA AL LADO DE OTRA
   // EL MARGIN-LEFT ES NECESARIO PARA HACER AVANZAR DE IMAGEN
   const width = `${(mostFavoriteArticles.length) * 100 / itemsPerPage}%`
   const marginLeft = `-${actualSlide * 100 / itemsPerPage}%`
   return (
      <div className={ s.mainContainer }>

         <div className={ s.containerSlider }>
            <div style={ { width: width, marginLeft: marginLeft } } id="slider" className={ s.slider }>
               {
                  mostFavoriteArticles.map((item) => <SliderSection item={ item } />)
               }
               <div onClick={ irAdelante } className={ s.slider_btn_right }>{ ">" }</div>
               <div onClick={ irAtras } className={ s.slider_btn_left }>{ "<" }</div>
            </div>
         </div>
      </div>
   )
}

function SliderSection({ item }) {
   return (
      <div className={ s.slider_section }>
         <img className={ s.slider_img } src={ item.image } alt="slider_image"></img>
         <h4>{ item.title.length > 35 ? item.title.slice(0, 35) + "..." : item.title }</h4>
         <Link className={ s.buttonDetail } to={ `/${item.id}` }>
            <span >VER DETALLE</span>
         </Link>

      </div>
   )
}