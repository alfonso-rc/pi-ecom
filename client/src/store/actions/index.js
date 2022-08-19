import axios from "axios";

export function getArticles(){
  try {
  return function(dispatch) {
      axios.get("http://localhost:3001/article")
      .then ((articles) => {
          dispatch({
              type: "GET_ARTICLES",
              payload: articles.data
          })
          console.log("hola2",articles)
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

export function getName(title) {
  return async function (dispatch) {
    var json = await axios.get(`http://localhost:3001/article?title=${title}`);
    return dispatch({
      type: "GET_NAME",
      payload: json.data,
    });
  };
}