import axios from 'axios';
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  orderByAZ,
  orderByPrice,
  getArticles,
  getSmartphones,
  getNotebooks,
  getAccesories,
  getTablets,
} from "../store/actions";
import Card from "./Card";
import Paginado from "./Paginado";
import NavBar from "./NavBar";
import { RiComputerLine } from "react-icons/ri";
import { FcMultipleSmartphones, FcTabletAndroid } from "react-icons/fc";
import { FaKeyboard } from "react-icons/fa";
import { SearchBar } from "./SearchBox";
import Carrito from "./Carrito";
import Orderings from "./Orderings";
import Footer from "./Footer";
import NotFound from "./NotFound";
import loading from "../imagenes/loading2.gif"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SideBar from "./SideBar";
import SubscibeMail from './SubscribeMail/SubscribeMail.jsx'

// import FilterCategories from './FilterCategories/FilterCategories.jsx'
// Iconos de filtrado
import smartphoneIcon from '../imagenes/Filter/smart.png'
import laptopIcon from '../imagenes/Filter/laptop.png'
import tabletIcon from '../imagenes/Filter/tablet.png'
import accesoriesIcon from '../imagenes/Filter/acce.png'

const stylesCategoriesContainer = {
  height: "100px",
  backgroundColor: "#f2f2f2",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
  padding: "0 1rem"
};

const styleButtonCategory = {
  // border: "1px solid blue",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  position: "relative"
}

const styleButtonTextCategory = {
  transform: "translateX(0%)"
}


export default function Home() {

  // Funcion que permite saber si un usuario ha iniciado sesión
  // retorna "true" o "false"
  function askIfUserIsLogged() {
    const token = sessionStorage.getItem("token");
    return token ? true : false
  }
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////// TRAER USUARIO DE GOOGLE ////////////////////////////////////////////

  const getGoogleUser = async () => {
    try {
      let response = (await axios.get("http://localhost:3001/google/User")).data;
      if (!response.error) {
        sessionStorage.clear();
        for (const item in response) {
          sessionStorage.setItem(item, response[item]);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getGoogleUser();
  }, []);

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const arrayFilter = useSelector((state) => state.filteredArticle);
  let isLoading = useSelector((state) => state.isLoading);
  const allArticle = useSelector((state) => state.articles);
  const allSmartPhones = useSelector((state) => state.smartphones);
  let allArticle1 = arrayFilter.length ? arrayFilter : allArticle


  let dispatch = useDispatch();
  // const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [articlePerPage, setArticlePerPage] = useState(12);
  const indexOfLastArticle = currentPage * articlePerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlePerPage;
  const currentArticle = allArticle1.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );
  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getArticles());
  }, []);

  // function handleSortAZ(e) {
  //   e.preventDefault();
  //   dispatch(orderByAZ(e.target.value));
  //   // setCurrentPage(1)
  //   setOrder(e.target.value);
  // }
  // function handleSortPrice(e) {
  //   e.preventDefault();
  //   dispatch(orderByPrice(e.target.value));
  //   setCurrentPage(1);
  //   setOrder(e.target.value);
  // }
  function handleSmartPhone(e) {
    // e.preventDefault()
    dispatch(getSmartphones(e.target.value));
    console.log(e.target.value);
    // console.log(getSmartphones)
    setCurrentPage(1);
    // setOrder(e.target.value)
  }
  function handleNotebooks(e) {
    // e.preventDefault()
    dispatch(getNotebooks(e.target.value));
    // console.log(getSmartphones)
    setCurrentPage(1);
    // setOrder(e.target.value)
  }
  function handleTablets(e) {
    // e.preventDefault()
    dispatch(getTablets(e.target.value));
    // console.log(getSmartphones)
    setCurrentPage(1);
    // setOrder(e.target.value)
  }
  function handleAccesories(e) {
    // e.preventDefault()
    dispatch(getAccesories(e.target.value));
    // console.log(getSmartphones)
    setCurrentPage(1);
    // setOrder(e.target.value)
  }

  // function resetCharacters(e) {
  //   e.preventDefault();
  //   dispatch(getArticles());
  // }

  function RenderItems() {
    return (
      <div>
        <div className="flex justify-end pb-20 pt-8">
          <div className="flex flex-row flex-wrap justify-evenly gap-y-11 gap-x-6 px-2 mx-auto sm:mx-56">
            { currentArticle.map((art) => {
              return (
                <div key={ art.id } className={ card }>
                  <Card
                    key={ art.id }
                    id={ art.id }
                    image={ art.image }
                    title={ art.title }
                    price={ art.price }
                  />
                </div>
              );
            }) }
          </div>
        </div>
      </div>
    );
  }

  let circleClasses = "p-7 w-20 mx-auto";
  let card = "card transition delay-100 hover:scale-110 hover:drop-shadow-xl shadow-xl bg-white border-zinc-300 border-2 rounded-8"
  return (
    <div style={ { position: "relative" } }>

      <div className="fixed top-0 left-0 right-0 z-20 w-screen">
        <NavBar />
        <Carrito />
      </div>

      {/* COMPONENTE PARA FILTRAR POR CATEGORÍAS */ }
      <div
        style={ stylesCategoriesContainer }
        className="mt-20"
      >
        <button style={ styleButtonCategory } className={ circleClasses } onClick={ (e) => handleSmartPhone(e) }>
          <img style={ { maxWidth: "232x" } } src={ smartphoneIcon } alt="..." />
          <span style={ styleButtonTextCategory }>Smartphones</span>
        </button>
        <button style={ styleButtonCategory } onClick={ (e) => handleNotebooks(e) } className={ circleClasses }>
          <img style={ { maxWidth: "45px" } } src={ laptopIcon } alt="..." />
          <span style={ styleButtonTextCategory }>Laptops</span>
        </button>
        <button style={ styleButtonCategory } onClick={ (e) => handleTablets(e) } className={ circleClasses }>
          <img style={ { maxWidth: "30px" } } src={ tabletIcon } alt="..." />
          <span style={ styleButtonTextCategory }>Tablets</span>
        </button>
        <button style={ styleButtonCategory } onClick={ (e) => handleAccesories(e) } className={ circleClasses }>
          <img style={ { maxWidth: "40px" } } src={ accesoriesIcon } alt="..." />
          <span style={ styleButtonTextCategory }>Accesories</span>
        </button>
      </div>
      <div className="bg-white">
        <SideBar paginado={paginado}/>



        {/* <div className="fixed z-10 pl-4 mr-2 pt-6">
          <Orderings/>
        </div> */}
        {/* <SearchBar /> */ }
        {/* <button onClick={(e) => resetCharacters(e)}>Reseteo</button> */ }









        {/* AQUÍ RENDERIZAMOS LOS ITEMS */ }
        { isLoading ? <div className="flex  place-content-center">
          { <img src={ loading } alt="img not found" /> }
        </div> : <RenderItems /> }
      </div>
      <div />
      <ToastContainer />
      <div className="pt-5 pb-5 bg-white">
        <Paginado
          articlePerPage={ articlePerPage }
          allArticle={ allArticle1.length }
          paginado={ paginado }
        />
      </div>

      {/* MOSTRAMOS EL COMPONENTE SubscibeMail SI NO HAY UNA SESIÓN INICIADA */ }
      {
        askIfUserIsLogged() ? null : <SubscibeMail />
      }


      <div>
        <Footer />
      </div>
    </div>
  );
}
