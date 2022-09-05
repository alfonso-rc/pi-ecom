import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import CardShopping from "./CardShopping";
import { getShopping } from "../store/actions";

export default function MisCompras() {
  const articulosShopping = useSelector((state) => state.shoppings);
  const [loading, setLoading] = useState(false)
  console.log(articulosShopping)
  const dispatch = useDispatch();

  useEffect(() => {
    const miscompras = sessionStorage.getItem("id")
    console.log("mi id", miscompras)
    dispatch(getShopping());
  }, [dispatch]);

  useEffect(() => {
    setLoading(true)
  }, [articulosShopping]);


  return (
    <div>
      {/* {loading ? "cargando" : 
    articulosShopping.length && articulosShopping.map((art) => {
        return <CardShopping key={art.id} title={art.title} image={art.image} />;
      })} */}
      {loading?(
      articulosShopping.length?(
        articulosShopping.map((art)=>{
        return( <CardShopping key={art.id} title={art.title} image={art.image} />)
        })) :(
          <img className='loading' src='http://userscontent2.emaze.com/images/29869c73-86e2-43ed-b2ab-c34d4ef42746/41b81fc0-6f20-471f-a049-75e70a5f7c58.gif'/>
        )):
        <img className='loading' src='http://userscontent2.emaze.com/images/29869c73-86e2-43ed-b2ab-c34d4ef42746/41b81fc0-6f20-471f-a049-75e70a5f7c58.gif'/>

      }
    </div>
  );
}
