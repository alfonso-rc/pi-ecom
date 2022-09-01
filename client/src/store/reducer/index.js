import { ASCENDENTE, DESCENDENTE, MAYOR, MENOR, TOOGLE_CART, MEJOR, PEOR } from "../../Constants";
import { toast } from "react-toastify"

function toastError() {
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
function toastSucces() {
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

let wishlistStorage;
try {
  let local2 = localStorage.getItem("wishlist") || [];
  if (local2 !== "undefined") {
    // console.log(local2);
    wishlistStorage = JSON.parse(local2);
  }
} catch (error) {
  // console.log({error});
}

if (!wishlistStorage) {
  wishlistStorage = [];
}

const initialState = {
  articles: [],
  brand: [],
  users: [],
  filteredArticle: [],
  categorys: [],
  comment: [],
  smartphones: [],
  showCart: false,
  isLoading: true,
  cart: cartStorage,
  rating: [],
  brand: [],
  wishlist: wishlistStorage,
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
        brand: action.payload,
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
    case "ORDER_BY_BRAND": ///////////////////////////////////////////
      /* let sortBrand =[...state.articles]
      console.log (sortBrand)
      sortBrand = sortBrand.sort((a, b) => {
      if (a.title < b.title) {
        return (action.payload === ASCENDENTE ? -1 : 1)
      }
      if (a.title > b.title) {
        return (action.payload === ASCENDENTE ? 1 : -1)
      }
    })
    return {
      ...state,
      articles: sortBrand,
    } */
      break

    case 'ORDER_BY_BRAND2'://///
      const articleBrand = state.brand
      const filterTemp = action.payload === 'All'
        ? articleBrand
        : articleBrand.filter(e => e.marca.includes(action.payload))
      console.log(filterTemp)
      return {
        ...state,
        articles: action.payload === 'All' ? state.brand : filterTemp,
      };

    case "ORDER_BY_RATING":
      let sortedRating =
        [...state.articles]
      sortedRating = sortedRating.sort((a, b) => {
        if (a.rating < b.rating) {
          return (action.payload === MEJOR ? -1 : 1)
        }
        if (a.rating > b.rating) {
          return (action.payload === MEJOR ? 1 : -1)
        }
      })
      return {
        ...state,
        articles: sortedRating,
      };

    case "GET_NAME":
      return {
        ...state,
        articles: action.payload
      }
    case 'GET_BRAND'://aqui puede ir sin comillas
      return {
        ...state,
        brand: action.payload,
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
    case "DELETE_ARTICLE":
      return {
        ...state,
      };
    case "DELETE_ARTICLE_LOGIC":
      return {
        ...state,
      };
    case "GET_CATEGORY":
      return {
        ...state,
        categorys: action.payload,
      };
    case "POST_COMMENT":
      return {
        ...state,
        comment: action.payload,
      };
    case "POST_RATING":
      return {
        ...state,
        rating: action.payload,
      };
    case "LOG_USER":
      return {
        ...state,
        user: action.payload
      };
    case "LOGOUT_USER":
      return {
        ...state,
        user: action.payload
      };
    case "RES_USER":
      return {
        ...state,
        user: action.payload
      };
    case "GET_USER":
      return {
        ...state,
        users: action.payload,
      };
    case "ORDER_FAVORITE":
      return {
        ...state,
        wishlist: JSON.parse(localStorage.getItem("favorite"))
      }

    case "REMOVE_TO_CART":
      let filter = state.cart.filter((e) => e.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(filter));
      return {
        ...state,
        cart: filter,
      };

    case "ADD_TO_FAVORITE":
      console.log("ITEM PARA AÑADIR", action.payload)
      const itemToAdds = state.articles.find((e) => e.id === action.payload.id); // Verificamos que el id del artículo a añadir se encuentre en la lista de todos los artículos
      // if (itemToAdd) console.log("SE ENCUENTRA EL ID")
      let favoriteInLocalStorage = localStorage.getItem("wishlist"); // Traemos los items que hay en el local storage
      // console.log("ITEMS EN LOCAL STORAGE", cartInLocalStorage)

      if (!favoriteInLocalStorage) {
        // console.log("NO HAY NADA EN LOCAL STORAGE")
        localStorage.setItem("wishlist", JSON.stringify([itemToAdds]));
        console.log("ITEMS EN LOCAL STORAGE", localStorage.getItem("wishlist"))
      } else {
        let dataFromLocalStorage = JSON.parse(favoriteInLocalStorage);

        // Preguntamos si ya está en el localstorage el item que queremos añadir, y mostramos un mensaje adecuado
        const isInLocalStorage = dataFromLocalStorage.find((el) => el.id === itemToAdds.id)
        if (!isInLocalStorage) {
          dataFromLocalStorage.push(itemToAdds)
          localStorage.setItem("wishlist", JSON.stringify(dataFromLocalStorage))
          toastSucces()
        } else {
          toastError()
        }
      }
      return {
        ...state,
        wishlist: JSON.parse(localStorage.getItem("favorite")),
      };
      case "REMOVE_TO_FAVORITE":
      let filters = state.wishlist.filter((e) => e.id !== action.payload);
      localStorage.setItem("favorite", JSON.stringify(filters));
      return {
        ...state,
        cart: filters,
      };

    case "ADD_TO_CART":
      console.log("ITEM PARA AÑADIR", action.payload)
      const itemToAdd = state.articles.find((e) => e.id === action.payload.id); // Verificamos que el id del artículo a añadir se encuentre en la lista de todos los artículos
      // if (itemToAdd) console.log("SE ENCUENTRA EL ID")
      let cartInLocalStorage = localStorage.getItem("cart"); // Traemos los items que hay en el local storage
      // console.log("ITEMS EN LOCAL STORAGE", cartInLocalStorage)

      if (!cartInLocalStorage) {
        // console.log("NO HAY NADA EN LOCAL STORAGE")
        localStorage.setItem("cart", JSON.stringify([itemToAdd]));
        console.log("ITEMS EN LOCAL STORAGE", localStorage.getItem("cart"))
      } else {
        let dataFromLocalStorage = JSON.parse(cartInLocalStorage);

        // Preguntamos si ya está en el localstorage el item que queremos añadir, y mostramos un mensaje adecuado
        const isInLocalStorage = dataFromLocalStorage.find((el) => el.id === itemToAdd.id)
        if (!isInLocalStorage) {
          dataFromLocalStorage.push(itemToAdd)
          localStorage.setItem("cart", JSON.stringify(dataFromLocalStorage))
          toastSucces()
        } else {
          toastError()
        }
      }
      return {
        ...state,
        cart: JSON.parse(localStorage.getItem("cart")),
      };
    default:
      return {
        ...state,
      };
  }
}





