import React, { useContext } from "react"
import { useNavigate } from "react-router-dom"
import GlobalContext from "../../global/GlobalContext"
import { useProtectedPage } from "../../hooks/useProtectedPage"
import { AddressContainer, AddressInfo, AddressTitle, EditIcon, Info, Line, OrderHistoryContainer, PersonalInfo, ProfilePageContainer } from "./styled"
import edit from "../../assets/edit.svg"
import OrderCard from "../../components/OrderCard/OrderCard"
import { goToEditAddressPage, goToEditProfilePage } from "../../routes/coordinator"
import Menu from "../../components/Menu/Menu"
import Header from "../../components/Header/Header"

const ProfilePage = () => {

  useProtectedPage()
  const navigate = useNavigate()

  const {states} = useContext(GlobalContext)
  const {profile} = states

  console.log(profile)


  return(
    <ProfilePageContainer>
      <Header title="Meu perfil" showArrow={false}/>

      <PersonalInfo>
        <Info>
          <p>{profile.name}</p>
          <p>{profile.email}</p>
          <p>{profile.cpf}</p>
        </Info>
        <EditIcon src={edit} onClick={() => goToEditProfilePage(navigate)} alt="edit-icon" />
      </PersonalInfo>

      <AddressContainer>
        <AddressInfo>
          <AddressTitle>Endereço cadastrado</AddressTitle>
          <p>{profile.address}</p>
        </AddressInfo>
        <EditIcon src={edit} onClick={() => goToEditAddressPage(navigate)} alt="edit-icon" />
      </AddressContainer>

      <OrderHistoryContainer>
        <p>Histórico de pedidos</p>
        <Line/>
        <div>
          <OrderCard/>
        </div>
      </OrderHistoryContainer>

      <Menu page={"profile"}/>
    </ProfilePageContainer>
  )
}

export default ProfilePage