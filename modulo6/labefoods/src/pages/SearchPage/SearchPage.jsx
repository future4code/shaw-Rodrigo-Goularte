import React, { useContext, useEffect, useState } from "react"
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

  const { states } = useContext(GlobalContext)
  const { restaurants } = states

  const [search, setSearch] = useState("")
  const [isSearchEmpty, setIsSearchEmpty] = useState(true)

  const searchResult = search &&
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
      })

  const checkSearch = () => {
    search ? setIsSearchEmpty(false) : setIsSearchEmpty(true)
  }

  useEffect(() => {
    checkSearch()
  }, [search])

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
        {searchResult.length > 0 && searchResult}
        {(searchResult.length === 0 && isSearchEmpty === false) && <p>{"Não encontramos :("}</p>}
        {isSearchEmpty && <p>{"Busque por nome de restaurante"}</p>}
      </RestaurantListContainer>

    </PageContainer>
  )
}

export default SearchPage