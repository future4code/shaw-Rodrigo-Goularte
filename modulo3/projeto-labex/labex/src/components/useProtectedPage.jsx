import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { goToLoginPage } from "../routes/coordinator"

export const useProtectedPage = () => {

  const navigate = useNavigate()

  useEffect( () => {
    const token = localStorage.getItem("token")

    if (token === null) {
      console.log("Não está logado")
      goToLoginPage(navigate)
    }
  }, [])
}