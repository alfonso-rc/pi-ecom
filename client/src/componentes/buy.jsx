import React, {useState, useEffect} from "react";
import {loadStripe} from "@stripe/stripe-js";
import {
	Elements,
	CardElement,
	useStripe,
	useElements,
} from "@stripe/react-stripe-js";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {Link, useHistory} from "react-router-dom";
import CardCarrito from "./CardCarrito";
import NavBarDetail from "./NavBarDetail";
import Footer from "./Footer";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import pagoStripe from "../imagenes/imgtecnologias/stripe-pagos.png";

function toastSucces() {
	return toast.success("Compra realizada!", {
		position: "bottom-left",
		autoClose: 2000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
	});
}
function toastError() {
	return toast.error("No hay nada para comprar", {
		position: "bottom-left",
		autoClose: 2000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
	});
}

/* require('dotenv').config();
const {
  STRIPE_PRIVADA
 } = process.env; */

const stripePromise = loadStripe(
	"pk_test_51LYz7FBeAsr6kwML7B7zeyM3oWek4xxhjj1HPbx9PhdJsgKx1ZVJvpbnBgWkE9w3QPOTv37tKdswGFxFHJ6dgSno00qLvCfkJJ"
);

function CheckoutForm() {
	const stripe = useStripe();
	const elements = useElements();
	const history = useHistory();
	const [loading, setLoading] = useState(false);
	const {cart} = useSelector((state) => state);
	const {user} = useSelector((state) => state);
	const [clientSecret, setClientSecret] = useState("");
	const [disabled, setDisabled] = useState(true);
	const [error, setError] = useState(null);
	let dispatch = useDispatch();

	var titulosAComprar = [];
	var precioTotal = 0;
	for (let i = 0; i < cart.length; i++) {
		titulosAComprar.push(cart[i].name);
		precioTotal = precioTotal + cart[i].price;
	}

	// useEffect(() => {
	//   // Create PaymentIntent as soon as the page loads
	//   window
	//     .fetch("/create-payment-intent", {
	//       method: "POST",
	//       headers: {
	//         "Content-Type": "application/json",
	//       },
	//       body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
	//     })
	//     .then((res) => {
	//       return res.json();
	//     })
	//     .then((data) => {
	//       setClientSecret(data.clientSecret);
	//     });
	// }, []);

	const handleChange = async (event) => {
		// Listen for changes in the CardElement
		// and display any errors as the customer types their card details
		setDisabled(event.empty);
		setError(event.error ? event.error.message : "");
	};

  const BASE_URL = process.env.REACT_APP_API_URL;
  const URL_CHECKOUT =
    process.env.NODE_ENV === "production"
      ? BASE_URL + "/checkout"
      : "http://localhost:3001/checkout";


  const URL_MY_SHOPPINGS = process.env.NODE_ENV === "production"
    ? BASE_URL + "/myShoppings/add"
    : "http://localhost:3001/myShoppings/add";


  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    setLoading(true);
    if (!error) {
      const { id } = paymentMethod;
      try {
        const { data } = await axios.post(URL_CHECKOUT, {
          id,
          amount: precioTotal * 100,
        });
        console.log(data);

        for (const shop of cart) {
          const shopping = {
            idUser: sessionStorage.id,
            infoArticle: shop
          };
          await axios.post(URL_MY_SHOPPINGS, shopping);
        }

        elements.getElement(CardElement).clear();
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
      Swal.fire({
        text: "Compra realizada con éxito",
        icon: "success",
      }).then(response => {
        if (response) {
          localStorage.setItem("cart", JSON.stringify([]));
          toastSucces()
          history.push("/home", { replace: true });
          refreshPage()
        }
      });
    } else {
      Swal.fire({
        text: "Targeta no valida",
        icon: "warning"
      })
    }

  };


  const refreshPage = () => {
    window.location.reload();
  }

	function activateButton() {
		if (precioTotal === 0) {
			toastError();
			return true;
		}
		return false;
	}

	return (
		<div className="bg-white">
			<div>
				<NavBarDetail />
			</div>

      <div className="font-Work  text-black p-6 min-h-screen">
        <h3 className="text-xl pb-10 ">Cantidad de articulos: { cart.length }</h3>
        <div className="flex flex-col md:grid" style={ { gridTemplateColumns: "65% 35%" } }>
          <div className="flex flex-row flex-wrap justify-center gap-24 text-start  md:max-h-[calc(100vh-232px)] md:overflow-auto font-bold">
            { cart &&
              cart.map((e) => {
                return (
                  <CardCarrito
                    key={ e.id }
                    id={ e.id }
                    title={ e.title }
                    image={ e.image }
                    price={ e.price }
                  />
                );
              }) }
          </div>
          <div className="shadow-xl border-2 border-stone-200 rounded-md mt-10">
            <p className="text-2xl font-normal pb-8 mb-8">Total: $ { precioTotal }.00</p>
            <p className="flex pb-10 text-lg  px-4">Ingrese su tarjeta:</p>
            <form onSubmit={ handleSubmit }>
              <div className="pb-8 mb-8  px-4">
                <CardElement
                  id="card-element"
                  onChange={ handleChange } />
              </div>
              <button
                className="btn btn-outline btn-accent m-2"
                disabled={ activateButton() }
              >
                Buy
              </button>
            </form>
            <ToastContainer />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default function buy() {
  return (
    <div>
      <Elements stripe={ stripePromise }>
        <CheckoutForm id="checkId" />
      </Elements>
    </div>
  );
}
