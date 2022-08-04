import React, { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import RestaurantCard from "../../components/RestaurantCard/RestaurantCard"
import GlobalContext from "../../global/GlobalContext"
import { useProtectedPage } from "../../hooks/useProtectedPage"
import { goToRestaurantPage } from "../../routes/coordinator"
import { PageContainer } from "../../styled/GlobalStyle"
import { RestaurantListContainer, SearchInput } from "./styled"

const SearchPage = () => {

  useProtectedPage()
  const navigate = useNavigate()

  const [search, setSearch] = useState("")

  const {states} = useContext(GlobalContext)
  const {restaurants} = states

  console.log(search)

  return (
    <PageContainer>
      <header>Busca</header>

      <SearchInput
        type="text"
        value={search}
        placeholder="Restaurante"
        onChange={(event) => setSearch(event.target.value)}
      />

      <RestaurantListContainer>
        {
          search ?
          restaurants
            .filter((restaurant) => {
              if (search !== "") {
                return restaurant.name.toLowerCase().includes(search.toLowerCase())
              }
            })
            .map((restaurant) => {
              return (
                <RestaurantCard
                  key={restaurant.id}
                  logoUrl={restaurant.logoUrl}
                  name={restaurant.name}
                  deliveryTime={restaurant.deliveryTime}
                  shipping={restaurant.shipping}
                  onClick={() => goToRestaurantPage(navigate, restaurant.id)}
                />
              )
            }) :
          <p>{"Busque por nome de restaurante"}</p>
        }
      </RestaurantListContainer>

    </PageContainer>
  )
}

export default SearchPage