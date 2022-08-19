const initialState = {
  articles: [],
  filteredArticle: [],
  categorys: [],
  smartphones: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
   case "GET_ARTICLES":
    return {
      ...state,
      articles: action.payload,
      filteredArticle: action.payload,
      }
   case "ORDER_BY_ARTICLES":
      let sortedArr =
        action.payload === "AZ"
          ? state.articles.sort(function (a, b) {
              if (a.title > b.title) {
                return 1;
              }
              if (b.title > a.title) {
                return -1;
              }
              return 0;
            })
          : state.articles.sort(function (a, b) {
              if (a.title > b.title) {
                return -1;
              }
              if (b.title > a.title) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        articles: sortedArr,
      };

      case "ORDER_BY_PRICE":
        let sortedPrice =
          action.payload === "men"
            ? state.articles.sort(function (a, b) {
                if (a.price > b.price) {
                  return 1;
                }
                if (b.price > a.price) {
                  return -1;
                }
                return 0;
              })
            : state.articles.sort(function (a, b) {
                if (a.price > b.price) {
                  return -1;
                }
                if (b.price > a.price) {
                  return 1;
                }
                return 0;
              });
        return {
          ...state,
          articles: sortedPrice,
        };
        case "GET_NAME":
          return{
            ...state,
            articles: action.payload
          }
          case "GET_SMARTPHONES":
            console.log(action.payload)
          return{
            ...state,
            articles: action.payload
          }
          case "GET_TABLETS":
          return{
            ...state,
            articles: action.payload
          }
          case "GET_NOTEBOOKS":
          return{
            ...state,
            articles: action.payload
          }
          case "GET_ACCESORIES":
            return{
              ...state,
              articles: action.payload
            }
        default:
          return {
            ...state,
          };
        }
}
