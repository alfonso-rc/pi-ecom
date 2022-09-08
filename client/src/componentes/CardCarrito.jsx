import { removeCart } from "../store/actions";
import { useSelector, useDispatch } from "react-redux";
import {MdDeleteForever} from "react-icons/md";
import { useEffect, useState } from "react";
import { IoAdd, IoRemove } from "react-icons/io5";
import axios from "axios"

export default function CardCarrito({id, title, stock, image, price, category}){
const dispatch = useDispatch()
function handleDelete(id){
dispatch(removeCart(id))
}
const BASE_URL = process.env.REACT_APP_API_URL;
const URL_GET_DETAIL_BY_ID =
  process.env.NODE_ENV === "production"
    ? BASE_URL + "/article/"
    : "http://localhost:3001/article/";

useEffect(() => {
    // Pedimos el detalle del artículo
    axios.get(URL_GET_DETAIL_BY_ID + id)
      .then((response) => {
        // console.log(response.data)
        setArticle(response.data);
      })
  }, [id]);

const [article, setArticle] = useState(null);
const [count, setCount] = useState(1);


function addIncrement(e) {
    //e.preventDefault();
    if (count < article.stock) setCount(count + 1)
    // dispatch(increment(e.target.value));
  }
  function subsDecrement(e) {
    //e.preventDefault();
    if (count >= 2) setCount(count - 1)
    // dispatch(decrement(e.target.value));
  }


return (
    <div className="rounded-lg shadow-2xl min-w-[130px] text-center flex flex-col justify-center items-center w-[220px]">
        <div>
            <img className="max-w-[120px]" src={image} alt="img not found" height={180} width={120}/>
        </div>
        <div>
          <div>
            <p>{title}</p>
        </div>
        {/* <div className="flex justify-center  ">
                    <button onClick={ (e) => subsDecrement(e) } className="btn btn-outline btn-primary btn-sm btn-square" >
                      <IoRemove className="text-2xl" />
                    </button>
                    <p className="px-5">{ count }</p>
                    <button onClick={ (e) => addIncrement(e) } className="btn btn-primary btn-sm btn-square ">
                      <IoAdd className="text-2xl" />
                    </button>
                  </div> */}
            <div>
                <p>$ {price * count}</p>
            </div>
            <div>
                <p>{stock}</p>
            </div>
       
            <abbr className=" flex justify-center">
              <span  onClick={() => handleDelete(id)}>
              <MdDeleteForever size={30} color="#dc2626" />
              </span>
            </abbr>
        </div>
        
    </div>

)



}