import {useSelector, useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import {
	orderByAZ,
	orderByPrice,
	orderByRating,
	getArticles,
	getSmartphones,
	getNotebooks,
	getAccesories,
	getTablets,
	orderBrand2,
	getbrands,
} from "../store/actions/index";
import {ASCENDENTE, DESCENDENTE, MAYOR, MENOR, MEJOR, PEOR} from "../Constants";
//import NavBar from "./NavBar";
const stylesDropdown = {
	backgroundColor: "white",
};
export default function Orderings() {
	const allArticle = useSelector((state) => state.articles);
	let brands = useSelector((state) => state.brand);
	//const allSmartPhones = useSelector((state) => state.smartphones);
	let dispatch = useDispatch();
	//const [loading, setLoading] = useState(false);
	const [order, setOrder] = useState("");

	/*     useEffect(() => {
        dispatch(getbrands());
        dispatch(getArticles());
    }, [dispatch]); */

	function handleSortAZ(e) {
		e.preventDefault();
		dispatch(orderByAZ(e.target.value));
		// setCurrentPage(1)
		setOrder(e.target.value);
	}
	function handleSortRating(e) {
		e.preventDefault();
		dispatch(orderByRating(e.target.value));
		// setCurrentPage(1)
		setOrder(e.target.value);
	}
	function handleSortPrice(e) {
		e.preventDefault();
		dispatch(orderByPrice(e.target.value));
		//setCurrentPage(1);
		setOrder(e.target.value);
	}
	function resetCharacters(e) {
		e.preventDefault();
		dispatch(getArticles());
	}
	function handleBrand2(e) {
		e.preventDefault();
		dispatch(orderBrand2(e.target.value));
	}

	let BrandMap = brands.map((el) => {
		return [el.detail.marca, el];
	});
	let BrandMapArr = new Map(BrandMap);
	let unicos = [...BrandMapArr.values()];
	console.log("unicos", unicos);
	return (
		<div className="">
			<div className="flex flex-col">
				<div className="mt-4 mb-2 border-b-2 mx-3 border-violet-600">
					<span className="text-violet-600 font-bold text-xs">MARCA</span>
				</div>
				<div className="border-0">
					<select
						className="btn btn-primary btn-sm no-animation bg-violet-500 border-0 p-0 mx-3"
						onChange={(e) => handleBrand2(e)}
					>
						<option className="border-0" value="All">Todas las Marcas</option>
						{unicos.map((brand) => (
							<option className="border-0" key={brand.id} value={brand.detail.marca}>
								{brand.detail.marca}
							</option>
						))}
					</select>
				</div>
				<div className="mt-4 mb-2 border-b-2 mx-3 border-violet-600">
					<span className="text-violet-600 font-bold text-xs">ORDEN ALFABÉTICO</span>
				</div>
				<button
					className="btn btn-sm btn-primary m-1 bg-violet-500 border-0"
					onClick={(e) => handleSortAZ(e)}
					value={ASCENDENTE}
				>
					A-Z
				</button>
				<button
					className="btn btn-sm btn-primary m-1 bg-violet-500 border-0"
					onClick={(e) => handleSortAZ(e)}
					value={DESCENDENTE}
				>
					Z-A
				</button>
				<div className="mt-4 mb-2 border-b-2 mx-3 border-violet-600">
					<span className="text-violet-600 font-bold text-xs">ORDEN POR PRECIO</span>
				</div>
				<button
					className="btn btn-sm btn-primary m-1 bg-violet-500 border-0"
					onClick={(e) => handleSortPrice(e)}
					value={MAYOR}
				>
					Menor costo
				</button>
				<button
					className="btn btn-sm btn-primary m-1 bg-violet-500 border-0"
					onClick={(e) => handleSortPrice(e)}
					value={MENOR}
				>
					Mayor costo
				</button>
				<div className="mt-4 mb-2 border-b-2 mx-3 border-violet-600">
					<span className="text-violet-600 font-bold text-xs">ORDEN POR RANQUIN</span>
				</div>
				<button
					className="btn btn-sm btn-primary m-1 bg-violet-500 border-0"
					onClick={(e) => handleSortRating(e)}
					value={MEJOR}
				>
					Menos gustados
				</button>
				<button
					className="btn btn-sm btn-primary m-1 bg-violet-500 border-0"
					onClick={(e) => handleSortRating(e)}
					value={PEOR}
				>
					Mayor gustados
				</button>
				<button
					onClick={(e) => resetCharacters(e)}
					className="btn btn-sm md:btn-md btn-primary mx-3 mb-5 mt-5 bg-violet-600 border-0"
				>
					Quitar filtros
				</button>
			</div>
		</div>
	);
}
