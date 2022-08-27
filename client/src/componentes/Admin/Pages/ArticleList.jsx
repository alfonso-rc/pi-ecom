import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getAllArticles } from "../../../../src/store/actions/index.js";

export default function ArticleList({ id, title, modelo, stock, price }) {

  const allArticle = useSelector((state) => state.articles);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllArticles());
  }, []);

  function HandleClickEliminar(){

  };

  return (
    <div className="">
      <div className="">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th>id</th>
              <th>Name</th>
              <th>Marca</th>
              <th>Modelo</th>
              <th>Stock</th>
              <th>Price</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allArticle?.map((art) => {
              return (
                <tr>
                  <th>{art.id}</th>
                  <td>{art.title}</td>
                  <td>{art.marca}</td>
                  <td>{art.modelo}</td>
                  <td>{art.stock}</td>
                  <td>{art.price}</td>
                  <td>
                    <button className="btn btn-info btn-xs">Edit</button>
                  </td>
                  <td>
                    {/* <button className="btn btn-error btn-xs">Delete</button> */}
                    
                    <label for="my-modal-6" className="btn modal-button btn-error btn-xs">Delete</label>
                        <input type="checkbox" id="my-modal-6" className="modal-toggle" />
                        <div className="modal modal-bottom sm:modal-middle">
                          <div className="modal-box w-min">
                            <h3 className="font-bold">Elija la accion que desea realizar:</h3>
                            <br/>
                            <div className="justify-center">
                                <p class="">Desabilitar: Inhabilita el Articulo para la venta</p>
                                <p class="">Eliminar: Elimina el Articulo de manera permanente</p>
                            </div>
                            <br/>
                            <button className="btn btn-warning btn-xs ml-20">Desabilitar</button>
                            <button className="btn btn-error btn-xs ml-4">Eliminar</button>
                            <div className="modal-action">
                              <label for="my-modal-6" className="btn btn-xs">Cancelar</label>
                            </div>
                          </div>
                        </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Marca</th>
              <th>Modelo</th>
              <th>Stock</th>
              <th>Price</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
