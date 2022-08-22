import { Link } from "react-router-dom";

export default function Card({ id, title, image, price, category }) {
//   return ( <div className="card card-compact w-96 bg-base-100 shadow-xl">
//       <Link to={`/${id}`}>
//       <figure><img src={image} alt="img not found" width="250" heigth="250"/></figure>
//       <div class="card-body">
//     <h2 class="card-title">{title}</h2>
//     <p>{price}</p>
//     <div class="card-actions justify-end">
//       <button class="btn btn-primary">Buy Now</button>
//     </div>
//   </div>
//       </Link>
//   </div>
//   )
// }

  
  return (
    <div className="card-compact w-96 bg-base-100 shadow-xl h-full">
      <Link to={`/${id}`}>
        <figure className="px-10 pt-10">
          <img src={image} alt="img not found" className="rounded-xl h-64"/>
        </figure>
        <div className="card-body items-center justify-center text-center font-Work text-white">
          <h2 className="card-title ">{title}</h2>
          <p>$ {price}</p>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </Link>
    </div>
  );
}
