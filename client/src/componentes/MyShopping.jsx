import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import CardShopping from "./CardShopping";
import { getShopping } from "../store/actions";
import NavBarDetail from "./NavBarDetail";
import Footer from "./Footer";

export default function MisCompras() {
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch();
  const [articles, setArticles] = useState([]);

  const BASE_URL = process.env.REACT_APP_API_URL;
  const URL_GET_ARTICLES_BOUGHT =
    process.env.NODE_ENV === "production"
      ? BASE_URL + "/article/"
      : `http://localhost:3001/myShoppings/get`;

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
      <div className="flex flex-row flex-wrap justify-evenly gap-y-11 gap-x-6 px-2 mx-auto sm:mx-56">
        { articles.map((art) => {
          return <CardShopping key={ art.id } title={ art.title } image={ art.image } />;
        }) }
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
