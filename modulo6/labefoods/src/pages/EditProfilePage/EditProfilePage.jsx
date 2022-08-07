import { TextField } from "@mui/material"
import React from "react"
import Header from "../../components/Header/Header"
import { PageContainer } from "../../styled/GlobalStyle"
import { LoginButton, ProfileForm } from "./styled"

const EditProfilePage = () => {

  return (
    <PageContainer>
      <Header title="Editar" showArrow={true}/>

      <ProfileForm>

        <TextField
          id="outlined-basic"
          label="Nome"
          type={"text"}
          // placeholder="email@email.com"
          variant="outlined"
          color="secondary"
          // value={email}
          // onChange={(event) => setEmail(event.target.value)}
          focused
          required
        />

        <TextField
          id="outlined-basic"
          label="E-mail"
          type={"email"}
          // placeholder={"Mínimo 6 caracteres"}
          variant="outlined"
          color="secondary"
          // type={showPassword ? "text" : "password"}
          // value={password}
          // onChange={(event) => setPassword(event.target.value)}
          inputProps={{ minLength: 6, title: "A senha deve conter no mínimo 6 caracteres." }}
          focused
          required
        />

        <TextField
          id="outlined-basic"
          label="CPF"
          type={"text"}
          // placeholder={"Mínimo 6 caracteres"}
          variant="outlined"
          color="secondary"
          // type={showPassword ? "text" : "password"}
          // value={password}
          // onChange={(event) => setPassword(event.target.value)}
          inputProps={{ minLength: 6, title: "A senha deve conter no mínimo 6 caracteres." }}
          focused
          required
        />

        <LoginButton type="submit">Salvar</LoginButton>

      </ProfileForm>
    </PageContainer>
  )
}

export default EditProfilePage