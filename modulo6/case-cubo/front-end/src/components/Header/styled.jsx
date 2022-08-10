import styled from "styled-components"

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 15vh;

  background-color: #00B8E2;
`

export const Form = styled.form`
  display: flex;
  justify-content: space-evenly;

  width: 70vw;
`

export const Input = styled.input`
  height: 40px;
  width: 200px;

  padding: 8px;

  border: none;
  border-radius: 4px;
`

export const Button = styled.button`

  padding: 8px 32px;

  border: 2px solid white;
  border-radius: 32px;

  background-color: #00B8E2;

  color: white;
  font-weight: bold;

  :hover{
    cursor: pointer;
    border: 2px solid #00718a;
    background-color: #00718a;
  }
`