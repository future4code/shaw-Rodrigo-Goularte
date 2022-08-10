import React from "react"
import { Button, Form, HeaderContainer, Input } from "./styled"

const Header = (props) => {

  return(
    <HeaderContainer>
        <Form onSubmit={props.onSubmitForm}>
          <Input
            placeholder="First name"
            onChange={(e) => props.setFirstName(e.target.value)}
          />
          <Input
            placeholder="Last name"
            onChange={(e) => props.setLastName(e.target.value)}
          />
          <Input
            placeholder="Participation"
            onChange={(e) => props.setParticipation(e.target.value)}
          />
          <Button>SEND</Button>
        </Form>
      </HeaderContainer>
  )
}

export default Header