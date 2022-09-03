import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import CardShopping from "./CardShopping";
import { getShopping } from "../store/actions";

export default function MisCompras() {
  const articulosShopping = useSelector((state) => state.shoppings);
  console.log(articulosShopping)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getShopping());
  }, [dispatch]);

  return (
    <div>
      {articulosShopping.map((art) => {
        return <CardShopping key={art.id} title={art.title} image={art.image} />;
      })}
    </div>
  );
}
