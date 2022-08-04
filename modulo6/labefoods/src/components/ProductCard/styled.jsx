import styled from "styled-components"

export const CardContainer = styled.div`
  display: flex;

  width: 100%;
  height: 112px;

  border-radius: 8px;
  border: solid 1px #b8b8b8;
`

export const ProductImg = styled.div`
  width: 96px;
  min-width: 96px;
  max-height: 100%;

  border-radius: 8px 0 0 8px;

  background-image: url(${p => p.url});
  background-size: cover;
  background-position: center;

  object-fit: contain;
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;

  padding: 16px;
`

export const ProductName = styled.h4`
  letter-spacing: -0.39px;
  color: #5cb646;
`

export const ProductDescription = styled.p`
  font-size: 12px;
  letter-spacing: -0.29px;
  color: #b8b8b8;
`

export const ProductPrice = styled.h4`
  letter-spacing: -0.39px;
  color: black;
`