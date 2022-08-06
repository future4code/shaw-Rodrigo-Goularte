import React from "react"
import { useNavigate } from "react-router-dom"
import { goBack } from "../../routes/coordinator"
import { GoBackArrow, HeaderContainer, Title } from "./styled"

const Header = ({title, showArrow}) => {

  const navigate = useNavigate()
  return(
    <HeaderContainer>
      {showArrow &&
        <GoBackArrow
          onClick={() => goBack(navigate)}
        />
      }
      <Title>{title}</Title>
    </HeaderContainer>
  )
}

export default Header