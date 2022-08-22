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
import SearchBar from "./SearchBox";
import {RiComputerLine} from "react-icons/ri"
import {FcMultipleSmartphones, FcTabletAndroid} from "react-icons/fc"
import {FaKeyboard} from "react-icons/fa"


export default function Home() {
  const allArticle = useSelector((state) => state.articles);
  const allSmartPhones = useSelector((state) => state.smartphones);
  let dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
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
    setLoading(true);
  }, [dispatch]);

  function handleSortAZ(e) {
    e.preventDefault();
    dispatch(orderByAZ(e.target.value));
    // setCurrentPage(1)
    setOrder(e.target.value);
  }
  function handleSortPrice(e) {
    e.preventDefault();
    dispatch(orderByPrice(e.target.value));
    setCurrentPage(1);
    setOrder(e.target.value);
  }
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
  function resetCharacters(e) {
    e.preventDefault();
    dispatch(getArticles());
  }
  let circleClasses = "inline-block p-7 rounded-full w-20 mx-auto";
  return (
    <div className="bg-white">
      <SearchBar/>
      <button onClick={(e) => resetCharacters(e)}>Reseteo</button>
      <div>
        <div className="App grid grid-cols-2 sm:grid-cols-4 gap-10 w-4/4 mx-auto">
          <button className={circleClasses} onClick={(e) => handleSmartPhone(e)} ><FcMultipleSmartphones size={70}/></button>
          <button onClick={(e) => handleNotebooks(e)} className={circleClasses} ><RiComputerLine size={70}/></button>
          <button onClick={(e) => handleTablets(e)} className={circleClasses}><FcTabletAndroid size={70}/></button>
          <button onClick={(e) => handleAccesories(e)} className={circleClasses}><FaKeyboard size={70}/></button>
        </div>
        <div>
          <Paginado
            articlePerPage={articlePerPage}
            allArticle={allArticle.length}
            paginado={paginado}
          />
        </div>
        <div>
          <select className="select select-primary w-full max-w-xs" onChange={(e) => handleSortAZ(e)}>
          <option disabled selected>Ordenar por...</option>
            <option value="AZ">AZ</option>
            <option value="ZA">ZA</option>
          </select>

          <select className="select select-primary w-full max-w-xs" onChange={(e) => handleSortPrice(e)}>
          <option disabled selected>Ordenar por...</option>
            <option value="may">Mayor precio</option>
            <option value="men">Menor precio</option>
          </select>
        </div>
        <div className=" grid grid-cols-1 lg:grid-cols-3 gap-8">
        {currentArticle.map((art) => {
          return (
              <Card
                key={art.id}
                id={art.id}
                image={art.image}
                title={art.title}
                price={art.price}
              />
          );
        })}
        </div>
      </div>
    </div>
  );
}
