/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useDispatch, useSelector } from "react-redux"
// import { XIcon } from '@heroicons/react/outline'
import { toggleCart } from '../store/actions/index.js'
import { useHistory } from 'react-router-dom'
import CardCarrito from './CardCarrito.jsx'

export default function Example() {
  const showCart = useSelector(state => state.showCart)
  const [open, setOpen] = useState(true)
  const history = useHistory()
  const dispatch = useDispatch();
  const [totalPrecio, settotalPrecio] = useState(0);
  const [totalItems, settotalItems] = useState([]);
  const { cart } = useSelector((state) => state);
  useEffect(() => {
    if (cart) {
      cart &&
        cart.forEach((e) => {
          settotalPrecio(totalPrecio + e.price);
        });
      settotalItems(cart.length);
    }
  }, [cart]);

  const HandleClickComprar = () => {
    const token = sessionStorage.getItem("token");
    if (token) {
      history("/home/pasarela");
      console.log("COMPRADISIMO BRO");
    } else {
      history("/home/login");
    }
  };
  useEffect(() => {

    setOpen(() => {
      return !open
    })

  }, [showCart])

  var totalPrice = 0;

  for (let i = 0; i < cart.length; i++) {
    console.log(cart[i].price);
    totalPrice = totalPrice + cart[i].price;
  }

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900"> Shopping cart </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={() => setOpen(false)}
                          >
                            <span className="sr-only">Close panel</span>
                            {/* <XIcon className="h-6 w-6" aria-hidden="true" /> */}
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          <ul role="list" className="-my-6 divide-y divide-gray-200">
                            {/* // // {cart &&
// //   cart.map((e) => {
// //     return (
// //       <CarritoCard
// //         key={e.id}
// //         id={e.id}
// //         title={e.title}
// //         image={e.posterImagen}
// //         category={e.category}
// //         price={e.price}
// //       />
// //     );
// //   })} */}

                            <div className="containerCarrito">
                              {cart &&
                                cart.map((e) => {
                                  return (
                                    <CardCarrito
                                      key={e.id}
                                      id={e.id}
                                      nombre={e.title}
                                      image={e.image}
                                      tipo={e.tipo}
                                      precio={e.price}
                                    />
                                  );
                                })}
                            </div>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>{totalPrice}</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                      <div className="mt-6">
                        <a
                          href="#"
                          className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                        >
                          Checkout
                        </a>
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          or{' '}
                          <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                            onClick={() => setOpen(false)}
                          >
                            Continue Shopping<span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}


//   return (
//     <div className="container">
//       <div className="containerCarrito">
//         {cart &&
//           cart.map((e) => {
//             return (
//               <CarritoCard
//                 key={e.id}
//                 id={e.id}
//                 title={e.title}
//                 image={e.posterImagen}
//                 category={e.category}
//                 price={e.price}
//               />
//             );
//           })}
//       </div>
//       <div>
//         <div className="containerTotal">
//           <div>
//             <h4>Resumen</h4>
//             <p>
//               <h5>Cantidad: </h5>
//               <h6>{totalItems}</h6>
//             </p>
//             <p>
//               <h5>Total: </h5>
//               <h6>${totalPrice}.00</h6>
//             </p>
//             <button
//               className="submit formEntry4"
//               onClick={() => HandleClickComprar()}
//             >
//               COMPRAR
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

