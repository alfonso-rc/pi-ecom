import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postArticle, getCategory, getArticles } from "../../../store/actions/index";
import { ToastContainer, toast } from 'react-toastify';
import { IoAdd, IoRemove } from "react-icons/io5";
import NavBarAdmin from "../../NavBarAdmin";
import Footer from "../../Footer";
import Swal from "sweetalert2";

function validate(e) {
  const pattern = new RegExp("^[A-Z]+$", "i");
  const soloNum = new RegExp("/^[0-9]+$/");

  const urlImg = (url) => {
    return /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/.test(url);
  };
  let errors = {};
  //--------Title ----------------
  if (!e.title) {
    errors.title = "Se requiere un nombre";
  }
  //--------------Numbers Rating----------------
  if (e.rating < 0 || e.rating > 5) {
    errors.rating = "El rango debe ser entre 0 y 200";
  }
  //--------------Detail----------------
  if (!e.detail) {
    errors.detail = "Ingrese un detalle del articulo";
  }
  //--------------Marca----------------
  if (!e.marca) {
    errors.marca = "Ingrese la marca del articulo";
  }
  //--------------Modelo----------------
  if (!e.modelo) {
    errors.modelo = "Ingrese un modelo del articulo";
  }
  //--------------Image----------------
  if (!e.image) {
    errors.image = "Ingrese un image del articulo";
  }
  //------------Stock---------------------
  if (!e.stock) {
    errors.stock = "Ingrese el stock del articulo";
  } else if (e.stock < 0 || e.stock > 100) {
    errors.stock = "El stock debe ser entre 0 y 200";
  }
  //--------------Price----------------
  if (!e.price) {
    errors.price = "Ingrese el precio del articulo";
  } else if (e.stock < 0) {
    errors.price = "El Articulo debe tener un precio mayor a $0";
  }
  //--------------Conectivity---------------
  if (!e.conectividad) {
    errors.conectividad = "Ingrese un conectividad del articulo";
  }
  return errors;
}

