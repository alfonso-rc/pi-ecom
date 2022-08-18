import { useSelector, useDispatch } from "react-redux"
 import { useEffect, useState } from "react"
 import { Link } from "react-router-dom"
import {orderByAZ, orderByPrice, getArticles} from '../store/actions'
import Card from "./Card"
import Paginado from "./Paginado"

export default function Home() {
    const allArticle = useSelector((state) => state.articles)
    let dispatch = useDispatch()
    const [loading,setLoading]=useState(false)
    const [order,setOrder]=useState('')
    const [currentPage, setCurrentPage] = useState(1);
    const [articlePerPage, setArticlePerPage] = useState(15);
    const indexOfLastArticle = currentPage * articlePerPage;
    const indexOfFirstArticle = indexOfLastArticle - articlePerPage;
    const currentArticle = allArticle.slice(indexOfFirstArticle, indexOfLastArticle);
    const paginado = (pageNumber) => {
      setCurrentPage(pageNumber);
    };

    useEffect(() => {
        dispatch(getArticles())
        setLoading(true);
    }, [dispatch])

    function handleSortAZ(e){
        e.preventDefault()
        dispatch(orderByAZ(e.target.value))
        // setCurrentPage(1)
        setOrder(e.target.value)
      }
      function handleSortPrice(e){
        e.preventDefault()
        dispatch(orderByPrice(e.target.value))
        // setCurrentPage(1)
        setOrder(e.target.value)
      }
      return (
        <div>
            hola
            <div>
              <div>
              <Paginado
            articlePerPage={articlePerPage}
            allArticle={allArticle.length}
            paginado={paginado}
          />
              </div>
              <div>
                <select onChange={(e)=>handleSortAZ(e)}>
                  <option value="AZ">AZ</option>
                  <option value="ZA">ZA</option>
                </select>
                
                <select onChange={(e)=>handleSortPrice(e)}>
                <option value="may">Mayor precio</option>
                <option value="men">Menor precio</option>
                </select>
              </div>
              {currentArticle.map((art)=>{
                return(
                  <div key={art.id}>
                    <Card
                    image={art.image}
                    title={art.title}
                    price={art.price}/>
                  </div>
                )
              })}

            </div>
            
            
            
        </div>
      )
}