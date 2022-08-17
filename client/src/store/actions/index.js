import axios from "axios";

export function getArticles(){
  try {
  return function(dispatch) {
      axios.get("http://localhost:3001/articles/")
      .then ((articles) => {
          dispatch({
              type: "GET_ARTICLES",
              payload: articles.data
          })
      })
    }
  } catch (error) {
    console.log(error);
  }
}

export function orderByAZ(payload) {
  try {
    return {
      type: "ORDER_BY_ARTICLES",
      payload,
    };
  } catch (error) {
    console.log(error);
  }
}
export function orderByPrice(payload) {
  try {
    return {
      type: "ORDER_BY_PRICE",
      payload,
    };
  } catch (error) {
    console.log(error);
  }
}
