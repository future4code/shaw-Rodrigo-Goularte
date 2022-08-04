import React from "react"
import { CardContainer, InfoContainer, ProductDescription, ProductImg, ProductName, ProductPrice } from "./styled"

const ProductCard = (props) => {

  return (
    <CardContainer key={props.id}>
      <ProductImg url={props.photoUrl}/>
      <InfoContainer>
        <ProductName>{props.name}</ProductName>
        <ProductDescription>{props.description}</ProductDescription>
        <ProductPrice>{`${props.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`}</ProductPrice>
      </InfoContainer>
    </CardContainer>
  )
}

export default ProductCard