const initialState = {
  articles: [],
  categorys: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "ORDER_BY_ARTICLES":
      let sortedArr =
        action.payload === "AZ"
          ? state.articles.sort(function (a, b) {
              if (a.name > b.name) {
                return 1;
              }
              if (b.name > a.name) {
                return -1;
              }
              return 0;
            })
          : state.articles.sort(function (a, b) {
              if (a.name > b.name) {
                return -1;
              }
              if (b.name > a.name) {
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
          action.payload === "AZ"
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
    default:
      return {
        ...state,
      };
  }
}
