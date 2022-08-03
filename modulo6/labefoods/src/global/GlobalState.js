import axios from "axios"
import React, { useEffect, useState } from "react"
import { BASE_URL } from "../constants/url"
import GlobalContext from "./GlobalContext"

const GlobalState = (props) => {

  // const [restaurants, setRestaurants] = useState([])
  const [restaurants, setRestaurants] = useState([])

  const header = { headers: { auth: window.localStorage.getItem("token") } }


  const getRestaurants = async () => {
    await axios
      .get(`${BASE_URL}/restaurants`, header)
      .then(res => setRestaurants(res.data.restaurants))
      .catch(error => console.log(error))
  }

  useEffect(() => {
    getRestaurants()
  }, [])

  const states = {restaurants}
  const setters = {setRestaurants}
  const requests = {getRestaurants}

  return(
    <GlobalContext.Provider value={{states, setters, requests}}>
      {props.children}
    </GlobalContext.Provider>
  )
}

export default GlobalState