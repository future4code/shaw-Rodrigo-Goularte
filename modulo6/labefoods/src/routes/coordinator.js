export const goToHomePage = (navigate) => {
  navigate("/")
}

export const goToLoginPage = (navigate) => {
  navigate("/login")
}

export const goToSignUpPage = (navigate) => {
  navigate("/cadastro")
}

export const goToSignUpAddressPage = (navigate) => {
  navigate("/cadastro/endereco")
}

export const goToSearchPage = (navigate) => {
  navigate("/busca")
}

export const goToRestaurantPage = (navigate, id) => {
  navigate(`/restaurante/${id}`)
}

export const goToProfilePage = (navigate) => {
  navigate("/perfil")
}

export const goToEditProfilePage = (navigate) => {
  navigate("/perfil/editar-perfil")
}

export const goToEditAddressPage = (navigate) => {
  navigate("/perfil/editar-endereco")
}

export const goToCartPage = (navigate) => {
  navigate("/carrinho")
}