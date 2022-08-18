import { Link } from "react-router-dom"

export default function Card({id, title, image, price,Price, category}) {
   return <div>
       <Link to={`/${id}`}>
       <h3>{title}</h3>
       <img src={image} alt="img not found" width="350" heigth="400" />
       </Link>
        
        <p>Price: $ {price || Price} </p>
   </div>   
}