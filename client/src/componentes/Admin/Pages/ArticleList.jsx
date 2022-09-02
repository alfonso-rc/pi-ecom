import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllArticles,deleteArticle,deleteArticleLogic,editArticle } from "../../../../src/store/actions/index.js";

export default function ArticleList() {

  let allArticle = useSelector((state) => state.articles);
  let dispatch = useDispatch();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    dispatch(getAllArticles());
  }, [dispatch]);

  function handleClickDelete(id){
    try {
      dispatch(deleteArticle(id));
      allArticle = allArticle.filter(a=>a.id!==id);
      console.log(id);
      alert(`El Articulo con id: ${id} fue Eliminado!`)   
    } catch (error) {
      console.log(error);
    }
  }

  function handleClickInhab(id){
    try {
      dispatch(deleteArticleLogic(id));
      alert(`El Articulo con id: ${id} no esta disponible!`)   
    } catch (error) {
      console.log(error);
    }
  };

  function handleClickEdit(id){
    try {
      dispatch(editArticle(id));
      alert(`El Articulo con id: ${id} ha sido modificado!`)   
    } catch (error) {
      console.log(error);
    }
  }
 

  return (
    <div className="">
      <div className="">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th className="w-8">Name</th>
              <th>id</th>
              <th>Marca</th>
              <th>Modelo</th>
              <th>Habilitado</th>
              <th>Stock</th>
              <th>Price</th>
              <th>Action</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allArticle?.map((art) => {
              return (
                <tr>
                  <th className="w-8">{art.title}</th>
                  <td>{art.id}</td>
                  <td>{art.marca}</td>
                  <td>{art.modelo}</td>
                  <td>{art.disable}</td>
                  <td>{art.stock}</td>
                  <td>{art.price}</td>
                  <td> 
                    <button className="btn btn-error btn-xs" onClick={()=>handleClickInhab(art.id)}>Desabilitar</button>                  
                  </td>
                  <td>
                    <Link to="/admin/articulos/edit">
                      <button className="btn btn-info btn-xs">Edit</button>
                    </Link>
                    
                  </td>
                  <td>
                    <a href="#my-modal-2" class="btn btn-error btn-xs">Delete</a>
                    <div class="modal" id="my-modal-2">
                      <div class="modal-box">
                        <h3 class="font-bold">El Articulo se eliminara de manera permanente!</h3>
                        <div class="modal-action">
                        <button className="btn btn-error btn-xs" onClick={()=>handleClickDelete(art.id)}>Continuar</button>
                        <a href="#" className="btn btn-xs">Cancelar</a>
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
              <th className="w-8">Name</th>
              <th>id</th>
              <th>Marca</th>
              <th>Modelo</th>
              <th>Habilitado</th>
              <th>Stock</th>
              <th>Price</th>
              <th>Action</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
