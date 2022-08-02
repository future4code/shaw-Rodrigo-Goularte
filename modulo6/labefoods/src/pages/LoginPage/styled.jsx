import styled from "styled-components"
import { Button } from "@mui/material"

export const TopText = styled.h4 `
  text-align: center;

  padding: 12px;
`

export const LoginForm = styled.form `
  display: flex;
  flex-direction: column;

  padding: 8px 0;
  gap: 16px;
`

export const LoginButton = styled(Button) `
  && {
    background-color: #5cb646;
    color: black;
  }
`