import React, { useState, useEffect } from "react"
import {totalPrice} from './Carrito'
import {loadStripe} from '@stripe/stripe-js';
import {Elements, CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
//import { addToCart,  addToWishlist,  postHistorial,} from "../../Redux/Actions/Actions";
import axios from 'axios';
const stripePromise = loadStripe("pk_test_51LYz7FBeAsr6kwML7B7zeyM3oWek4xxhjj1HPbx9PhdJsgKx1ZVJvpbnBgWkE9w3QPOTv37tKdswGFxFHJ6dgSno00qLvCfkJJ")

function CheckoutForm(){
const stripe = useStripe();
const elements = useElements();
const [loading, setLoading] = useState(false)

const handleSubmit = async(e)=>{
  e.preventDefault();
  console.log(totalPrice)
  const {error, paymentMethod} = await stripe.createPaymentMethod({
    type: 'card',
    card: elements.getElement(CardElement)
  });
  setLoading(true);
    if(!error){
     const {id}= paymentMethod;
    try {
        const {data}= await axios.post('http://localhost:3001/checkout',{
          id,
          amount:10000
        });
        console.log(data);

        elements.getElement(CardElement).clear()
    } catch (error) {
        console.log(error);
    }
    setLoading(false)
    }
}

  return <form  onSubmit={handleSubmit}>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuwkY3kUFcYGgkSopfdkebybYB5KhhxXRbYxlYxyhvBU1j-Ip-hUMOtmDn2VBaaU1O_Po&usqp=CAU" />
    <h3>prices: 200</h3>
    console.log("probando")
    <CardElement/>
    <button disabled={!stripe}>
      {loading? "cargando":"buy"}
    </button>
  </form>
}

export default function payment() {
  return (
    <div>
        <Elements stripe={stripePromise}>
             <CheckoutForm/>       
        </Elements>
    </div>
  );
}

