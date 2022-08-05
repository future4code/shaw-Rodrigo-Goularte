import React, { useEffect, useState } from "react"
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import Paper from '@mui/material/Paper'
import HomeIcon from '@mui/icons-material/Home'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import PersonIcon from '@mui/icons-material/Person'
import { useNavigate } from "react-router-dom"
import { goToCartPage, goToHomePage } from "../../routes/coordinator"

const Navigation = () => {

  const navigate = useNavigate()

  // const [value, setValue] = useState(0)
  // const ref = React.useRef(null)

  let value = 0

  console.log(value)

  const change = (opa) => {
    if(opa ===0) {
      goToHomePage(navigate)
      // setValue(opa)
      value = opa
    }
    if(opa ===1) {
      goToCartPage(navigate)
      // setValue(opa)
      return value = opa
    }
  }

useEffect(() => {
  
}, [value])

return (
  <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
    <BottomNavigation
      showLabels
      value={value}
      onChange={(event, newValue) => {
        // setValue(newValue);
        change(newValue)
      }}
    >
      <BottomNavigationAction icon={<HomeIcon />} />
      <BottomNavigationAction icon={<ShoppingCartIcon />} />
      <BottomNavigationAction icon={<PersonIcon />} />
    </BottomNavigation>
  </Paper>
)
}

export default Navigation