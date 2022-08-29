import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getArticles } from "../../store/actions/index";
  import {Bar} from 'react-chartjs-2';
import { withRouter } from "react-router";

export default function StatisArticle() {

  // const [artic,setArtic]=useState([]);
  // const [pric,setPric]=useState([]);

//   let dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getArticles());
//   }, []);


  const data={
    labels: ['Smartphone','Tablets','Notebooks','Acessories'],
    datasets:[{
        label: 'Categorias',
        backgroundColor:'red',
        borderColor: 'black',
        borderWidth: 1,
        hoverBackgroundColor: 'pink',
        hoverBorderColor: 'blue',
        data: [74.56,10.54,9.42,5.42],
    }]
  };

  const opciones={
    maintainAspectRadio: false,
    reponsive: true
  }

  return (
    <div className="">
      <Bar data={data} options={opciones} />
    </div>
  );
}

