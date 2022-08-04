import React, { useContext, useEffect } from "react"
// import { useNavigate } from "react-router"
import { useParams } from 'react-router-dom'
import RestaurantDetailCard from "../../components/RestaurantDetailCard/RestaurantDetailCard"
import GlobalContext from "../../global/GlobalContext"
import { useProtectedPage } from "../../hooks/useProtectedPage"
import { PageContainer } from "../../styled/GlobalStyle"
import { RestaurantImg } from "./styled"


const RestaurantPage = () => {

  // const navigate = useNavigate()
  useProtectedPage()
  const pathParams = useParams()

  const {states, requests} = useContext(GlobalContext)
  const {restaurantDetails, products} = states
  const {getRestaurantDetails} = requests

  console.log(restaurantDetails, products)

  useEffect(() => {
    getRestaurantDetails(pathParams.id)
  }, [])

  return(
    <PageContainer>
      <header>Restaurante</header>
      
      <RestaurantDetailCard
          logoUrl={restaurantDetails.logoUrl}
          name={restaurantDetails.name}
          category={restaurantDetails.category}
          deliveryTime={restaurantDetails.deliveryTime}
          shipping={restaurantDetails.shipping}
          address={restaurantDetails.address}
      />
    </PageContainer>
  )
}

export default RestaurantPage