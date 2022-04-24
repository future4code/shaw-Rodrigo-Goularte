import React from "react"
import { ContainerHeader, Matches, Titulo1, Titulo2, Voltar } from "./styled"
import { BsArrow90DegLeft } from "react-icons/bs"
import { RiUserHeartFill } from "react-icons/ri"


function Header(props) {

  const mudaHeader = () => {
    switch (props.telaAtual) {
      case "home":
        return (
          <ContainerHeader>
            <h1>
              <Titulo1>astro</Titulo1><Titulo2>match</Titulo2>
            </h1>
            <Matches onClick={props.irParaMatches}><RiUserHeartFill /></Matches>
          </ContainerHeader>
        )
      case "matches":
        return (
          <ContainerHeader>
            <Voltar onClick={props.irParaHome}><BsArrow90DegLeft /></Voltar>
            <h1>
              <Titulo1>astro</Titulo1><Titulo2>match</Titulo2>
            </h1>
          </ContainerHeader>
        )
      default:
        return (
          <ContainerHeader>
            <h1>
              <Titulo1>astro</Titulo1><Titulo2>match</Titulo2>
            </h1>
            <Matches onClick={props.irParaMatches}><RiUserHeartFill /></Matches>
          </ContainerHeader>
        )
    }
  }

  return (
    <div>
      { mudaHeader() }
    </div>
  )
}

export default Header