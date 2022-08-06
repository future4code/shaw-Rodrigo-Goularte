import { Button } from "@mui/material"
import styled from "styled-components"

export const CartPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  max-width: 500px;
  min-height: 100vh;

  padding-top: 16px;
`

export const AddressInfo = styled.div`
  display: flex;
  flex-direction: column;

  padding: 16px;
  gap: 8px;

  width: 100%;

  background-color: #eeeeee;
`

export const AddressTitle = styled.p`
  color: #b8b8b8;
`

export const TotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  padding: 16px;
  gap: 8px;

  width: 100%;
`

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;

  gap: 8px;
`

export const Total = styled.h3`
  color: #5cb646;
`

export const Line = styled.div`
  height: 1px;
  width: 100%;

  background-color: black;
`

export const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 16px;
  gap: 8px;

  width: 100%;
`

export const ButtonContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 16px;
`

export const ConfirmButton = styled(Button) `
  && {
    width: 100%;
    background-color: ${(p) => p.disabled ? "rgba(92, 182, 70, 0.5)" : "#5cb646"};
    color: black;
  }
`