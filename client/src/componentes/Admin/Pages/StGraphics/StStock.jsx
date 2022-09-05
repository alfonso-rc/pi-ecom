import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getArticles, orderByRating,orderByPrice } from "../../../../store/actions";
import { Bar } from "react-chartjs-2";
import { withRouter } from "react-router";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
Chart.register(CategoryScale);

export default function StStock() {

    
    let allArticle = useSelector((state) => state.articles);
	const allSmartPhones = useSelector((state) => state.smartphones);
	let brands = useSelector((state) => state.brand);
    const [order, setOrder] = useState("");

  
  const titulo1 = allArticle.map((e) => e.title).slice(0, 10);
  const stock1 = allArticle.map((e) => e.stock).slice(0, 10);

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArticles());
}, [dispatch]);

  const data = {
    labels: titulo1,
    datasets: [
      {
        label: "Stock",
        backgroundColor: "red",
        borderColor: "black",
        borderWidth: 1,
        hoverBackgroundColor: "pink",
        hoverBorderColor: "blue",
        data: stock1,
      },
    ],
  };

  const opciones = {
    maintainAspectRadio: false,
    reponsive: true,
  };

  return (
    <div className="">
      <Bar data={data} options={opciones} />
    </div>
  );
}
