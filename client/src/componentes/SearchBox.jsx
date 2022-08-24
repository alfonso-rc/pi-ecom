import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getName } from "../store/actions";
import { Link } from "react-router-dom";

const styleSearch = {
  backgroundColor: "white",
  boxShadow: "0px 3px 5px 1px rgba(0, 0, 0, 0.1)",
  marginRight: "5px"
}

export default function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const allArticles = useSelector((state) => state.articles);
  const [currentPage, setCurrentPage] = useState(1);

  function handleInput(e) {
    e.preventDefault();
    setCurrentPage(1)
    setName(e.target.value);
  }


  function handleName(e) {
    e.preventDefault();
    setCurrentPage(1)
    dispatch(getName(name));
  }

  return (
    <nav>
      <div className="m-5">
        <input
          style={ styleSearch }
          className="input input-bordered input-accent w-50 max-w-xs"
          onChange={ (e) => handleInput(e) }
          type="text"
          placeholder="Busqueda por nombre..."
        />
        <button className="btn btn-outline btn-accent"
          type="submit"
          onClick={ (e) => handleName(e) }
        >
          Search
        </button>
      </div>
    </nav>

  );
}