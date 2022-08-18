const initialState = {
  articles: [],
  filteredArticle: [],
  categorys: [],
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
          action.payload === "may"
            ? state.articles.sort(function (a, b) {
                if (a.Price > b.Price) {
                  return 1;
                }
                if (b.Price > a.Price) {
                  return -1;
                }
                return 0;
              })
            : state.articles.sort(function (a, b) {
                if (a.Price > b.Price) {
                  return -1;
                }
                if (b.Price > a.Price) {
                  return 1;
                }
                return 0;
              });
        return {
          ...state,
          articles: sortedPrice,
        };
    default:
      return {
        ...state,
      };
  }
}
