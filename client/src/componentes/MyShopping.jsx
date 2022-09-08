import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import CardShopping from "./CardShopping";
import { getShopping } from "../store/actions";
import NavBarDetail from "./NavBarDetail";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default function MisCompras() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch();
  const [articles, setArticles] = useState([]);

  const BASE_URL = process.env.REACT_APP_API_URL;
  const URL_GET_ARTICLES_BOUGHT =
    process.env.NODE_ENV === "production"
      ? BASE_URL + "/myShoppings/get/"
      : `http://localhost:3001/myShoppings/get`;


  console.log();
  useEffect(() => {
    // Pedimos el detalle del artículo
    const idUser = sessionStorage.getItem("id")
    console.log("USUARIO", idUser)
    axios.get(URL_GET_ARTICLES_BOUGHT, {
      params: {
        idUser: idUser,
      }
    })
      .then((response) => {
        setArticles(response.data);
      })
  }, [URL_GET_ARTICLES_BOUGHT]);
  return (
    <div>
      <div>
        <NavBarDetail />
      </div>
      <div className="bg-slate-100 min-h-screen">
        <h1 className="text-4xl text-black font-Work p-10">Mis compras</h1>
        <div className="flex flex-row flex-wrap justify-evenly gap-y-11 gap-x-6 px-2 mx-auto py-4">
        {
          articles.length ? (
            articles.map((art) => {
              return( <CardShopping key={art.id} id={art.id} title={art.title} image={art.image} price={art.price} date={art.date.slice(0,10)}/>
          )}) 
          ) : (<div><p className="py-20 font-Work text-2xl font-bold flex justify-center text-slate-700">Aun no has realizado ninguna compra</p><br/><Link to="/home" className="btn btn-wide">Volver</Link></div>)
        }
         </div>
      </div>
      <div className="pt-4">
        <Footer/>
      </div>
    </div>
  );
}
