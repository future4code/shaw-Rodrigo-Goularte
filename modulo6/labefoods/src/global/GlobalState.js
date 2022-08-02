import axios from "axios"
import React, { useEffect, useState } from "react"
import { BASE_URL } from "../constants/BASE_URL"
import GlobalContext from "./GlobalContext"

const GlobalState = (props) => {

  // const [restaurants, setRestaurants] = useState([])
  const [restaurants, setRestaurants] = useState([])


  const login = () => {
    axios
      .post(`${BASE_URL}/login`)
  }

  const getRestaurants = () => {
    axios
      .get(`${BASE_URL}/restaurants`)
      .then(res => console.log(res.data))
      .catch(error => console.log(error))
  }

  useEffect(() => {

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