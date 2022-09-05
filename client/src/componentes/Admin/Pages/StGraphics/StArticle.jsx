import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getArticles, orderByRating } from "../../../../store/actions/index";
  import {Bar} from 'react-chartjs-2';
import { withRouter } from "react-router";
import Chart from 'chart.js/auto';
import {CategoryScale} from 'chart.js'; 
Chart.register(CategoryScale);



export default function StatisArticle() {

  
  const allArticle = useSelector((state) => state.articles);

 

  const titulo1 = allArticle.map((e)=> e.title).slice(0,10);
  const rating1 = allArticle.map((e)=> e.rating).slice(0,10);
 

 
  
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArticles());
  }, [dispatch]);


  const data={
    labels: (titulo1),
    datasets:[{
        label: 'Rating',
        backgroundColor:'red',
        borderColor: 'black',
        borderWidth: 1,
        hoverBackgroundColor: 'pink',
        hoverBorderColor: 'blue',
        data: (rating1),
        
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

