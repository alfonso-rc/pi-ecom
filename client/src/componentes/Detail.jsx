import { useEffect, useState } from "react"
import axios from "axios"
import { Link, useParams } from "react-router-dom";
import "../App.css"
import { IoAdd, IoRemove } from "react-icons/io5";

const BASE_URL = process.env.REACT_APP_API_URL;
const URL_GET_DETAIL_BY_ID = process.env.NODE_ENV === "production" ?
    BASE_URL + "/article/" : "http://localhost:3001/article"

export default function ArticleDetail() {

    const [article, setArticle] = useState(null)
    const [stockCon, setStockCon] = useState()
    let { id } = useParams()

    useEffect(() => {
        axios.get(URL_GET_DETAIL_BY_ID + id)
            .then((response) => {
                setArticle(response.data)
                setStockCon(response.data.stock)
            })
    }, [])

    return <div className="font-Work text-xl md:text-2xl bg-white text-black">
        <div>
            {
                article ? (
                    <div>
                        <div className="flex flex-wrap items-center justify-center lg:grid grid-cols-2">
                            <div className="justify-center">
                                <img src={ article.image } alt="..." className="lg:m-auto h-96 w-auto" />
                            </div>
                            <div className="lg:m-auto xl:ml-20 pt-6">
                                <div>
                                    <h3 className="font-bold text-4xl">{ article.title }</h3>
                                    <p className="pt-6">Rating: { article.rating }</p>
                                </div>
                                <div>
                                    <p className="py-3">Price: ${ article.price }</p>
                                    <div className="flex justify-center">
                                        <button className="btn btn-outline btn-primary btn-sm btn-square"><IoRemove className="text-2xl" /></button>
                                        <p className="px-5">1</p>
                                        <button className="btn btn-primary btn-sm btn-square "><IoAdd className="text-2xl" /></button>
                                    </div>
                                    <p className="pt-3">Stock: { article.stock } (disponible)</p>
                                    <p className="pt-3">Color: { article.detail.color }</p><br /><br />
                                    <button className="btn btn-accent btn-wide my-2">Agregar al carrito</button><br />
                                    <button className="btn btn-primary btn-wide">Comprar</button>
                                </div>
                            </div>
                        </div>
                        <br /><br /><br /><br />
                        <div className="mx-8 text-start lg:px-20">
                            <h1 className="mt-14 font-bold text-4xl">Descripcion</h1><br />
                            <p >{ article.detail.detail }</p>
                            <h1 className="mt-14 font-bold text-4xl">Especificaciones</h1><br />
                            <div className="grid grid-cols-2">
                                <h1 className="font-bold mt-2">Marca:</h1><p className="mt-2">{ article.detail.marca }</p>
                                <h1 className="font-bold mt-8">Modelo:</h1> <p className="mt-8">{ article.detail.modelo } </p>
                                <h1 className="font-bold mt-8">SO:</h1><p className="mt-8">{ article.detail.so }</p>
                                <h1 className="font-bold mt-8">CPU:</h1><p className="mt-8">{ article.detail.cpu }</p>
                                <h1 className="font-bold mt-8">RAM:</h1><p className="mt-8">{ article.detail.ram }</p>
                                <h1 className="font-bold mt-8">Pantalla:</h1><p className="mt-8">{ article.detail.pantalla }</p>
                                <h1 className="font-bold mt-8">Categoria:</h1><p className="mt-8">{ article.categories ? article.categories[0].name : article.categories }</p>
                            </div>
                        </div>
                    </div>) : (
                    <div>loading</div>)
            }
            <div className="mx-20 pl-7 text-start mt-14">
                <h1 className=" font-bold text-4xl">Comentarios</h1>
                <p className="mt-10">No hay comentarios sobre este producto</p>
            </div>
            <br /><br />
            <Link to='/home'><button className="my-10 btn sm:btn-sm md:btn-md lg:btn-lg">Volver</button></Link>
        </div>
    </div>
}
