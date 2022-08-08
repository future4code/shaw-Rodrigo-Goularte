import axios from "axios"
import React, { useEffect, useState } from "react"
import { BASE_URL } from "../constants/url"
import GlobalContext from "./GlobalContext"

const GlobalState = (props) => {

  const [restaurants, setRestaurants] = useState([])
  const [restaurantInfo, setRestaurantInfo] = useState([])
  const [restaurantDetails, setRestaurantDetails] = useState([])
  const [products, setProducts] = useState([])
  const [profile, setProfile] = useState({})
  const [cartProducts, setCartProducts] = useState([])
  const [orderInfo, setOrderInfo] = useState([])

  // console.log(cartProducts)
  // console.log(restaurantInfo)

  const header = { headers: { auth: window.localStorage.getItem("token") } }
  // console.log(header.headers.auth)


  const getRestaurants = async () => {
    await axios
      .get(`${BASE_URL}/restaurants`, header)
      .then((res) => {
        setRestaurants(res.data.restaurants)
      })
      .catch((error) => console.log(error.response))
  }

  const getRestaurantDetails = async (id) => {
    await axios
      .get(`${BASE_URL}/restaurants/${id}`, header)
      .then((res) => {
        setRestaurantDetails(res.data.restaurant)
        setProducts(res.data.restaurant.products)
      })
      .catch((error) => console.log(error.response))
  }

  const getProfile = async () => {
    await axios
      .get(`${BASE_URL}/profile`, header)
      .then((res) => {
        setProfile(res.data.user)
      })
      .catch((error) => console.log(error.response))
  }

  const addToCart = (product, quantity, newRestaurant, newPrice) => {
    if(newRestaurant.id === restaurantInfo.id){
      setCartProducts([...cartProducts, { ...product, quantity, price: newPrice }])
      setOrderInfo([...orderInfo, {id: product.id, quantity}])
    } else {
      setCartProducts([{ ...product, quantity, price: newPrice }])
      setOrderInfo([{id: product.id, quantity}])
      setRestaurantInfo(newRestaurant)
    }
  }

  useEffect(() => {
    getRestaurants()
    getProfile()
  }, [])

  const states = {restaurants, restaurantInfo, restaurantDetails, products, profile,cartProducts, orderInfo}
  const setters = {setRestaurants, setRestaurantDetails, setProducts, setProfile, setCartProducts, setOrderInfo}
  const requests = {getRestaurants, getRestaurantDetails, getProfile, addToCart}

  return(
    <GlobalContext.Provider value={{states, setters, requests}}>
      {props.children}
    </GlobalContext.Provider>
  )
}

export default GlobalState