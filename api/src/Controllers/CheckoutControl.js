require('dotenv').config();
const express = require("express");
const Stripe = require("stripe");
const { STRIPE_PUBLIC} = process.env;
//const Stripe= require("stripe")
const stripe = new Stripe("sk_test_51LYz7FBeAsr6kwMLC7RfoW2QsnT6AKhEYBGECdCkAHvXbXkkGzZFXaBW5YfaQYySP0otxZMXUWESRYaKaaEq9QSv00yiIMxNMm");
//const {mandarEmail}= require("..utils/sendEmail");

const testFunction = (req, res, next) => {
    try {
      return res.send('Ecom Article funcionando!');
    } catch (error) {
      next(error);
    };
  };

  const paymentCheck = async (req,res,next)=>{
    // you can get more data to find in a database, and so on
  const { id, amount } = req.body;

  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "USD",
      description: "Compraste productos en Ecom",
      payment_method: id,
      confirm: true, //confirm the payment at the same time
    })
    //mandarEmailCompra(amount,currency, description);
    console.log(payment);

    return res.status(200).json({ message: "Successful Payment" });
  } catch (error) {
    console.log(error);
    return res.json({ message: error.raw.message });
  }
  }

  module.exports={testFunction,paymentCheck}