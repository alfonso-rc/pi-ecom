import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postArticle, getCategory, getArticles } from "../../../store/actions/index";

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

  function handleSubmit(e) {
    e.preventDefault();
    console.log(input);
    dispatch(postArticle(input));
    alert("Articulo Creado!");
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
  }

  return (
    <div className=" text-black">
      <div className="">
        <form onSubmit={(e) => handleSubmit(e)} className="">
          <h1 className="text-xl ">Create Article</h1>
          <div className="bg-teal-200 w-1/3">
            <label className="gap-1">Categorias: </label>
            <div>
              <label className="m-2">
                Smartphone
                <input
                  type="radio"
                  name="category"
                  value="smartphones"
                  onChange={(e) => handleCheck(e)}
                />
              </label>
              <label className="m-2">
                Notebooks
                <input
                  type="radio"
                  name="category"
                  value="notebooks"
                  onChange={(e) => handleCheck(e)}
                />
              </label>
              <label className="m-2">
                Tablets
                <input
                  type="radio"
                  name="category"
                  value="tablets"
                  onChange={(e) => handleCheck(e)}
                />
              </label>
              <label className="m-2">
                Accesories
                <input
                  type="radio"
                  name="category"
                  value="accesories"
                  onChange={(e) => handleCheck(e)}
                />
              </label>
            </div>
          </div>
          <div className=" flex flex-row justify-start">
            <div className=" flex flex-col justify-start">
              <div className="bg-teal-200 m-4">
                {/* Datos Grales del Articulo */}
                <div className="m-2">
                  <label className="">Title: </label>
                  <input
                    className="input-accent w-xs"
                    type="text"
                    value={input.title}
                    name="title"
                    onChange={(e) => handleChange(e)}
                  />
                  {errors.title && <p className="">{errors.title}</p>}
                </div>
                <div className="m-2 flex justify-end">
                  <label className="">Rating: </label>
                  <input
                    className="input-accent w-xs"
                    type="number"
                    value={input.rating}
                    name="rating"
                    min={0}
                    max={5}
                    onChange={(e) => handleChange(e)}
                  />
                  {errors.rating && <p className="">{errors.rating}</p>}
                </div>
                <div className="m-2 flex justify-end">
                  <label className="">Marca: </label>
                  <input
                    className="input-accent w-xs"
                    type="text"
                    value={input.marca}
                    name="marca"
                    onChange={(e) => handleChange(e)}
                  />
                  {errors.modelo && <p className="">{errors.modelo}</p>}
                </div>
                <div className="m-2 flex justify-end">
                  <label className="">Modelo: </label>
                  <input
                    className="input-accent w-xs"
                    type="text"
                    value={input.modelo}
                    name="modelo"
                    onChange={(e) => handleChange(e)}
                  />
                  {errors.modelo && <p className="">{errors.modelo}</p>}
                </div>
                <div className="m-2 flex justify-end">
                  <label className="">Detail: </label>
                  <input
                    className="input-accent w-xs"
                    type="text"
                    value={input.detail}
                    name="detail"
                    onChange={(e) => handleChange(e)}
                  />
                  {errors.detail && <p className="">{errors.detail}</p>}
                </div>
                <div className="m-2 flex justify-end">
                  <label className="">Price: </label>
                  <input
                    className="input-accent w-xs"
                    type="number"
                    value={input.price}
                    name="price"
                    min={0}
                    onChange={(e) => handleChange(e)}
                  />
                  {errors.price && <p className="">{errors.price}</p>}
                </div>
                <div className="m-2 flex justify-end">
                  <label className="">Stock: </label>
                  <input
                    className="input-accent w-xs"
                    type="number"
                    value={input.stock}
                    name="stock"
                    min={0}
                    max={200}
                    onChange={(e) => handleChange(e)}
                  />
                  {errors.stock && <p className="">{errors.stock}</p>}
                </div>
                <div className="m-2 flex justify-end">
                  <label className="">Image: </label>
                  <input
                    className="input-accent w-xs"
                    type="text"
                    value={input.image}
                    name="image"
                    onChange={(e) => handleChange(e)}
                  />
                  {errors.image && <p className="">{errors.image}</p>}
                </div>
                <div className="m-2 flex justify-end">
                  <label className="">Color: </label>
                  <input
                    className="input-accent w-xs"
                    type="text"
                    value={input.color}
                    name="color"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="m-2 flex justify-end">
                  <label className="">Conectivity: </label>
                  <input
                    className="input-accent w-xs"
                    type="text"
                    value={input.conectividad}
                    name="conectividad"
                    onChange={(e) => handleChange(e)}
                  />
                  {errors.conectividad && <p className="">{errors.conectividad}</p>}
                </div>
              </div>
              <div className="bg-teal-200 m-4">
                {/* Datos Opcionales segun categoria */}
                <div className="m-2 flex justify-end">
                  <label className="">Sistema Operativo: </label>
                  <input
                    className="input-accent w-xs"
                    type="text"
                    value={input.so}
                    name="so"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="m-2 flex justify-end">
                  <label className="">RAM: </label>
                  <input
                    className="input-accent w-xs"
                    type="text"
                    value={input.ram}
                    name="ram"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="m-2 flex justify-end">
                  <label className="">CPU: </label>
                  <input
                    className="input-accent w-xs"
                    type="text"
                    value={input.cpu}
                    name="cpu"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="m-2 flex justify-end">
                  <label className="">Pantalla: </label>
                  <input
                    className="input-accent w-xs"
                    type="text"
                    value={input.pantalla}
                    name="pantalla"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>
            </div>
            <div className=" bg-gray-500 flex flex-row">
              <div className="">
                <h1 className="font-bold">Category: </h1>
                <p>{input.category}</p>
                <img src={input.image} alt="" />
              </div>
              <div className="bg-indigo-700 w-full h-96 flex flex-col">
                <h3 className="font-bold text-4xl">{input.title}</h3>
                <div className="flex flex-row justify-center">
                  <h1 className="font-bold">Rating: </h1>
                  <h1 className="text-accent font-mono">{input.rating}</h1>
                </div>
                <div className="flex flex-row justify-center">
                  <h1>Precio: </h1>
                  <p className="text-accent font-mono">${input.price}</p>
                </div>
                <div className="flex flex-row justify-center">
                  <h1>Stock: </h1>
                  <p className=" font-mono">{input.stock}</p>
                </div>
                <div className="flex flex-row justify-center">
                  <h1>Color: </h1>
                  <p className="text-accent font-mono">{input.color}</p>
                </div>
                <div className="flex flex-col justify-center">
                  <h1>Detail: </h1>
                  <p className="text-accent font-mono">{input.detail}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <button type="submit" className="btn btn-accent m-4">
              Create
            </button>
            <Link to="/admin/articulos" className="">
              <button className="btn btn-accent m-4">Back</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
