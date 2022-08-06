import { FormControlLabel, Radio, RadioGroup } from "@mui/material"
import React, { useContext } from "react"
import GlobalContext from "../../global/GlobalContext"
// import Navigation from "../../components/Navigation/Navigation"
import { AddressInfo, AddressTitle, ButtonContainer, CartPageContainer, ConfirmButton, Line, PaymentContainer, PriceContainer, Total, TotalContainer } from "./styled"

const CartPage = () => {

  const {states} = useContext(GlobalContext)
  const {profile, cartProducts} = states

  console.log(cartProducts)

  return (
    <CartPageContainer>
      <header>Meu carrinho</header>

      <AddressInfo>
        <AddressTitle>Endereço de entrega</AddressTitle>
        <p>{profile.address}</p>
      </AddressInfo>

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

      {/* <Navigation/> */}
    </CartPageContainer>
  )
}

export default CartPage