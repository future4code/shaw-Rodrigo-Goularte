import React from "react"
import { OrderCardContainer, OrderDate, RestaurantName } from "./styled"

const OrderCard = () => {

  return(
    <OrderCardContainer>
      <RestaurantName>Bullguer Vila Madalena</RestaurantName>
      <OrderDate>23 outubro 2019</OrderDate>
      <h4>SUBTOTAL R$67,00</h4>
    </OrderCardContainer>
  )
}

export default OrderCard