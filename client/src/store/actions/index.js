import axios from "axios";

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
