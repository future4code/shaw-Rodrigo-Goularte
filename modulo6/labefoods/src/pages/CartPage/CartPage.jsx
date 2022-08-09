import axios from "axios"
import { FormControlLabel, Radio, RadioGroup } from "@mui/material"
import React, { useContext, useEffect, useState } from "react"
import Header from "../../components/Header/Header"
import Menu from "../../components/Menu/Menu"
import ProductCard from "../../components/ProductCard/ProductCard"
import GlobalContext from "../../global/GlobalContext"
import { AddressInfo, AddressTitle, ButtonContainer, CartPageContainer, ConfirmButton, DescriptionContainer, Line, OrderContainer, PaymentContainer, PriceContainer, RestaurantInfoContainer, RestaurantName, Total, TotalContainer } from "./styled"
import { BASE_URL } from "../../constants/url"

const CartPage = () => {

  const [payment, setPayment] = useState("")
  const [fullPrice, setFullPrice] = useState(0)
  const [order, setOrder] = useState({})


  const { states, setters } = useContext(GlobalContext)
  const { profile, cartProducts, restaurantInfo, orderInfo } = states
  const {setCartProducts} = setters

  // console.log(cartProducts)
  // console.log(orderInfo)
  console.log(order)

  const totalPrice = () => {
    let price = 0
    for (const product of cartProducts) {
      price += product.price
    }

    setFullPrice(price + restaurantInfo.shipping)
  }

  const placeOrder = async () => {
    const header = { headers: { auth: window.localStorage.getItem("token") } }
    const body = order

    await axios
      .post(`${BASE_URL}/restaurants/${restaurantInfo.id}/order`, body, header)
      .then((res) => {
        console.log(res.data)
        setCartProducts([])
      })
      .catch(error => console.log(error.response.data))
  }

  const submitOrder = () => {
    setOrder({
      products: orderInfo,
      paymentMethod: payment
    })
    placeOrder()
  }

  useEffect(() => {
    totalPrice()
  }, [cartProducts])

  return (
    <CartPageContainer>
      <Header title="Meu carrinho" showArrow={false} />

      <AddressInfo>
        <AddressTitle>Endereço de entrega</AddressTitle>
        <p>{profile.address}</p>
      </AddressInfo>

      {cartProducts.length > 0 &&
        <RestaurantInfoContainer>
          <RestaurantName>{restaurantInfo.name}</RestaurantName>
          <DescriptionContainer>
            <p>{restaurantInfo.address}</p>
            <p>{`${restaurantInfo.deliveryTime} min`}</p>
          </DescriptionContainer>
        </RestaurantInfoContainer>
      }

      <OrderContainer>
        {cartProducts.length > 0 ?
          cartProducts.map((product) => {
            return (
              <ProductCard
                key={product.id}
                id={product.id}
                product={product}
                quantity={product.quantity}
                photoUrl={product.photoUrl}
                name={product.name}
                description={product.description}
                price={product.price}
              />
            )
          }) :
          <p>Carrinho vazio</p>
        }
      </OrderContainer>

      <TotalContainer>
        <p>SUBTOTAL</p>
        <PriceContainer>
          {cartProducts.length > 0 ? <p>{`Frete R$${restaurantInfo.shipping},00`}</p> : <p>Frete R$0,00</p>}
          {cartProducts.length > 0 ?
            <Total>{`${fullPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`}</Total> :
            <Total>R$00,00</Total>
          }
        </PriceContainer>
      </TotalContainer>

      <PaymentContainer>
        <p>Forma de pagamento</p>
        <Line />
        <RadioGroup>
          <FormControlLabel
            value="money"
            name="money"
            control={<Radio />}
            label="Dinheiro"
            disabled={cartProducts.length > 0 ? false : true}
            onChange={(e) => setPayment(e.target.value)}
          />
          <FormControlLabel
            value="creditcard"
            name="creditcard"
            control={<Radio />}
            label="Cartão de Crédito"
            disabled={cartProducts.length > 0 ? false : true}
            onChange={(e) => setPayment(e.target.value)}
          />
        </RadioGroup>
      </PaymentContainer>

      <ButtonContainer>
        <ConfirmButton
          onClick={submitOrder}
          disabled={cartProducts.length > 0 ? false : true}
        >
          Confirmar
        </ConfirmButton>
      </ButtonContainer>

      <Menu page={"cart"} />
    </CartPageContainer>
  )
}

export default CartPage