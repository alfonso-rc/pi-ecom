import { useEffect, useState } from "react"
import axios from "axios"
import {Link, useParams} from "react-router-dom"; 
import "../App.css"
import { IoAdd, IoRemove } from "react-icons/io5";

export default function ArticleDetail() {

    const [article, setArticle] = useState(null)
    let {id} = useParams()
    
    useEffect (() => {
        axios.get(`http://localhost:3001/article/${id}`)
        .then((response) => {
            setArticle(response.data)
        })
    }, [])
    return <div className="font-Work text-xl md:text-2xl ">
        <div>
            {
            article ? (
            <div>
                <div className="flex flex-wrap">               
                    <div className="place-self-center row-span-1">
                        <img src={article.image} alt="image" />
                    </div>
                    <div>
                        <div>
                            <h3 className="font-bold text-4xl">{article.title}</h3>  
                            <p>rating: {article.rating}</p>
                        </div>
                        <div>                           
                            <p>price:{article.price}</p>
                            <div className="flex flex-row">
                                <button class="btn btn-outline btn-primary btn-sm btn-square"><IoRemove className="text-2xl"/></button>
                                <p>1</p>
                                <button class="btn btn-primary btn-sm btn-square "><IoAdd className="text-2xl"/></button>
                            </div>
                            <p>stock: {article.stock}</p>
                            <p>color: {article.detail.color}</p><br/><br/>
                            <button class="btn btn-accent btn-wide my-2">Agregar al carrito</button><br/>
                            <button class="btn btn-primary btn-wide">Comprar</button>                         
                        </div>                      
                        <div className="mx-8 text-start lg:px-20">
                            <h1 className="mt-14 font-bold text-4xl">Descripcion</h1><br/>                                                                              
                            <p >{article.detail.detail}</p>
                            <h1 className="mt-14 font-bold text-4xl">Especificaciones</h1><br/>  
                            <div className="grid grid-cols-2">
                                <h1 className="font-bold mt-2">marca:</h1><p className="mt-2">{article.detail.marca}</p>
                                <h1 className="font-bold mt-8">modelo:</h1> <p className="mt-8">{article.detail.modelo} </p>
                                <h1 className="font-bold mt-8">so:</h1><p className="mt-8">{article.detail.so}</p>
                                <h1 className="font-bold mt-8">cpu:</h1><p className="mt-8">{article.detail.cpu}</p>
                                <h1 className="font-bold mt-8">ram:</h1><p className="mt-8">{article.detail.ram}</p>                       
                                <h1 className="font-bold mt-8">pantalla:</h1><p className="mt-8">{article.detail.pantalla}</p>                       
                                <h1 className="font-bold mt-8">category:</h1><p className="mt-8">{article.categories[0].name}</p>
                            </div>
                        </div>                       
                    </div>
                    <div>

                    </div>
                </div>
            </div>) : (
            <div>loading</div>)
            }
            <div className="mx-8 text-start mt-14">
                <h1 className=" font-bold text-4xl">Comentarios</h1>
                <p className="mt-10">No hay comentarios sobre este producto</p>
            </div>
            <Link to='/'><button>Volver</button></Link>
        </div>
    </div>
}
