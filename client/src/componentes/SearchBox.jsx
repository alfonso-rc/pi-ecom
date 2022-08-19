import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getName } from "../store/actions";
import { Link } from "react-router-dom";


export default function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const allArticles = useSelector((state) => state.articles);

  function handleInput(e) {
    e.preventDefault();
    setName(e.target.value);
  }
 

  function handleName(e) {
    e.preventDefault();
    dispatch(getName(name));
  }

  return (
    <nav>
      <div>
        <input
          onChange={(e) => handleInput(e)}
          type="text"
          placeholder="Busqueda por nombre..."
        />
        <button
          type="submit"
          onClick={(e) => handleName(e)}
        >
          Search
        </button>
      </div>
    </nav>
  );
}