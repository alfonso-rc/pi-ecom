import { useSelector, useDispatch } from "react-redux"
 import { useEffect, useState } from "react"
 import { Link } from "react-router-dom"
import {orderByAZ, orderByPrice, getArticles} from '../store/actions'
import Card from "./Card"

export default function Home() {
    const allArticle = useSelector((state) => state.articles)
    let dispatch = useDispatch()
    const [loading,setLoading]=useState(false)
    const [order,setOrder]=useState('')
    console.log(allArticle)

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
                <select onChange={(e)=>handleSortAZ(e)}>
                  <option value="AZ">AZ</option>
                  <option value="ZA">ZA</option>
                </select>
                
                <select onChange={(e)=>handleSortPrice(e)}>
                <option value="may">Mayor precio</option>
                <option value="men">Menor precio</option>
                </select>
              </div>
              {allArticle.map((art)=>{
                return(
                  <div key={art.id}>
                    <Card
                    image={art.image}
                    title={art.title}
                    price={art.Price}/>
                  </div>
                )
              })}

            </div>
            
            
            
        </div>
      )
}