import { Button } from "@mui/material"
import styled from "styled-components"

export const Logo = styled.img `
  width: 104px;
`

export const TopText = styled.h4 `
  text-align: center;

  padding: 12px;
`

export const ProfileForm = styled.form `
  display: flex;
  flex-direction: column;

  width: 100%;

  padding: 8px 0;
  gap: 16px;
`

export const LoginButton = styled(Button) `
  && {
    background-color: #5cb646;
    color: black;
  }
`