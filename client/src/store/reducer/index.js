import { ASCENDENTE, DESCENDENTE, MAYOR, MENOR, TOOGLE_CART } from "../../Constants";
import {toast} from "react-toastify"

function a() {
  return toast.error("Ya esta en el carrito", {
    position: "bottom-left",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
}
function b() {
  return toast.success("Se añadio al carrito", {
    position: "bottom-left",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
}

let cartStorage;
try {
  let local = localStorage.getItem("cart") || [];
  if (local !== "undefined") {
    cartStorage = JSON.parse(local);
  }
} catch (error) {
  // console.log({error});
}

if (!cartStorage) {
  cartStorage = [];
}

// let wishlistStorage;
// try {
//   let local2 = localStorage.getItem("wishlist") || [];
//   if (local2 !== "undefined") {
//     // console.log(local2);
//     wishlistStorage = JSON.parse(local2);
//   }
// } catch (error) {
//   // console.log({error});
// }

// if (!wishlistStorage) {
//   wishlistStorage = [];
// }

const initialState = {
  articles: [],
  filteredArticle: [],
  categorys: [],
  smartphones: [],
  showCart: false,
  isLoading: true,
  cart: cartStorage,
  // wishlist: wishlistStorage,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case TOOGLE_CART:
      return {
        ...state,
        showCart: !state.showCart,
      }


    case "GET_ARTICLES":
      return {
        ...state,
        articles: action.payload,
        filteredArticle: action.payload,
        isLoading: false
      }
    case "ORDER_BY_ARTICLES":
      let sortedArr =
        [...state.articles]
      sortedArr = sortedArr.sort((a, b) => {
        if (a.title < b.title) {
          return (action.payload === ASCENDENTE ? -1 : 1)
        }
        if (a.title > b.title) {
          return (action.payload === ASCENDENTE ? 1 : -1)
        }
      })
      return {
        ...state,
        articles: sortedArr,
      };

    case "ORDER_BY_PRICE":
      let sortedPriceArr =
        [...state.articles]
      sortedPriceArr = sortedPriceArr.sort((a, b) => {
        if (a.price < b.price) {
          return (action.payload === MAYOR ? -1 : 1)
        }
        if (a.price > b.price) {
          return (action.payload === MAYOR ? 1 : -1)
        }
      })
      return {
        ...state,
        articles: sortedPriceArr,
      };
    case "GET_NAME":
      return {
        ...state,
        articles: action.payload
      }
    case "GET_SMARTPHONES":
      console.log(action.payload)
      return {
        ...state,
        articles: action.payload
      }
    case "GET_TABLETS":
      return {
        ...state,
        articles: action.payload
      }
    case "GET_NOTEBOOKS":
      return {
        ...state,
        articles: action.payload
      }
    case "GET_ACCESORIES":
      return {
        ...state,
        articles: action.payload
      }
    case "POST_ARTICLE":
      return {
        ...state,
      };
    case "GET_CATEGORY":
      return {
        ...state,
        categorys: action.payload,
      };
    case "LOG_USER":
      return {
        ...state,
      };
    case "RES_USER":
      return {
        ...state,
      };
      case "REMOVE_TO_CART":
        let filter = state.cart.filter((e) => e.id !== action.payload);
        localStorage.setItem("cart", JSON.stringify(filter));
        return {
          ...state,
          cart: filter,
        };
        case "ADD_TO_CART":
          const item =  state.articles.find((e) => e.id === action.payload);
          let cartStorage = localStorage.getItem("cart");
    
          if (cartStorage === "undefined") {
            b();
            localStorage.setItem("cart", JSON.stringify([item]));
          } else {
            let data = JSON.parse(cartStorage); 
    
            data.find((dato) => dato.id === item.id) ? a() : b();
            if (!data.find((dato) => dato.id === item.id)) {
              data.push(item);
              localStorage.setItem("cart", JSON.stringify(data));
            }
          }
          let datoCart = JSON.parse(localStorage.getItem("cart"));
    
          return {
            ...state,
            cart: datoCart,
          };
    default:
      return {
        ...state,
      };
  }
}
