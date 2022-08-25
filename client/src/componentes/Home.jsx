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

const stylesCategoriesContainer = {
  height: "100px",
  backgroundColor: "#4D4454",
};

export default function Home() {
  let isLoading = useSelector((state) => state.isLoading);
  const allArticle = useSelector((state) => state.articles);
  const allSmartPhones = useSelector((state) => state.smartphones);
  let dispatch = useDispatch();
  // const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [articlePerPage, setArticlePerPage] = useState(12);
  const indexOfLastArticle = currentPage * articlePerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlePerPage;
  const currentArticle = allArticle.slice(
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
        <div className="fixed z-10 pl-4 mr-2">
          <Orderings />
        </div>
        <div className="flex justify-end pb-20">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-x-20 gap-y-32 justify-items-center mx-auto 2xl:mx-56">
            {currentArticle.map((art) => {
              return (
                <div key={art.id} className={card}>
                  <Card
                    key={art.id}
                    id={art.id}
                    image={art.image}
                    title={art.title}
                    price={art.price}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  let circleClasses = "inline-block p-7 rounded-full w-20 mx-auto";
  let card = "card transition delay-100 hover:scale-110 hover:drop-shadow-xl shadow-xl bg-white border-zinc-300 border-2 rounded-8"
  return (
    <div>
      <div className="">
        <div className="fixed top-0 left-0 right-0 z-10 w-screen">
          <NavBar />
          <Carrito />
        </div>
      </div>

      <div
        style={stylesCategoriesContainer}
        className="App grid grid-cols-2 sm:grid-cols-4 gap-10 w-4/4 mx-auto mt-20"
      >
        <button className={circleClasses} onClick={(e) => handleSmartPhone(e)}>
          <FcMultipleSmartphones size={40} />
        </button>
        <button onClick={(e) => handleNotebooks(e)} className={circleClasses}>
          <RiComputerLine size={40} />
        </button>
        <button onClick={(e) => handleTablets(e)} className={circleClasses}>
          <FcTabletAndroid size={40} />
        </button>
        <button onClick={(e) => handleAccesories(e)} className={circleClasses}>
          <FaKeyboard size={40} />
        </button>
      </div>
      <div className="bg-white">
        {/* <SearchBar /> */}
        {/* <button onClick={(e) => resetCharacters(e)}>Reseteo</button> */}
        <div className="pt-5 pb-5">
          <Paginado
            articlePerPage={articlePerPage}
            allArticle={allArticle.length}
            paginado={paginado}
          />
        </div>
        {/* AQUÍ RENDERIZAMOS LOS ITEMS */}
        {isLoading ? <h1>CARGANDO</h1> : <RenderItems />}
      </div>
      <div />

      <div>
        <Footer />
      </div>
    </div>
  );
}
