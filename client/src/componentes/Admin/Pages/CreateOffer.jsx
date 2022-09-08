import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  postOffer,
  getOffers,
  deleteOffer,
  validityOffer,
  editOffer,
  getArticles,
} from "../../../store/actions/index";
import { ToastContainer, toast } from "react-toastify";
import { IoAdd, IoRemove } from "react-icons/io5";
import NavBarAdmin from "../../NavBarAdmin";
import Footer from "../../Footer";

function validate(e) {
  const pattern = new RegExp("^[A-Z]+$", "i");
  const soloNum = new RegExp("/^[0-9]+$/");

  const urlImg = (url) => {
    return /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/.test(url);
  };
  let errors = {};
  //--------------Porcent----------------
  if (!e.porcent) {
    errors.porcent = "Ingrese porcentaje de descuento";
  }else if (e.porcent < 0 || e.porcent > 5) {
    errors.porcent = "El rango debe ser entre 0 y 100";
  }
  //--------------Expiration----------------
  if (!e.expiration) {
    errors.expiration = "Ingrese la fecha de vigencia";
  }
  //--------------Articulo---------------
  if (!e.articleId) {
    errors.articleId = "Seleccione el articulo a agregar";
  }
  return errors;
}

export default function CreateOffer() {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const [selectArticle, setselectArticle] = useState([]);
  const history = useHistory();
  const allOffer = useSelector((state) => state.offers);
  const allArticle = useSelector((state) => state.articles);

  const [input, setInput] = useState({
    porcent: "",
    validity: true,
    expiration: "",
    articleId: [],

  });

  useEffect(() => {
    dispatch(getArticles());
    dispatch(getOffers());
  }, []);

  //   const btnDisabled = !(
  //     input.title &&
  //     input.rating &&
  //     input.detail &&
  //     input.marca &&
  //     input.modelo &&
  //     input.image &&
  //     input.stock &&
  //     input.price &&
  //     input.conectividad &&
  //     input.category
  //   );


  function handleArticleId(e) {

    const F=JSON.parse(e.target.value);
    // input.articleId=[...input.articleId,F.id];
    setselectArticle([
      ...selectArticle,
      {
      title:F.title,
      price:F.price,
    }]) 
    console.log(input.articleId)

    
    let exists = input.articleId.find((c) => c === e.target.value);
    if (!exists) {
      setInput({
        ...input,
        [e.target.name]: [...input.articleId, F.id],
      });
    }
  }

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(validate({
      ...input,
      [e.target.name]: e.target.value
    }));
    console.log(input);
  };

  

  function handleCheck(e) {
    console.log("target", e.target.value);
    if (e.target.checked) {
      setInput({
        ...input,
        [e.target.name]: e.target.value,
      });
        setErrors(
          validate({
            ...input,
            type: [input.type, e.target.value],
          })
        );
    } else {
      setInput({
        ...input,
        type: input.type.filter((t) => t !== e.target.value),
      });
        setErrors(
          validate({
            ...input,
            type: input.type.filter((t) => t !== e.target.value),
          })
        )
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(input);
    dispatch(postOffer(input));
    alert("Oferta Creada!");
    setInput({

      porcent: "",
      validity: true,
      expiration: "",
      articleId: [],

    });
    history.push("/admin/ofertas");
  }

  const box = {
    background:
      "linear-gradient(50deg,rgba(255, 255, 255, 0.4) 12%,rgba(255, 255, 255, 0.1) 77%)",
    boxShadow: "0px 4px 24px 1px rgba(0, 0, 0, 0.28)",
    backdropFilter: "blur(5px)",
    webkitBackdropFilter: "blur(5px)",
  };
  return (
    <div>
      <NavBarAdmin />
      <div className="text-black">
        <form onSubmit={(e) => handleSubmit(e)} className="">
          <h1 className="text-3xl m-5 border-b-2 border-b-zinc-300 rounded-lg border font-Work font-bold shadow-2xl">
            CREAR OFERTAS
          </h1>
          <div
            className="flex flex-col lg:grid"
            style={{ gridTemplateColumns: "30% 70%" }}
          >
            <div className="">
              <div className=" flex flex-row justify-start ml-4 font-Work">
                <div className=" flex flex-col bg-accent rounded-lg">
                  <div className=" m-4 flex flex-col rounded-lg" style={box}>
                    {/* Datos Grales del Articulo */}

                    <div className="m-2 flex flex-col ">
                      <select
                        className="select select-accent w-full max-w-xs"
                        name="articleId"
                        // value={input.articleId?? ""}
                        onChange={handleArticleId}
                      >
                        {/* <option value="">Todos los Productos</option> */}
                        {allArticle.map((art) => (
                          <option key={art.id} value={JSON.stringify(art)} >
                            {art.title}
                            
                          </option>
                        ))}
                      </select>


                      {errors.title && <p className="flex text-red-700 font-bold">{errors.title}</p>}
                    </div>
                    <div className="m-2 flex flex-col">
                      <div className="flex flex-row justify-between">
                        <label className="font-bold">Porcentaje: </label>
                        <input
                          className="input-accent w-xs rounded-md"
                          type="number"
                          value={input.porcent}
                          name="porcent"
                          min={5}
                          max={90}
                          onChange={(e) => handleChange(e)}
                        />
                      </div>
                      {errors.rating && <p className="flex text-red-700 font-bold">{errors.rating}</p>}
                    </div>
                    <div className="m-2 flex flex-col">
                      <div className="flex flex-row justify-between">
                        <label className="font-bold">Vigencia: </label>
                        <input
                          className="input-accent w-xs rounded-md"
                          type="date"
                          value={input.expiration}
                          name="expiration"
                          onChange={(e) => handleChange(e)}
                        />
                      </div>
                      {/* {errors.modelo && (
                        <p className="flex text-red-700 font-bold">
                          {errors.modelo}
                        </p>
                      )} */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white mx-2 px-2">
              <div className="md:max-h-[calc(100vh-150px)] overflow-auto">
                <div className="flex flex-wrap items-center justify-center lg:grid grid-cols-2">
                  <div className="lg:m-auto xl:ml-20 pt-6">
                    <div>
                      <h3 className="font-bold text-2xl md:text-4xl">
                        {(selectArticle.map(a=>
                         <div className="border-2 border-emerald-400">
                          <span>{a.title}</span><span className="text-accent">   ${a.price}</span>
                         </div> ))}
                      </h3>
                      <div className="flex flex-row justify-center pt-6">
                        <h1 className="font-bold">Porcentaje: </h1>
                        <p>
                          {input.porcent}%
                        </p>
                      </div>
                    </div>
                    
                    {/* <div>
                      <div className="flex flex-row justify-center py-3 font-bold pb-6">
                        <h1>Precio: </h1>
                        <p className="text-accent font-mono">${input.price}</p>
                      </div>
                      <div className="flex justify-center">
                        <p className="btn btn-outline btn-primary btn-sm btn-square">
                          <IoRemove className="text-2xl" />
                        </p>
                        <p className="px-5">1</p>
                        <p className="btn btn-primary btn-sm btn-square ">
                          <IoAdd className="text-2xl" />
                        </p>
                      </div>
                      <div className="flex flex-row justify-center pt-6">
                        <h1 className="font-bold">Stock: </h1>
                        <p>{input.stock}</p>
                      </div>
                      <div className="flex flex-row justify-center pt-6">
                        <h1 className="font-bold">Color: </h1>
                        <p>{input.color}</p>
                      </div>
                      <br />
                      <br />
                      <p className="btn btn-accent btn-wide my-2">
                        Agregar al carrito
                      </p>
                      <br />
                    </div> */}
                  </div>
                </div>
                <br />
                <br />
                <br />
                <br />

              </div>
            </div>
          </div>
          <div className="py-4 my-4">
            <button type="submit" className="btn btn-accent m-4">
              Create
            </button>
            <Link to="/admin/articulos" className="">
              <button className="btn btn-warning m-4">VOLVER</button>
            </Link>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}
