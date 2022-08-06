import React, { useContext, useState } from "react"
import GlobalContext from "../../global/GlobalContext"
import SelectQuantityModal from "../SelectQuantityModal/SelectQuantityModal"
import { Add, AddButton, AddToCartButton, CardContainer, InfoContainer, ProductDescription, ProductImg, ProductName, ProductPrice, Quantity, RemoveButton, Side } from "./styled"

const ProductCard = (props) => {

  const [showModal, setShowModal] = useState(false)
  const [quantity, setQuantity] = useState(0)

  const { states, setters } = useContext(GlobalContext)
  const { cartProducts } = states
  const { setCartProducts } = setters

  console.log(quantity)
  console.log(cartProducts)

  const onChangeQuantity = (event) => {
    setQuantity(event.target.value)
  }

  const onClickAddToCart = () => {
    if (quantity === 0) {
      setCartProducts([...cartProducts, { id: props.id, quantity: "1" }])
      setQuantity("1")
      setShowModal(false)
    } else {
      setCartProducts([...cartProducts, { id: props.id, quantity }])
      setShowModal(false)
    }
  }

  const onClickRemoveFromCart = () => {
    const newCartProducts = cartProducts.filter((product) => {
      return product.id !== props.id
    })
    setCartProducts(newCartProducts)
    setQuantity(0)
  }

  return (
    <CardContainer key={props.id}>
      <ProductImg url={props.photoUrl} />
      <InfoContainer>
        <ProductName>{props.name}</ProductName>
        <ProductDescription>{props.description}</ProductDescription>
        <ProductPrice>{`${props.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`}</ProductPrice>
      </InfoContainer>
      <Side>
        {quantity !== 0 && <Quantity>{quantity}</Quantity>}
        {quantity === 0 ?
          <AddButton
            onClick={() => setShowModal(true)}
          >
            adicionar
          </AddButton> :
          <RemoveButton
            onClick={onClickRemoveFromCart}
          >
            remover
          </RemoveButton>
        }
      </Side>
      <SelectQuantityModal
        open={showModal}
        setOpen={setShowModal}
        onChangeQuantity={onChangeQuantity}
        onClickAddToCart={onClickAddToCart}
      />
    </CardContainer>
  )
}

export default ProductCard