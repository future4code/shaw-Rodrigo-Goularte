import styled from "styled-components"

export const RestaurantImg = styled.div `
  max-width: 100%;
  height: 7.5rem;

  border-radius: 8px 8px 0 0;

  background-image: url(${p => p.url});
  background-size: cover;
  background-position: center;

  object-fit: contain;
`