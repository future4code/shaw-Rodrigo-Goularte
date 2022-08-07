import { TextField } from "@mui/material"
import React from "react"
import Header from "../../components/Header/Header"
import { PageContainer } from "../../styled/GlobalStyle"
import { AddressForm, LoginButton } from "./styled"

const EditAddressPage = () => {

  return (
    <PageContainer>
      <Header title="Endereço" showArrow={true}/>

      <AddressForm>

        <TextField
          id="outlined-basic"
          label="Logradouro"
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
          label="Número"
          type={"number"}
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
          label="Complemento"
          type={"text"}
          placeholder={"Apto. / Bloco"}
          variant="outlined"
          color="secondary"
          // type={showPassword ? "text" : "password"}
          // value={password}
          // onChange={(event) => setPassword(event.target.value)}
          inputProps={{ minLength: 6, title: "A senha deve conter no mínimo 6 caracteres." }}
          focused
        />

        <TextField
          id="outlined-basic"
          label="Bairro"
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

        <TextField
          id="outlined-basic"
          label="Cidade"
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



        <TextField
          id="outlined-basic"
          label="Estado"
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

      </AddressForm>
    </PageContainer>
  )
}

export default EditAddressPage