import { Link } from "react-router-dom"
export default function Card({id, name, image, price, category}) {
   return <div>
       <Link to={`/${id}`}>
       <h3>{name}</h3>
       <img src={image} alt="image" />
        <p>category: {category}</p>  
        <p>price: ${price} </p>
       </Link>
   </div>   
}