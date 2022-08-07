import { FormControlLabel, Radio, RadioGroup } from "@mui/material"
import React, { useContext } from "react"
import Header from "../../components/Header/Header"
import Menu from "../../components/Menu/Menu"
import ProductCard from "../../components/ProductCard/ProductCard"
import GlobalContext from "../../global/GlobalContext"
import { AddressInfo, AddressTitle, ButtonContainer, CartPageContainer, ConfirmButton, Line, OrderContainer, PaymentContainer, PriceContainer, Total, TotalContainer } from "./styled"

const CartPage = () => {

  const {states} = useContext(GlobalContext)
  const {profile, cartProducts} = states

  console.log(cartProducts)

  return (
    <CartPageContainer>
      <Header title="Meu carrinho" showArrow={false}/>

      <AddressInfo>
        <AddressTitle>Endereço de entrega</AddressTitle>
        <p>{profile.address}</p>
      </AddressInfo>

      <OrderContainer>
        {
          cartProducts.map((product) => {
            return(
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
          })
        }
      </OrderContainer>

      <TotalContainer>
        <p>SUBTOTAL</p>
        <PriceContainer>
          <p>Frete R$0,00</p>
          <Total>R$00,00</Total>
        </PriceContainer>
      </TotalContainer>

      <PaymentContainer>
        <p>Forma de pagamento</p>
        <Line/>
        <RadioGroup
          // value={}
          // onChange={}
        >
          <FormControlLabel
            value="Dinheiro"
            control={<Radio />}
            label="Dinheiro"
            disabled={true}
          />
          <FormControlLabel
            value="Cartão de Crédito"
            control={<Radio />}
            label="Cartão de Crédito"
            disabled={true}
          />
        </RadioGroup>
      </PaymentContainer>

      <ButtonContainer>
        <ConfirmButton disabled={true}>Confirmar</ConfirmButton>
      </ButtonContainer>

      <Menu page={"cart"}/>
    </CartPageContainer>
  )
}

export default CartPage