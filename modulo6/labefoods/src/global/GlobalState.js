import axios from "axios"
import React, { useEffect, useState } from "react"
import { BASE_URL } from "../constants/url"
import GlobalContext from "./GlobalContext"

const GlobalState = (props) => {

  const [restaurants, setRestaurants] = useState([])
  const [restaurantDetails, setRestaurantDetails] = useState([])
  const [products, setProducts] = useState([])
  const [profile, setProfile] = useState({})
  const [cartProducts, setCartProducts] = useState([])
  const [order, setOrder] = useState({})

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

  const getProfile = async () => {
    await axios
      .get(`${BASE_URL}/profile`, header)
      .then(res => {
        setProfile(res.data.user)
      })
      .catch(error => console.log(error))
  }

  const placeOrder = async (restaurantId) => {
    await axios
      .post(`${BASE_URL}/restaurants/${restaurantId}/order`)
      .then(res => {
        console.log(res.data)
      })
      .catch(error => console.log(error))
  }

  useEffect(() => {
    getRestaurants()
    getProfile()
  }, [])

  const states = {restaurants, restaurantDetails, products, profile,cartProducts, order}
  const setters = {setRestaurants, setRestaurantDetails, setProducts, setProfile, setCartProducts, setOrder}
  const requests = {getRestaurants, getRestaurantDetails, getProfile, placeOrder}

  return(
    <GlobalContext.Provider value={{states, setters, requests}}>
      {props.children}
    </GlobalContext.Provider>
  )
}

export default GlobalState