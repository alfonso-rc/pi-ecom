import { useEffect, useState } from "react"
import axios from "axios"
import { Link, useHistory, useParams } from "react-router-dom";
import "../App.css"
import { IoAdd, IoRemove } from "react-icons/io5";
import NavBarDetail from "./NavBarDetail";
import Carrito from "./Carrito";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/actions";

const BASE_URL = process.env.REACT_APP_API_URL;
const URL_GET_DETAIL_BY_ID = process.env.NODE_ENV === "production" ?
    BASE_URL + "/article/" : "http://localhost:3001/article/"

export default function ArticleDetail() {
    const dispatch = useDispatch()
    const history=useHistory();
    function addCart(item) {
        dispatch(addToCart(item));
      }
      
      const HandleClickComment = () => {
        const token = sessionStorage.getItem("token");
        if (token) {
          console.log("Comentario realizado");
          //Hacer visible el Input de Comment
        } else {
          history.push("/login");
        }
      };

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
        
    return <div>
        <div className="fix fixed top-0 left-0 right-0 z-10 w-screen">
            <NavBarDetail />
            <Carrito />
        </div>
        <div>
        <button class="btn btn-circle btn-outline">           
        </button>
        </div>
        <div className="font-Work text-xl md:text-1xl bg-white text-black pt-40">
            {
            article ? (
            <div>
                <div className="flex flex-wrap items-center justify-center lg:grid grid-cols-2">               
                    <div className="justify-center">
                        <img src={article.image} alt="image"  className="lg:m-auto h-96 w-auto"/>
                    </div>
                    <div className="lg:m-auto xl:ml-20 pt-6">
                        <div>
                            <h3 className="font-bold text-4xl">{article.title}</h3>  
                            <div className="flex flex-row justify-center pt-6"><h1 className="font-bold">Rating: </h1><p>{article.rating}</p></div>
                        </div>
                        <div>                           
                        <div className="flex flex-row justify-center py-3 font-bold pb-6"><h1>Precio: </h1><p className="text-accent font-mono">${article.price}</p></div>
                            <div className="flex justify-center">
                                <button className="btn btn-outline btn-primary btn-sm btn-square"><IoRemove className="text-2xl"/></button>
                                <p className="px-5">1</p>
                                <button className="btn btn-primary btn-sm btn-square "><IoAdd className="text-2xl"/></button>
                            </div>
                            <div className="flex flex-row justify-center pt-6"><h1 className="font-bold">Stock: </h1><p>{article.stock}</p></div>
                            <div className="flex flex-row justify-center pt-6"><h1 className="font-bold">Color: </h1><p>{article.detail.color}</p></div><br/><br/>
                            <button className="btn btn-accent btn-wide my-2" onClick={ () => addCart(article) }>Agregar al carrito</button><br/>
                            {/* <button className="btn btn-primary btn-wide">Comprar</button>                */}
                        </div>                                                                  
                    </div>
                </div>
                <br/><br/><br/><br/>
                <div className="mx-8 text-start lg:px-20">
                            <h1 className="mt-14 font-bold text-4xl">Descripcion</h1><br/>                                                                              
                            <p >{article.detail.detail}</p>
                            <h1 className="mt-14 font-bold text-4xl">Especificaciones</h1><br/>  
                            <div className="grid grid-cols-2">
                                <h1 className="font-bold mt-2">Marca:</h1><p className="mt-2">{article.detail.marca}</p>
                                <h1 className="font-bold mt-8">Modelo:</h1> <p className="mt-8">{article.detail.modelo} </p>

                                {/* Si a alguien le parece que este codigo esta muy feo cosa que a mi tambien y quiere arreglarlo con gusto lo acepto
                                Comprobamos que descripcion existe y mostramos, pasa que lo hice 1 por uno porque no queria romper el estilo,despues arreglo u.u */}
                                {
                                    article.detail.so &&
                                    <h1 className="font-bold mt-8">SO:</h1>
                                }
                                {
                                    article.detail.so &&
                                    <p className="mt-8">{article.detail.so}</p>
                                }                               
                                {   
                                    article.detail.cpu && 
                                    <h1 className="font-bold mt-8">CPU:</h1>
                                }
                                {
                                    article.detail.cpu && 
                                    <p className="mt-8">{article.detail.cpu}</p>
                                }
                                {   
                                    article.detail.ram && 
                                    <h1 className="font-bold mt-8">RAM:</h1>   
                                }
                                {   
                                    article.detail.ram && 
                                    <p className="mt-8">{article.detail.ram}</p>    
                                }
                                {
                                    article.detail.pantalla && 
                                    <h1 className="font-bold mt-8">Pantalla:</h1>
                                }
                                {
                                    article.detail.pantalla && 
                                    <p className="mt-8">{article.detail.pantalla}</p>  
                                }
                                {/* <h1 className="font-bold mt-8">Categoria:</h1><p className="mt-8">{article.categories?article.categories[0].name:article.categories}</p> */}
                            </div>
                        </div>
                        <br /><br />
                            <div tabindex="0" class="collapse collapse-plus bg-accent rounded-box ">
                                <div class="collapse-title text-white text-xl font-medium">
                                    <h1>Comentarios</h1>
                                </div>
                                <div class="collapse-content bg-white border-4"> 
                                {
                                    <p className="mt-8">
                                    {article.comments.length>0?
                                        article.comments.map((comm)=>{
                                            return <p className="border-b-4">{comm.texto}</p>
                                })
                            :<p className="mt-10">No hay comentarios sobre este producto</p>
                        }
                        </p>
                }
                                </div>
                                </div>
                    </div>) : (
                    <div>loading</div>)
            }
            <br /><br />
            <Link to='/home'><button className="my-10 btn sm:btn-sm md:btn-md lg:btn-lg">Volver</button></Link>
        </div>
    </div>
}
