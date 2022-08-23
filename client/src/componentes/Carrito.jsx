/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useDispatch, useSelector } from "react-redux"
// import { XIcon } from '@heroicons/react/outline'
import { toggleCart } from '../store/actions/index.js'

const products = [
  {
    "id": "85b6add7-7b51-469e-a052-e6c7dd0aae25",
    "title": "Samsung Galaxy S22 Ultra",
    "rating": 4.6,
    "detail": "Conocé el Galaxy S22 Ultra, con el poder del Note. El marco pulido, delgado y audaz, rodea la forma extruida para lograr una simetria elegamte. Y la cámara lineal, acentuada por anillos de lentes espejados, parece flotar en su lugar.",
    "marca": "Samsung",
    "modelo": "S22 Ultra",
    "so": "Android",
    "cpu": "2.99GHz, 2.4GHz, 1.7GHz",
    "ram": "12GB",
    "color": "Green, Black, White, Burgundy",
    "pantalla": "8.9",
    "image": "https://http2.mlstatic.com/D_NQ_NP_668050-MLA49303776893_032022-O.webp",
    "stock": 4,
    "disable": false,
    "price": 2449,
    "conectividad": "USB Type-C, USB 3.2 Gen 1",
    "category": "smartphones"
  },
  {
    "id": "fc9d7835-16e5-47f6-b098-3d1bc626da00",
    "title": "Samsung Galaxy S22",
    "rating": 4.4,
    "detail": "Es un kit de nivel profesional que cabe en una mano. La cámara posterior triple y la cámara de selfie ofrecen hardware y software de cámara innovadores para que puedas capturar fácilmente una galería llena de contenido digno de compartir.",
    "marca": "Samsung",
    "modelo": "S22",
    "so": "Android",
    "cpu": "Octa-Core de 2.99GHz",
    "ram": "8GB",
    "color": "Green",
    "pantalla": "6.1",
    "image": "https://http2.mlstatic.com/D_NQ_NP_686082-MLA49387650727_032022-O.webp",
    "stock": 3,
    "disable": false,
    "price": 1593,
    "conectividad": "USB Type-C, USB 3.2 Gen 1",
    "category": "smartphones"
  }
]

export default function Example() {
  const dispatch = useDispatch()
  const showCart = useSelector(state => state.showCart)
  const [open, setOpen] = useState(true)

  useEffect(() => {

    setOpen(() => {
      return !open
    })

  }, [showCart])


  return (
    <Transition.Root show={ open } as={ Fragment }>
      <Dialog as="div" className="relative z-10" onClose={ setOpen }>
        <Transition.Child
          as={ Fragment }
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
                as={ Fragment }
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
                            onClick={ () => setOpen(false) }
                          >
                            <span className="sr-only">Close panel</span>
                            {/* <XIcon className="h-6 w-6" aria-hidden="true" /> */ }
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          <ul role="list" className="-my-6 divide-y divide-gray-200">
                            { products.map((product) => (
                              <li key={ product.id } className="flex py-6">
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <img
                                    src={ product.imageSrc }
                                    alt={ product.imageAlt }
                                    className="h-full w-full object-cover object-center"
                                  />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3>
                                        <a href={ product.href }> { product.name } </a>
                                      </h3>
                                      <p className="ml-4">{ product.price }</p>
                                    </div>
                                    <p className="mt-1 text-sm text-gray-500">{ product.color }</p>
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    <p className="text-gray-500">Qty { product.quantity }</p>

                                    <div className="flex">
                                      <button
                                        type="button"
                                        className="font-medium text-indigo-600 hover:text-indigo-500"
                                      >
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            )) }
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>$262.00</p>
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
                          or{ ' ' }
                          <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                            onClick={ () => setOpen(false) }
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
