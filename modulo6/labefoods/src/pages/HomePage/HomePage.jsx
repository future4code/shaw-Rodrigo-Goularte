import React, { useContext, useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router"
import Filter from "../../components/Filter/Filter"
import Header from "../../components/Header/Header"
import Menu from "../../components/Menu/Menu"
import OrderInProgressCard from "../../components/OrderInProgressCard/OrderInProgressCard"
import RestaurantCard from "../../components/RestaurantCard/RestaurantCard"
import { BASE_URL } from "../../constants/url"
import GlobalContext from "../../global/GlobalContext"
import { useProtectedPage } from "../../hooks/useProtectedPage"
import { goToRestaurantPage, goToSearchPage } from "../../routes/coordinator"
import { PageContainer } from "../../styled/GlobalStyle"
import { RestaurantListContainer, SearchInput } from "./styled"

const HomePage = () => {

  useProtectedPage()
  const navigate = useNavigate()

  const [category, setCategory] = useState("Todos")
  const [activeOrder, setActiveOrder] = useState({})

  const {states, requests} = useContext(GlobalContext)
  const {restaurants} = states
  const {getRestaurants} = requests

  // console.log(restaurants)
  console.log(activeOrder)

  const getActiveOrder = async () => {
    const header = { headers: { auth: window.localStorage.getItem("token") } }

    await axios
      .get(`${BASE_URL}/active-order`, header)
      .then((res) => {
        setActiveOrder(res.data.order)
      })
      .catch((error) => console.log(error.response))
  }

  const handleChangeCategory = (event, newValue) => {
    setCategory(newValue)
  }

  useEffect(() => {
    getRestaurants()
    getActiveOrder()
  }, [])

  return(
    <PageContainer>
      <Header title="FutureEats" showArrow={false}/>
      <SearchInput
        type="text"
        placeholder="Restaurante"
        onClick={() => goToSearchPage(navigate)}
      />

      <Filter
        category={category}
        handleChangeCategory={handleChangeCategory}
      />

      <RestaurantListContainer>
        { 
          restaurants
            .filter((restaurant) => {
              if(category !== "Todos") {
                return restaurant.category === category
              } else { return restaurant }
            })
            .map((restaurant) => {
              return(
                <RestaurantCard
                  key={restaurant.id}
                  logoUrl={restaurant.logoUrl}
                  name={restaurant.name}
                  deliveryTime={restaurant.deliveryTime}
                  shipping={restaurant.shipping}
                  onClick={() => goToRestaurantPage(navigate, restaurant.id)}
                />
              )
            })
        }
      </RestaurantListContainer>
      
      {activeOrder &&
        <OrderInProgressCard
        totalPrice={activeOrder.totalPrice}
        restaurantName={activeOrder.restaurantName}
      />
      }

      <Menu page={"home"}/>
    </PageContainer>
  )
}

export default HomePage