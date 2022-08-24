import { Link } from "react-router-dom";

const stylesCard = {
  backgroundColor: "white",
  boxShadow: "0px 3px 8px 0px rgba(0, 0, 0, 0.3)",
  color: "gray",
  borderRadius: "4px",
}

const stylesText = {
  backgroundColor: "white",
  padding: "5px",
  boxShadow: "0px 3px 5px 1px rgba(0, 0, 0, 0.1)",
  color: "gray",
  borderRadius: "4px"
}

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
    <div style={ stylesCard } className="card-compact w-96 bg-base-100 shadow-xl h-full">
      <Link to={ `/${id}` }>
        <figure className="px-10 pt-10">
          <img src={ image } alt="img not found" className="rounded-xl h-64" />
        </figure>
        <div className="card-body items-center justify-center text-center font-Work text-white">
          <h2 style={ stylesText } className="card-title ">{ title }</h2>
          <h5 style={ stylesText }> $ { price }</h5>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </Link>
    </div>
  );
}
// return (
//   <div className="card-compact w-96 bg-white shadow-xl h-full border-slate-800">
//     <Link to={`/${id}`}>
//       <figure className="px-10 pt-10">
//         <img src={image} alt="img not found" className="rounded-xl h-64"/>
//       </figure>
//       <div className="card-body items-center justify-center text-center font-Work text-slate-900">
//         <h2 className="card-title ">{title}</h2>
//         <p className="font-bold">$ {price}</p>
//         <div className="card-actions">
//           <button className="btn btn-primary">Buy Now</button>
//         </div>
//       </div>
//     </Link>
//   </div>
// );