import axios from "axios"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { goToHomePage, goToSignUpPage } from "../../routes/coordinator"
import TextField from '@mui/material/TextField'
import { LoginButton, LoginForm, Logo, TopText } from "./styled"
import { PageContainer } from "../../styled/GlobalStyle"
import { BASE_URL } from "../../constants/url"
import logo from "../../images/logo-future-eats.png"
// import { InputLabel} from "@mui/material"
// import { useForm } from "../../hooks/useForm"
// import { Visibility, VisibilityOff } from "@mui/icons-material"

const LoginPage = () => {

  const navigate = useNavigate()

  // const [form, onChange] = useForm({email: "", password: ""})

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [emailError, setEmailError] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [checkEmailError, setCheckEmailError] = useState(false)
  const [checkpasswordError, setCheckPasswordError] = useState(false)
  // const [showPassword, setShowPassword] = useState(false)

  const login = (body) => {
    axios
      .post(`${BASE_URL}/login`, body)
      .then((res) => {
        console.log(res.data)
        setEmail("")
        setEmailError("")
        setCheckEmailError(false)
        setPassword("")
        setPasswordError("")
        setCheckPasswordError(false)

        localStorage.setItem("token", res.data.token)
        goToHomePage(navigate)
      })
      .catch((error) => {
        if(error.response.data.message.includes("Senha incorreta")) {
          setPasswordError(error.response.data.message)
          setCheckPasswordError(true)
        }else {
          setEmailError(error.response.data.message)
          setCheckEmailError(true)
        }
        console.log(error.response.data.message)
      })
  }

  // const handleClickShowPassword = () => {
  //   setShowPassword(!showPassword)
  // }

  const handleClick = (event) => {
    event.preventDefault()
    // console.log("BODY:", form)

    const userLogin = {email, password}

    login(userLogin)

    console.log({email, password})
  }

  return(
    <PageContainer>
      
      <Logo src={logo} alt="logo-future-eats" />
      
      <TopText>Entrar</TopText>

      <LoginForm onSubmit={handleClick}>

        <TextField
          error={checkEmailError}
          helperText={checkEmailError? emailError : ""}
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
          error={checkpasswordError}
          helperText={checkpasswordError? passwordError : ""}
          id="outlined-basic"
          variant="outlined"
          color="secondary"
          type={"password"}
          // type={showPassword ? "text" : "password"}
          placeholder={"Mínimo 6 caracteres"}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          inputProps={{minLength: 6, title:"A senha deve conter no mínimo 6 caracteres."}}
          // endAdornment={
          //   <InputAdornment position="end">
          //     <IconButton
          //       aria-label="toggle password visibility"
          //       onClick={handleClickShowPassword}
          //       edge="end"
          //     >
          //       {showPassword ? <VisibilityOff /> : <Visibility />}
          //     </IconButton>
          //   </InputAdornment>
          // }
          label="Senha"
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