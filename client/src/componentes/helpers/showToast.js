import { ToastContainer, toast } from 'react-toastify';

// Funnción que genera un toast

// documentación --> https://fkhadra.github.io/react-toastify/introduction/
// type --> "info" "success" "warning" "error" "default"
export default function showToast(type, text) {
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