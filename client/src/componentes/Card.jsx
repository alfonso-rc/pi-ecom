import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../store/actions";
import { BsFillSuitHeartFill } from "react-icons/bs";

import React from "react";
const stylesCard = {
  backgroundColor: "white",
  boxShadow: "0px 3px 8px 0px rgba(0, 0, 0, 0.3)",
  color: "gray",
  borderRadius: "4px",
  minWidth: "200px",
};

const stylesText = {
  backgroundColor: "white",
  padding: "5px",
  boxShadow: "0px 3px 5px 1px rgba(0, 0, 0, 0.1)",
  color: "gray",
  borderRadius: "4px",
};

const stylesImg = {
  objectFit: "contain",
};

export default function Card({ id, title, image, price, category }) {
  const dispatch = useDispatch();
  function addCart(item) {
    dispatch(addToCart(item));
  }
  // return (
  //   <div style={ stylesCard } className="card-compact w-96 bg-base-100 shadow-xl h-full">
  //       <figure className="px-10 pt-10">
  //         <img style={ stylesImg } src={ image } alt="img not found" className="rounded-xl h-64" />
  //       </figure>
  //       <div className="card-body items-center justify-center text-center font-Work text-white">
  //         <h2 style={ stylesText } className="card-title ">{ title }</h2>
  //         <h5 style={ stylesText }> $ { price }</h5>
  //         <div className="card-actions">
  //           <button className="btn btn-primary">Buy Now</button>
  //         </div>
  //       </div>
  //     <button onClick={addCart} className="btn btn-primary">añadir al carrito</button>
  //   </div>
  // );
  return (
    <div
      style={stylesCard}
      className="card-compact bg-base-100 shadow-xlshadow-xl w-64 h-full lg:w-72 lg:h-full xl:w-80 xl:h-full 2xl:w-96 2xl:h-full"
    >
      <Link to={`/${id}`}>
        <figure className="px-10 pt-10">
          <img
            style={stylesImg}
            src={image}
            alt="img not found"
            className="rounded-xl h-64"
          />
        </figure>
        <div className="card-body items-center justify-center text-center font-Work text-white">
          <h2 style={stylesText} className="card-title ">
            {title}
          </h2>
          <h5 style={stylesText}> $ {price}</h5>
          <div className="card-actions ">
            <button className="btn btn-primary">Detalle</button>
          </div>
        </div>
      </Link>
      {/* <div class="rating gap-1">
  <input type="radio" name="rating-3" class="mask mask-heart bg-red-400" />
  <input type="radio" name="rating-3" class="mask mask-heart bg-orange-400" checked />
  <input type="radio" name="rating-3" class="mask mask-heart bg-yellow-400" />
  <input type="radio" name="rating-3" class="mask mask-heart bg-lime-400" />
  <input type="radio" name="rating-3" class="mask mask-heart bg-green-400" />
</div> */}

      <div className="pb-6">
        <button
          onClick={() => addCart({ id, title, image, price, category })}
          className="btn btn-outline btn-primary"
        >
          añadir al carrito
        </button>
      </div>
    </div>
  );
}
