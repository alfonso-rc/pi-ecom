import { ASCENDENTE, DESCENDENTE, MAYOR, MENOR, TOOGLE_CART } from "../../Constants";

const initialState = {
  articles: [],
  filteredArticle: [],
  categorys: [],
  smartphones: [],
  showCart: false,
  isLoading: true,
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
    default:
      return {
        ...state,
      };
  }
}
