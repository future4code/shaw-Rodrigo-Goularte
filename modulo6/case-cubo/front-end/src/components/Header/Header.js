import React from "react"
import { Button, ErrorMessage, Form, HeaderContainer, Input } from "./styled"

const Header = (props) => {

  return (
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
          onChange={(e) => props.setParticipation(Number(e.target.value))}
        />
        <Button>SEND</Button>
      </Form>
      {props.showMessage ?
        <ErrorMessage>{props.errorMessage}</ErrorMessage> : ""
      }
    </HeaderContainer>
  )
}

export default Header