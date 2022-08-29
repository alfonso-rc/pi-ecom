import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getArticles } from "../../../../src/store/actions/index.js";
  import {Pie} from 'react-chartjs-2';

export default function StatisArticle() {

  // const [artic,setArtic]=useState([]);
  // const [pric,setPric]=useState([]);

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);


  const data={
    labels: ['Smartphone','Tablets','Notebooks','Acessories'],
    datasets:[{
    data: [74,24,42,85],
    backgroundColor: ['red','blue','green','yellow']
    }]
  };

  const opciones={
    reponsive: true
  }

  return (
    <div className="">
      <Pie data={data} options={opciones} />
    </div>
  );
}
