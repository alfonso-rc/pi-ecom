import React, { useState } from "react";
import {useHistory} from "react-router-dom";
import {deleteArticleLogic} from '../../../../client/src/store/actions/index';
import { useDispatch, useSelector} from 'react-redux';

export default function  DisableArticle(){
  const dispatch = useDispatch()          //traeme el state.occupations
  const history = useHistory()
  
  //crear un formulario  y lo guardamos en un estado llamado input, y setinput
  const [input,setInput]= useState({
    disable:true
  });

  const handleChange=(e)=> {
  setInput({
      ...input,
      [e.target.disable]: e.target.value
    });
}

  function handleSubmit(e){
    e.preventDefault();
    dispatch(deleteArticleLogic(input))
    alert("Articulo Inhabilitado!!")
    setInput({
      disable:"",
    })
        history.push('/admin/articulos')
  };  

  //hacemos el render
  return(
    <div>
        
          <div >
          <h2>Inhabilitar Articulo para la venta</h2>
          </div>
          <form onSubmit={(e)=> handleSubmit(e)}>
            <div>
               <label>Disable </label>   
               <input placeholder="Disable..." type="text" value= {input.disable} name= "disable" onChange={handleChange}/>
            </div>
          </form>
    </div>
    )  
}   