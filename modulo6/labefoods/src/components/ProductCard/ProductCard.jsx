import React, { useContext, useState } from "react"
import GlobalContext from "../../global/GlobalContext"
import SelectQuantityModal from "../SelectQuantityModal/SelectQuantityModal"
import { AddButton, CardContainer, InfoContainer, ProductDescription, ProductImg, ProductName, ProductPrice, Quantity, RemoveButton, Side } from "./styled"

const ProductCard = (props) => {

  const [showModal, setShowModal] = useState(false)
  const [quantity, setQuantity] = useState(0)
  const [showQuantity, setShowQuantity] = useState(false)

  const { states, setters, requests } = useContext(GlobalContext)
  const { cartProducts, restaurantDetails } = states
  const { setCartProducts } = setters
  const { addToCart } = requests

  // console.log(quantity)
  // console.log(restaurantDetails.id)

  const onChangeQuantity = (event) => {
    setQuantity(event.target.value)
  }

  const onClickAddToCart = () => {
    if (quantity === 0) {
      setQuantity("1")
      addToCart(props.product, "1", restaurantDetails)
      // setCartProducts([...cartProducts, { id: props.id, quantity: "1" }])
      setShowQuantity(true)
      setShowModal(false)
    } else {
      addToCart(props.product, quantity, restaurantDetails)
      // setCartProducts([...cartProducts, { id: props.id, quantity }])
      setShowQuantity(true)
      setShowModal(false)
    }
  }

  const onClickRemoveFromCart = () => {
    const newCartProducts = cartProducts.filter((product) => {
      return product.id !== props.id
    })
    setCartProducts(newCartProducts)
    setShowQuantity(false)
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
        {showQuantity && <Quantity>{quantity}</Quantity>}
        {showQuantity ?
          <RemoveButton
            onClick={onClickRemoveFromCart}
          >
            remover
          </RemoveButton> :
          <AddButton
            onClick={() => setShowModal(true)}
          >
            adicionar
          </AddButton>
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