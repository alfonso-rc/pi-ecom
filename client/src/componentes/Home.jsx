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

export default function Home() {
  const allArticle = useSelector((state) => state.articles);
  const allSmartPhones = useSelector((state) => state.smartphones);
  let dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [order, setOrder] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [articlePerPage, setArticlePerPage] = useState(15);
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
  return (
    <div>
      <SearchBar />
      <button onClick={(e) => resetCharacters(e)}>Reseteo</button>
      <div>
        <div>
          <button onClick={(e) => handleSmartPhone(e)}>Smartphones</button>
          <button onClick={(e) => handleNotebooks(e)}>Notebooks</button>
          <button onClick={(e) => handleTablets(e)}>Tablets</button>
          <button onClick={(e) => handleAccesories(e)}>Accesorios</button>
        </div>
        <div>
          <Paginado
            articlePerPage={articlePerPage}
            allArticle={allArticle.length}
            paginado={paginado}
          />
        </div>
        <div>
          <select onChange={(e) => handleSortAZ(e)}>
            <option value="AZ">AZ</option>
            <option value="ZA">ZA</option>
          </select>

          <select onChange={(e) => handleSortPrice(e)}>
            <option value="may">Mayor precio</option>
            <option value="men">Menor precio</option>
          </select>
        </div>
        {currentArticle.map((art) => {
          return (
            <div key={art.id}>
              <Card
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
  );
}
