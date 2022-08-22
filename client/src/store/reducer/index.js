import {ASCENDENTE,DESCENDENTE,MAYOR,MENOR} from "../../Constants";

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
        [...state.articles]
        sortedArr=sortedArr.sort((a,b)=>{
          if(a.title<b.title){
            return(action.payload===ASCENDENTE?-1:1)
          }
          if(a.title>b.title){
            return(action.payload===ASCENDENTE?1:-1)
          }
        })
      return {
        ...state,
        articles: sortedArr,
      };

      case "ORDER_BY_PRICE":
        let sortedPriceArr =
        [...state.articles]
        sortedPriceArr=sortedPriceArr.sort((a,b)=>{
          if(a.price<b.price){
            return(action.payload===MAYOR?-1:1)
          }
          if(a.price>b.price){
            return(action.payload===MAYOR?1:-1)
          }
        })
        return {
          ...state,
          articles: sortedPriceArr,
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
