import { useSelector, useDispatch } from "react-redux"
 import { useEffect, useState } from "react"
 import { Link } from "react-router-dom"
import {orderByAZ, orderByPrice, getArticles} from '../store/actions'
export default function Home() {
    const article = useSelector((state) => state.articles)
    let dispatch = useDispatch()
    const [loading,setLoading]=useState(false)
    const [order,setOrder]=useState('')
    useEffect(() => {
        dispatch(getArticles())
        setLoading(true);
    }, [dispatch])

    function handleSortAZ(e){
        e.preventDefault()
        dispatch(orderByAZ(e.target.value))
        // setCurrentPage(1)
        setOrder(e.target.value)
      }
      function handleSortPrice(e){
        e.preventDefault()
        dispatch(orderByPrice(e.target.value))
        // setCurrentPage(1)
        setOrder(e.target.value)
      }
      return (
        <div>
            hola
        </div>
      )
}