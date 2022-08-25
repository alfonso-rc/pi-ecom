import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useSelector } from "react-redux";
import axios from "axios";
import { useHistory } from "react-router-dom";
import CardCarrito from "./CardCarrito";

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
  const { cart } = useSelector((state) => state);

  var titulosAComprar = [];
  var precioTotal = 0;
  for (let i = 0; i < cart.length; i++) {
    titulosAComprar.push(cart[i].name);
    precioTotal = precioTotal + cart[i].price;
  }

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
        const { data } = await axios.post("http://localhost:3001/checkout", {
          id,
          amount: precioTotal * 100,
        });
        console.log(data);

        elements.getElement(CardElement).clear();
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
  };

  return (
    <div>
      <div>
        <h3>Cantidad de articulos: {cart.length}</h3>
        <div>
          {cart &&
            cart.map((e) => {
              return (
                <CardCarrito
                  key={e.id}
                  id={e.id}
                  title={e.title}
                  image={e.image}
                  price={e.price}
                />
              );
            })}
        </div>
        <p>Total: {precioTotal}.00</p>
        <form onSubmit={handleSubmit}>
          <div>
            {/* <input type="text" />
            <input type="text" /> */}
        </div>
      <CardElement />
      <button>Buy</button>
        </form>
      </div>
    </div>
  );
}

export default function buy() {
  return (
    <div>
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
}
