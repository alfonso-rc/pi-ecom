import axios from 'axios'
import { useState } from 'react'
import emailjs from '@emailjs/browser';
import s from './SubscribeMail.module.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BASE_URL = process.env.REACT_APP_API_URL;
const URL_POST_SUBSCRIBE_USER = process.env.NODE_ENV === "production" ?
   BASE_URL + "/user/subscribe" : "http://localhost:3001/user/subscribe";

const styleInputAndButton = {
   width: "90%"
}



export default function SubscribeMail() {

   console.log("montadoooooo")
   const [loading, setLoading] = useState(false)
   const [input, setInput] = useState({
      name: "",
      email: ""
   })

   function handleChangeInput(e) {
      setInput({
         ...input,
         [e.target.name]: e.target.value
      })
      // console.log(input)
   }

   function showToast(type, text) {
      return (
         toast[type](text, {
            position: "bottom-right",
            autoClose: 4000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
         })
      );
   }

   const sendEmail = async (e) => {
      const templateParams = {
         reply_to: input.email,
         from_name: "ECOM ECOMMERCE SERVICE",
         to_name: input.name
      }

      e.preventDefault();
      setLoading(true);

      // Preguntamos a la api si el email ya se suscribió o si está registrado como usuario
      const res = await axios.post(URL_POST_SUBSCRIBE_USER, input)
         .catch(e => {
            if (e.response.data.isUserAlreadyRegistered) {
               console.log("EL USUARIO YA ESTÁ REGISTRADO");
               setLoading(false);
               showToast("error", "El email ya está registrado, inicia sesión y activa las notifiaciones");
               return;
               // Verificamos si el email ya está sucrito al newsleters (pero no registrado)
            } else if (e.response.data.isUserAlreadySubscribed) {
               setLoading(false)
               showToast("info", "Ya te suscribiste a nuestro newletter 🖤")
               return;
            }
         })

      // Un status 201 significa que se suscribió correctamente al newsletter
      if (res.status === 201) {
         // Tratamos de enviar el correo de confirmación
         emailjs.send('service_1mxpbqr', 'subscribe_form', templateParams, 'sc1NAKn7E6pHeWv0N')
            .then((result) => {
               setLoading(false);
               showToast("success", "🖤 Gracias por suscribirte a nuestro newsletter 🖤");
            }, (error) => {
               console.log(error.text);
               setLoading(false)
               showToast("error", "Ups, hubo un error al intentar suscribirte");
            });
      }
   };

   // Retorna uno de los 3 estados del botón submit: DESABILITADO, HABILITADO O CARGANDO
   function SwitchButtonSubmit() {
      if (loading) return <button className="btn mx-3 my-3 w-6/12 loading"></button>
      return input.name.length === 0 || input.email.length === 0 ?
         <button disabled for="my-modal-3" className="btn mx-3 my-3 w-6/12 modal-button">Suscribirme</button> :
         <button onClick={ sendEmail } for="my-modal-3" className="btn mx-3 my-3 w-6/12 modal-button">Suscribirme</button>;
   }

   return (
      <div className={ s.container }>
         <div className={ s.titleContainer }>
            <h1 className='text-3xl'>Suscríbete a nuestras ofertas</h1>
         </div>

         <input onChange={ handleChangeInput } value={ input.name } name="name" type="text" placeholder="Nombre" className="input text-1.5xl mx-3 my-3 w-6/12 max-w-xs" />
         <input type="email" onChange={ handleChangeInput } value={ input.email } name="email" placeholder="Email" className="input text-1.5xl mx-3 my-3 w-6/12 max-w-xs" />

         {
            <SwitchButtonSubmit />
         }

         <ToastContainer></ToastContainer>
      </div>
   )
}