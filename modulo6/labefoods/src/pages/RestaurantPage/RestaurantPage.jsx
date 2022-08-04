import React, { useContext, useEffect } from "react"
// import { useNavigate } from "react-router"
import { useParams } from 'react-router-dom'
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
      <div>
        <RestaurantImg url={restaurantDetails.logoUrl}/>
        <div>
          <h4>{restaurantDetails.name}</h4>
          <p>{restaurantDetails.category}</p>
          <p>{restaurantDetails.deliveryTime}</p>
          <p>{restaurantDetails.shipping}</p>
          <p>{restaurantDetails.address}</p>
        </div>
      </div>
    </PageContainer>
  )
}

export default RestaurantPage