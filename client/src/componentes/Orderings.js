import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  orderByAZ,
  orderByPrice,
  orderByRating,
  getArticles,
  getSmartphones,
  getNotebooks,
  getAccesories,
  getTablets,
} from "../store/actions/index";
import { ASCENDENTE, DESCENDENTE, MAYOR, MENOR, MEJOR, PEOR } from "../Constants";
import NavBar from "./NavBar";

const stylesDropdown = {
  backgroundColor: "white",
}

export default function Orderings() {
  const allArticle = useSelector((state) => state.articles);
  const allSmartPhones = useSelector((state) => state.smartphones);
  let dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [order, setOrder] = useState("");



  function handleSortAZ(e) {
    e.preventDefault();
    dispatch(orderByAZ(e.target.value));
    // setCurrentPage(1)
    setOrder(e.target.value);
  }
  function handleSortRating(e) {
    e.preventDefault();
    dispatch(orderByRating(e.target.value));
    // setCurrentPage(1)
    setOrder(e.target.value);
  }
  function handleSortPrice(e) {
    e.preventDefault();
    dispatch(orderByPrice(e.target.value));
    //setCurrentPage(1);
    setOrder(e.target.value);
  }
  function resetCharacters(e) {
    e.preventDefault();
    dispatch(getArticles());
  }
  return (
    <div >
      <div className="flex flex-col">
   <button className="btn btn-outline btn-accent m-2" onClick={ (e) => handleSortAZ(e) }  value={ ASCENDENTE }>AZ</button>
   <button className="btn btn-outline btn-accent m-2" onClick={ (e) => handleSortAZ(e) }  value={ DESCENDENTE }>ZA</button>
   <button className="btn btn-outline btn-accent m-2" onClick={ (e) => handleSortPrice(e) }  value={ MAYOR }>Menor precio</button>
   <button className="btn btn-outline btn-accent m-2" onClick={ (e) => handleSortPrice(e) }  value={ MENOR }>Mayor precio</button>
   <button className="btn btn-outline btn-accent m-2" onClick={ (e) => handleSortRating(e) }  value={ MEJOR }>Menos gustados</button>
   <button className="btn btn-outline btn-accent m-2" onClick={ (e) => handleSortRating(e) }  value={ PEOR }>Mayor gustados</button>
   <button onClick={ (e) => resetCharacters(e) } className="btn btn-outline btn-accent m-5">Por defecto</button>
      </div>
    </div>
  );
}


