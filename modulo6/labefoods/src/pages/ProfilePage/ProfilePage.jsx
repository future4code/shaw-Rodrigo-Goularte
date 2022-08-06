import React, { useContext } from "react"
import { useNavigate } from "react-router-dom"
import GlobalContext from "../../global/GlobalContext"
import { useProtectedPage } from "../../hooks/useProtectedPage"
import { AddressContainer, AddressInfo, AddressTitle, EditIcon, Line, OrderHistoryContainer, PersonalInfo, ProfilePageContainer } from "./styled"
import edit from "../../assets/edit.svg"
import OrderCard from "../../components/OrderCard/OrderCard"
import { goToEditAddressPage, goToEditProfilePage } from "../../routes/coordinator"

const ProfilePage = () => {

  useProtectedPage()
  const navigate = useNavigate()

  const {states} = useContext(GlobalContext)
  const {profile} = states

  console.log(profile)


  return(
    <ProfilePageContainer>
      <header>Meu perfil</header>

      <PersonalInfo>
        <div>
          <p>{profile.name}</p>
          <p>{profile.email}</p>
          <p>{profile.cpf}</p>
        </div>
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
    </ProfilePageContainer>
  )
}

export default ProfilePage