export default function CreateArticle() {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const history = useHistory();
  const category = useSelector((state) => state.category);

  const [input, setInput] = useState({
    title: "",
    rating: "",
    detail: "",
    marca: "",
    modelo: "",
    so: "",
    ram: "",
    cpu: "",
    color: "",
    pantalla: "",
    image: "",
    stock: "",
    price: "",
    conectividad: "",
    category: "",
    disable: false,
  });

  const btnDisabled = !(
    input.title &&
    input.rating &&
    input.detail &&
    input.marca &&
    input.modelo &&
    input.image &&
    input.stock &&
    input.price &&
    input.conectividad &&
    input.category
  );

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    })
    setErrors(validate({
      ...input,
      [e.target.name]: e.target.value
    }));
    console.log(input)
  }

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

  const refreshPage = () => {
		window.location.reload();
	};

  function handleSubmit(e) {
    e.preventDefault();
    Swal.fire({
      title: "El nuevo producto se ha creado",
      icon: "success"
    }).then(response => {
      if (response) {
        dispatch(postArticle(input));
        setInput({
          title: "",
          rating: "",
          detail: "",
          marca: "",
          modelo: "",
          so: "",
          ram: "",
          cpu: "",
          color: "",
          pantalla: "",
          image: "",
          stock: "",
          price: "",
          conectividad: "",
          category: "",
          disable: false,
        });
        history.push("/admin/articulos");
        refreshPage();
      }
    });
    
  }

  const box = {
    background:"linear-gradient(50deg,rgba(255, 255, 255, 0.4) 12%,rgba(255, 255, 255, 0.1) 77%)",
    boxShadow: "0px 4px 24px 1px rgba(0, 0, 0, 0.28)",
    backdropFilter: "blur(5px)",
    webkitBackdropFilter:"blur(5px)"
  }
  return (
    <div>
      <NavBarAdmin/>
      <div className="text-black">
        <form onSubmit={(e) => handleSubmit(e)} className="">
          <h1 className="text-3xl m-5 border-b-2 border-b-zinc-300 rounded-lg border font-Work font-bold shadow-2xl">CREATE ARTICLE</h1>
          <div className="flex flex-col lg:grid" style={{gridTemplateColumns:"30% 70%"}}>
          <div className="">
            <div className="w-1/3 font-Work">
              <label className="gap-1 flex pl-2 font-bold">Categorias: </label>
              <div className="flex flex-row">
                <label className="m-2">
                  Celular
                  <input
                    type="radio"
                    name="category"
                    value="smartphones"
                    className="checkbox bg-slate-400"
                    onChange={(e) => handleCheck(e)}
                  />
                </label>
                <label className="m-2">
                  Computador
                  <input
                    type="radio"
                    name="category"
                    value="notebooks"
                    className="checkbox bg-slate-400"
                    onChange={(e) => handleCheck(e)}
                  />
                </label>
                <label className="m-2">
                  Tableta
                  <input
                    type="radio"
                    name="category"
                    value="tablets"
                    className="checkbox bg-slate-400"
                    onChange={(e) => handleCheck(e)}
                  />
                </label>
                <label className="m-2">
                  Accesorio
                  <input
                    type="radio"
                    name="category"
                    value="accesories"
                    className="checkbox bg-slate-400"
                    onChange={(e) => handleCheck(e)}
                  />
                </label>
              </div>
            </div>
          <div className=" flex flex-row justify-start ml-4 font-Work">
            <div className=" flex flex-col bg-slate-400 rounded-lg">
              <div className=" m-4 flex flex-col rounded-lg" style={box}>
                {/* Datos Grales del Articulo */}
                <div className="m-2 flex flex-col ">
                  <div className="flex flex-row justify-between"> 
                    <label className="font-bold">Nombre: </label>
                    <input
                      className="input-accent w-xs rounded-md"
                      type="text"
                      value={input.title}
                      name="title"
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  {errors.title && <p className="flex text-red-700 font-bold">{errors.title}</p>}
                </div>
                <div className="m-2 flex flex-col">
                  <div className="flex flex-row justify-between" >
                    <label className="font-bold">Calificación: </label>
                    <input
                      className="input-accent w-xs rounded-md"
                      type="number"
                      value={input.rating}
                      name="rating"
                      min={0}
                      max={5}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  {errors.rating && <p className="flex text-red-700 font-bold">{errors.rating}</p>}
                </div>
                <div className="m-2 flex flex-col">
                  <div className="flex flex-row justify-between">
                    <label className="font-bold">Marca: </label>
                  <input
                    className="input-accent w-xs rounded-md"
                    type="text"
                    value={input.marca}
                    name="marca"
                    onChange={(e) => handleChange(e)}
                  />
                  </div>
                  {errors.modelo && <p className="flex text-red-700 font-bold">{errors.modelo}</p>}
                </div>
                <div className="m-2 flex flex-col">
                  <div className="flex flex-row justify-between">
                    <label className="font-bold">Modelo: </label>
                  <input
                    className="input-accent w-xs rounded-md"
                    type="text"
                    value={input.modelo}
                    name="modelo"
                    onChange={(e) => handleChange(e)}
                  />
                  </div>
                  {errors.modelo && <p className="flex text-red-700 font-bold">{errors.modelo}</p>}
                </div>
                <div className="m-2 flex flex-col">
                  <div className="flex flex-row justify-between">
                    <label className="font-bold">Descripción: </label>
                  <input
                    className="input-accent w-xs rounded-md"
                    type="text"
                    value={input.detail}
                    name="detail"
                    onChange={(e) => handleChange(e)}
                  />
                  </div>
                  {errors.detail && <p className="flex text-red-700 font-bold">{errors.detail}</p>}
                </div>
                <div className="m-2 flex flex-col">
                  <div className="flex flex-row justify-between">
                    <label className="font-bold">Precio: </label>
                  <input
                    className="input-accent w-xs rounded-md"
                    type="number"
                    value={input.price}
                    name="price"
                    min={0}
                    onChange={(e) => handleChange(e)}
                  />
                  </div>
                  {errors.price && <p className="flex text-red-700 font-bold">{errors.price}</p>}
                </div>
                <div className="m-2 flex flex-col">
                  <div className="flex flex-row justify-between">
                  <label className="font-bold">Existencias: </label>
                  <input
                    className="input-accent w-xs rounded-md"
                    type="number"
                    value={input.stock}
                    name="stock"
                    min={0}
                    max={200}
                    onChange={(e) => handleChange(e)}
                  />
                  </div>
                  {errors.stock && <p className="flex text-red-700 font-bold">{errors.stock}</p>}
                </div>
                <div className="m-2 flex flex-col">
                  <div className="flex flex-row justify-between">
                  <label className="font-bold">Imagen: </label>
                  <input
                    className="input-accent w-xs rounded-md"
                    type="text"
                    value={input.image}
                    name="image"
                    onChange={(e) => handleChange(e)}
                  />
                  </div>
                  {errors.image && <p className="flex text-red-700 font-bold">{errors.image}</p>}
                </div>
                <div className="m-2 flex justify-between">
                  <label className="font-bold">Color: </label>
                  <input
                    className="input-accent w-xs rounded-md"
                    type="text"
                    value={input.color}
                    name="color"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="m-2 flex flex-col">
                  <div className="flex flex-row justify-between">
                  <label className="font-bold">Conectividad: </label>
                  <input
                    className="input-accent w-xs rounded-md"
                    type="text"
                    value={input.conectividad}
                    name="conectividad"
                    onChange={(e) => handleChange(e)}
                  />
                  </div>
                  {errors.conectividad && <p className="flex text-red-700 font-bold">{errors.conectividad}</p>}
                </div>
              </div>
              <div className=" m-4 rounded-lg" style={box}>
                {/* Datos Opcionales segun categoria */}
                <div className="m-2 flex justify-between">
                  <label className="font-bold">SO: </label>
                  <input
                    className="input-accent w-xs rounded-md"
                    type="text"
                    value={input.so}
                    name="so"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="m-2 flex justify-between">
                  <label className="font-bold">RAM: </label>
                  <input
                    className="input-accent w-xs rounded-md"
                    type="text"
                    value={input.ram}
                    name="ram"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="m-2 flex justify-between">
                  <label className="font-bold">CPU: </label>
                  <input
                    className="input-accent w-xs rounded-md"
                    type="text"
                    value={input.cpu}
                    name="cpu"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="m-2 flex justify-between">
                  <label className="font-bold">Pantalla: </label>
                  <input
                    className="input-accent w-xs rounded-md"
                    type="text"
                    value={input.pantalla}
                    name="pantalla"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                </div>
              </div>
            </div>
            </div>
            <div className="bg-white mx-2 px-2">
            <div className="md:max-h-[calc(100vh-150px)] overflow-auto">
            <div className="flex flex-wrap items-center justify-center lg:grid grid-cols-2">
              <div className="justify-center">
                <img
                  src={ input.image }
                  alt="image"
                  className="lg:m-auto h-96 w-auto"
                />
              </div>
              <div className="lg:m-auto xl:ml-20 pt-6">
                <div>
                  <h3 className="font-bold text-2xl md:text-4xl">{ input.title }</h3>
                  <div className="flex flex-row justify-center pt-6">
                    <h1 className="font-bold">Calificación: </h1>
                    <p>{ input.rating === "NaN" ? input.rating = 0 : input.rating }</p>
                  </div>
                </div>
                <div>
                  <div className="flex flex-row justify-center py-3 font-bold pb-6">
                    <h1>Precio: </h1>
                    <p className="text-accent font-mono">${ input.price }</p>
                  </div>
                  {/* <div className="flex justify-center">
                    <p className="btn btn-outline btn-primary btn-sm btn-square">
                      <IoRemove className="text-2xl" />
                    </p>
                    <p className="px-5">1</p>
                    <p className="btn btn-primary btn-sm btn-square ">
                      <IoAdd className="text-2xl" />
                    </p>
                  </div> */}
                  <div className="flex flex-row justify-center pt-6">
                    <h1 className="font-bold">Existencias: </h1>
                    <p>{ input.stock }</p>
                  </div>
                  <div className="flex flex-row justify-center pt-6">
                    <h1 className="font-bold">Color: </h1>
                    <p>{ input.color }</p>
                  </div>
                  <br />
                  <br />
                  <p
                    className="btn btn-accent btn-wide my-2"
                  >
                    Agregar al carrito
                  </p>
                  <br />
                </div>
                <div className="rating rating-lg rating-half">
                  <input type="radio" name="rating-7" className="rating-hidden" />
                  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" value={ 1 }  />
                  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" value={ 2 }  />
                  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" value={ 3 }  />
                  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" value={ 4 }  />
                  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" value={ 5 }  />
                </div>
                <ToastContainer />
              </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <div className="mx-8 text-start lg:px-20">
              <h1 className="mt-14 font-bold text-2xl md:text-4xl">Descripcion</h1>
              <br />
              <p>{ input.detail }</p>
              <h1 className="mt-14 font-bold text-2xl md:text-4xl">Especificaciones</h1>
              <br />
              <div className="grid grid-cols-2">
                <h1 className="font-bold mt-2">Marca:</h1>
                <p className="mt-2">{ input.marca }</p>
                <h1 className="font-bold mt-8">Modelo:</h1>{ " " }
                <p className="mt-8">{ input.modelo } </p>
                { input.so && <h1 className="font-bold mt-8">SO:</h1> }
                { input.so && (
                  <p className="mt-8">{ input.so }</p>
                ) }
                { input.cpu && <h1 className="font-bold mt-8">CPU:</h1> }
                { input.cpu && (
                  <p className="mt-8">{ input.cpu }</p>
                ) }
                { input.ram && <h1 className="font-bold mt-8">RAM:</h1> }
                { input.ram && (
                  <p className="mt-8">{ input.ram }</p>
                ) }
                { input.pantalla && (
                  <h1 className="font-bold mt-8">Pantalla:</h1>
                ) }
                { input.pantalla && (
                  <p className="mt-8">{ input.pantalla }</p>
                ) }
              </div>
            </div>
            </div>
            </div>
          </div>
          <div className="py-4 my-4">
            <button type="submit" className="btn btn-accent m-4">
              Crear
            </button>
            <Link to="/admin/articulos" className="">
              <button className="btn btn-warning m-4">Cancelar</button>
            </Link>
          </div>
        </form>
      </div>
      <Footer/>
    </div>
  );
}
