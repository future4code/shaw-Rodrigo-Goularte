import React, { useContext, useState } from "react"
import { useNavigate } from "react-router"
import Filter from "../../components/Filter/Filter"
import RestaurantCard from "../../components/RestaurantCard/RestaurantCard"
import GlobalContext from "../../global/GlobalContext"
import { useProtectedPage } from "../../hooks/useProtectedPage"
import { goToRestaurantPage, goToSearchPage } from "../../routes/coordinator"
import { PageContainer } from "../../styled/GlobalStyle"
import { RestaurantListContainer, SearchInput } from "./styled"

const HomePage = () => {

  useProtectedPage()
  const navigate = useNavigate()

  const [category, setCategory] = useState("Todos")

  const {states} = useContext(GlobalContext)
  const {restaurants} = states

  // console.log(restaurants)
  // console.log(category)

  const handleChangeCategory = (event, newValue) => {
    setCategory(newValue)
  }

  return(
    <PageContainer>
      <header>FutureEats</header>

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

    </PageContainer>
  )
}

export default HomePage