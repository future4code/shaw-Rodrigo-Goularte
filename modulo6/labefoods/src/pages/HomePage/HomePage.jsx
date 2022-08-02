import React from "react"
import { useProtectedPage } from "../../hooks/useProtectedPage"

const HomePage = () => {

  useProtectedPage()

  return(
    <div>
      <h1>HomePage</h1>
    </div>
  )
}

export default HomePage