import { useState } from 'react'
import emailjs from '@emailjs/browser';
import s from './SubscribeMail.module.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Footer() {

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
      console.log(input)
   }

   const sendEmail = (e) => {
      e.preventDefault();
      setLoading(true)

      const templateParams = {
         reply_to: input.email,
         from_name: "ECOM ECOMMERCE SERVICE",
         to_name: input.name
      }

      emailjs.send('service_1mxpbqr', 'subscribe_form', templateParams, 'sc1NAKn7E6pHeWv0N')
         .then((result) => {
            console.log(result.text);
            setLoading(false)
            handleToastResult("OK")
         }, (error) => {
            console.log(error.text);
            setLoading(false)
            handleToastResult("ERROR")
         });
   };

   function handleToastResult(status) {
      return status === "OK" ?
         toast.success('Te has suscrito exitósamente!', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
         })
         :
         toast.error('Hubo un error al intentar suscribirte!', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
         });


   }


   // Retorna uno de los 3 estados del botón submit: DESABILITADO, HABILITADO O CARGANDO
   function SwitchButtonSubmit() {
      if (loading) return <button class="btn mx-3 my-3 w-6/12 loading"></button>
      return input.name.length === 0 || input.email.length === 0 ?
         <button disabled for="my-modal-3" class="btn mx-3 my-3 w-6/12 modal-button">Suscribirme</button> :
         <button onClick={ sendEmail } for="my-modal-3" class="btn mx-3 my-3 w-6/12 modal-button">Suscribirme</button>;
   }

   return (
      <div className={ s.container }>
         <div className={ s.titleContainer }>
            <h1 className='text-3xl'>Suscríbete a nuestras ofertas</h1>
         </div>

         <ToastContainer></ToastContainer>
         <input onChange={ handleChangeInput } value={ input.name } name="name" type="text" placeholder="Nombre" class="input text-1.5xl mx-3 my-3 w-6/12 max-w-xs" />
         <input onChange={ handleChangeInput } value={ input.email } name="email" type="email" placeholder="Email" class="input text-1.5xl mx-3 my-3 w-6/12 max-w-xs" />


         {
            <SwitchButtonSubmit />
         }
      </div>
   )
}