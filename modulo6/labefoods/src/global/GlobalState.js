import axios from "axios"
import React, { useEffect, useState } from "react"
import { BASE_URL } from "../constants/url"
import GlobalContext from "./GlobalContext"

const GlobalState = (props) => {

  const [restaurants, setRestaurants] = useState([])
  const [restaurantDetails, setRestaurantDetails] = useState([])
  const [products, setProducts] = useState([])

  const header = { headers: { auth: window.localStorage.getItem("token") } }


  const getRestaurants = async () => {
    await axios
      .get(`${BASE_URL}/restaurants`, header)
      .then(res => {
        setRestaurants(res.data.restaurants)
      })
      .catch(error => console.log(error))
  }

  const getRestaurantDetails = async (id) => {
    await axios
      .get(`${BASE_URL}/restaurants/${id}`, header)
      .then(res => {
        setRestaurantDetails(res.data.restaurant)
        setProducts(res.data.restaurant.products)
      })
      .catch(error => console.log(error))
  }

  useEffect(() => {
    getRestaurants()
  }, [])

  const states = {restaurants, restaurantDetails, products}
  const setters = {setRestaurants, setRestaurantDetails, setProducts}
  const requests = {getRestaurants, getRestaurantDetails}

  return(
    <GlobalContext.Provider value={{states, setters, requests}}>
      {props.children}
    </GlobalContext.Provider>
  )
}

export default GlobalState