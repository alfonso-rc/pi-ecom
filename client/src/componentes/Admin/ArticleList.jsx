import React from 'react';
import ArticleList from "./ArticleList";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import {
    getArticles
  } from "../../store/actions/index";

export default function Admin({id,title,modelo,stock,price}) {
    const allArticle = useSelector((state) => state.articles);
    let dispatch = useDispatch();
  
    useEffect(() => {
        dispatch(getArticles());
      }, []);

  return (
    <div>
      <div class="overflow-x-auto">
  <table class="table table-compact w-full">
    <thead>
      <tr>
        <th></th> 
        <th>Name</th> 
        <th>Modelo</th> 
        <th>Stock</th> 
        <th>Price</th> 
        <th>Action</th> 
        <th>Action</th>
      </tr>
    </thead> 
    <tbody>
      {allArticle?.map((art) => {
        return(
            <tr>
                <th>{art.id}</th> 
                <td>{art.title}</td> 
                <td>{art.modelo}</td> 
                <td>{art.stock}</td> 
                <td>{art.price}</td> 
                <td><button className="btn btn-info btn-xs">Edit</button></td> 
                <td><button className="btn btn-error btn-xs">Delete</button></td>
            </tr>            
        )
      })}
    </tbody> 
    <tfoot>
      <tr>
        <th></th> 
        <th>Name</th> 
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
  )
}
