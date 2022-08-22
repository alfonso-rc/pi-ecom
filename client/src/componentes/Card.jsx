import { Link } from "react-router-dom";

export default function Card({ id, title, image, price, category }) {
  // return <div>
  //     <Link to={`/${id}`}>
  //     <h3>{title}</h3>
  //     <img src={image} alt="img not found" width="250" heigth="250" />
  //     </Link>

  //      <p>Price: $ {price || Price} </p>
  // </div>


  
  return (
    <div className="card  bg-transparent shadow-xl justify-center">
      <Link to={`/${id}`}>
        <div className="grid grid-row-2">
          <div>
            <figure className="px-10 pt-10">
              <img src={image} alt="img not found" className="rounded-xl" width="200" heigth="200px" />
            </figure>
          </div>
          <div className="card-body items-center text-center justify-center">
            <h2 className="card-title">{title}</h2>
            <p>$ {price}</p>
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
