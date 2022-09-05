import React from "react";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getName} from "../store/actions";
import {Link} from "react-router-dom";
import {IoSearchOutline} from "react-icons/io5";

const styleSearch = {
	// boxShadow: "0px 3px 5px 1px rgba(0, 0, 0, 0.1)",
	marginRight: "5px",
	border: "1px solid #B7BBD0",
};

export default function SearchBar() {
	const dispatch = useDispatch();
	const [name, setName] = useState("");
	const allArticles = useSelector((state) => state.articles);
	const [currentPage, setCurrentPage] = useState(1);

	function handleInput(e) {
		e.preventDefault();
		//setCurrentPage(1)
		setName(e.target.value);
	}

	function handleName(e) {
		e.preventDefault();
		//setCurrentPage(1)
		dispatch(getName(name));
		setName("");
	}

	return (
		<nav>
			<form className="my-5 sm:my-4 mx-3 md:m-5 flex pt-1 md:pt-0 ">
				<input
					style={styleSearch}
					className="input input-bordered bg-white text-black h-9 w-28 sm:w-full sm:h-12"
					onChange={(e) => handleInput(e)}
					type="text"
					value={name}
					placeholder="Busqueda por nombre..."
				/>
				<button
					className="hidden lg:btn lg:btn-outline lg:text-white"
					onClick={(e) => handleName(e)}
				>
					<IoSearchOutline className="text-2xl" />
				</button>
			</form>
		</nav>
	);
}
