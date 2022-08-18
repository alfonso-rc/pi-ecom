import { useEffect, useState } from "react"
import axios from "axios"
import {Link, useParams} from "react-router-dom"; 
export default function ArticleDetail() {

    const [article, setArticle] = useState(null)
    let {id} = useParams()
    console.log(id)
    useEffect (() => {
         axios.get(`http://localhost:3001/article/${id}`)
        .then((response) => {
            console.log(response.data)
            setArticle(response.data)
        })
    }, [])
    return <div>
        {
        article ? (
        <div>

                <h3>{article.title}</h3>
        <img src={article.image} alt="image" />
        <p>rating: {article.rating}</p>
        <p>price: {article.price}</p>
        <p>description: {article.detail.detail}</p>
        <p>marca: {article.detail.marca}</p>
        <p>"modelo": {article.detail.modelo} </p>
        <p>"so": {article.detail.so}</p>
        <p>"cpu": {article.detail.cpu}</p>
        <p>"ram": {article.detail.ram}</p>
        <p>"color": {article.detail.color}</p>
        <p>"pantalla": {article.detail.pantalla}</p>
        {/* <p>category:{article.category}</p> */}
        <Link to='/'><button>Volver</button></Link>


        </div>) : (
        <div>loading</div>)
        }
    </div>
}