import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getArticles, orderByRating } from "../../store/actions/index";
  import {Bar} from 'react-chartjs-2';
import { withRouter } from "react-router";
import Chart from 'chart.js/auto';
import {CategoryScale} from 'chart.js'; 
Chart.register(CategoryScale);
const BASE_URL = process.env.REACT_APP_API_URL;
const URL_GET_DETAIL_BY_ID =
  process.env.NODE_ENV === "production"
    ? BASE_URL + "/article/"
    : "http://localhost:3001/article/";
    console.log( URL_GET_DETAIL_BY_ID )


export default function StatisArticle() {

  const [article, setArticle] = useState(null);
  const [pric,setPric]=useState([]);
  const allArticle = useSelector((state) => state.articles);

 

  const titulo1 = allArticle.map((e)=> e.title)
  const rating1 = allArticle.map((e)=> e.rating)
 

 
  
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArticles());
  }, []);


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

