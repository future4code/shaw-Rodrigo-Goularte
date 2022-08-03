import React, { useContext } from "react"
import { useNavigate } from "react-router"
import RestaurantCard from "../../components/RestaurantCard/RestaurantCard"
import GlobalContext from "../../global/GlobalContext"
import { useProtectedPage } from "../../hooks/useProtectedPage"
import { goToRestaurantPage } from "../../routes/coordinator"
import { PageContainer } from "../../styled/GlobalStyle"
import { RestaurantListContainer, SearchInput } from "./styled"

const HomePage = () => {

  useProtectedPage()

  const navigate = useNavigate()

  // let restaurants = useRequestData([], `${BASE_URL}/restaurants`)

  const {states} = useContext(GlobalContext)
  const {restaurants} = states

  console.log(restaurants)

  const restaurantsList = restaurants.map((restaurant) => {

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

  return(
    <PageContainer>
      <header>FutureEats</header>

      <SearchInput type="text" placeholder="Restaurante" />

      <RestaurantListContainer>
        {restaurantsList}
      </RestaurantListContainer>

    </PageContainer>
  )
}

export default HomePage