import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import {
	getArticles,
	orderByRating,
	orderByPrice,
} from "../../../../store/actions";
import {Bar} from "react-chartjs-2";
import {withRouter} from "react-router";
import {
	ASCENDENTE,
	DESCENDENTE,
	MAYOR,
	MENOR,
	MEJOR,
	PEOR,
} from "../../../../Constants/index";
import Chart from "chart.js/auto";
import {CategoryScale} from "chart.js";
Chart.register(CategoryScale);

export default function StArtPrecio() {
	let allArticle = useSelector((state) => state.articles);
	const allSmartPhones = useSelector((state) => state.smartphones);
	let brands = useSelector((state) => state.brand);
	const [order, setOrder] = useState("");

	let dispatch = useDispatch();

	useEffect(() => {
		dispatch(orderByPrice(MAYOR));
		dispatch(getArticles());
	}, [dispatch]);

	const titulo1 = allArticle.map((e) => e.title).slice(0, 10);
	const price1 = allArticle.map((e) => e.price).slice(0, 10);

	const data = {
		labels: titulo1,
		datasets: [
			{
				label: "Price",
				backgroundColor: "red",
				borderColor: "black",
				borderWidth: 1,
				hoverBackgroundColor: "pink",
				hoverBorderColor: "blue",
				data: price1,
			},
		],
	};

	const opciones = {
		maintainAspectRadio: false,
		reponsive: true,
	};

	return (
		<div>
			<Bar data={data} options={opciones} />
		</div>
	);
}
