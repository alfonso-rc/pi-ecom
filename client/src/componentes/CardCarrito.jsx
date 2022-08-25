import { removeCart } from "../store/actions";
import { useSelector, useDispatch } from "react-redux";
import {MdDeleteForever} from "react-icons/md";

export default function CardCarrito({id, title, stock, image, price, category}){
const dispatch = useDispatch()
function handleDelete(id){
dispatch(removeCart(id))
}
return (
    <div>
        <div>
            <img src={image} alt="img not found" height={180} width={120}/>
        </div>
        <div>
            <p>{title}</p>
        </div>
            <div>
                <p>$ {price}</p>
            </div>
            <div>
                <p>{stock}</p>
            </div>
            <abbr>
       <span  onClick={() => handleDelete(id)}>
        <MdDeleteForever size={30} color="#dc2626" />
        </span>
        </abbr>
    </div>

)



}