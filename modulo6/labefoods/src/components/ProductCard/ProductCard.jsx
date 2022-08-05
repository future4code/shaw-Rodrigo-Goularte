import React, { useState } from "react"
import SelectQuantityModal from "../SelectQuantityModal/SelectQuantityModal"
import { Add, CardContainer, InfoContainer, ProductDescription, ProductImg, ProductName, ProductPrice, Quantity, Side } from "./styled"

const ProductCard = (props) => {

  const [showModal, setShowModal] = useState(false)

  return (
    <CardContainer key={props.id}>
      <ProductImg url={props.photoUrl} />
      <InfoContainer>
        <ProductName>{props.name}</ProductName>
        <ProductDescription>{props.description}</ProductDescription>
        <ProductPrice>{`${props.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`}</ProductPrice>
      </InfoContainer>
      <Side>
        <Quantity>0</Quantity>
        <Add onClick={() => setShowModal(true)}>adicionar</Add>
      </Side>
      <SelectQuantityModal
        open={showModal}
        setOpen={setShowModal}
      />
    </CardContainer>
  )
}

export default ProductCard