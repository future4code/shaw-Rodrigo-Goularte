import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useForm } from "../../hooks/useForm"
import { goToSignUpPage } from "../../routes/coordinator"
import TextField from '@mui/material/TextField'
import { LoginButton, LoginForm, TopText } from "./styled"
import { PageContainer } from "../../styled/GlobalStyle"
import { IconButton, InputAdornment } from "@mui/material"
import { Visibility, VisibilityOff } from "@mui/icons-material"

const LoginPage = () => {

  const navigate = useNavigate()

  // const [form, onChange] = useForm({email: "", password: ""})

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleClick = (event) => {
    event.preventDefault()
    // console.log("BODY:", form)

    console.log({email, password})
  }

  return(
    <PageContainer>
      <TopText>Entrar</TopText>

      <LoginForm onSubmit={handleClick}>
        <TextField
          id="outlined-basic"
          label="E-mail"
          type={"email"}
          placeholder="email@email.com"
          variant="outlined"
          color="secondary"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          focused
          required
        />
        <TextField
          id="outlined-basic"
          variant="outlined"
          color="secondary"
          label="Senha"
          type={"password"}
          placeholder={"Mínimo 6 caracteres"}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          inputProps={{minLength: 6, title:"A senha deve conter no mínimo 6 caracteres."}}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {values.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          focused
          required
        />
        <LoginButton type="submit">Entrar</LoginButton>


        {/* <input
          name="email"
          value={form.email}
          onChange={onChange}
          placeholder="E-mail"
          type="email"
        />
        <input
          name="password"
          value={form.password}
          onChange={onChange}
          placeholder="Senha"
          type="password"
        /> */}


      </LoginForm>

      <span>Não possui cadastro? clique <button onClick={() => goToSignUpPage(navigate)}>aqui</button></span>
    </PageContainer>
  )
}

export default LoginPage