import axios from "axios"
import React, { useEffect, useState } from "react"
import Header from "../components/Header/Header"
import { DataContainer, GlobalStyle, Page, TableContainer} from "./styled"
import { Chart } from "react-google-charts"
import Table from "../components/Table/Table"

const HomePage = () => {

  const [allUsers, setAllUsers] = useState([])
  const [sum, setSum] = useState(0)
  const [showMessage, setShowMessage] = useState(false)
  // const [showButton, setShowButton] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [participation, setParticipation] = useState(0)

  const createUser = async () => {
    const body = { firstName, lastName, participation }
    console.log(body)
    await axios
      .post("http://localhost:3003/users", body)
      .then(((res) => {
        console.log(res.data)
        setShowMessage(false)
        setFirstName("")
        setLastName("")
        setParticipation(0)
        window.location.reload()
      }))
      .catch((error) => {
        console.log(error.response.data.message)
        setShowMessage(true)
        setErrorMessage(error.response.data.message)
      })
  }

  const getAllUsers = async () => {
    await axios
      .get("http://localhost:3003/users")
      .then((res => { setAllUsers(res.data) }))
      .catch((error) => { console.log(error.response.data) })
  }

  const getSum = async () => {
    await axios
      .get("http://localhost:3003/sum")
      .then((res => { setSum(res.data.sum) }))
      .catch((error) => { console.log(error.response.data) })
  }

  // const deleteUserById = async (id) => {
  //   await axios
  //     .delete(`http://localhost:3003/users/${id}`)
  //     .then(((res) => { console.log(res.data) }))
  //     .catch((error) => { console.log(error.response.data) })
  // }

  const onSubmitForm = (event) => {
    event.preventDefault()

    if ((participation + sum) <= 100) {
      createUser()
    } else if(sum === 100) {
      setErrorMessage(`Não é mais possível adicionar uma pessoa na tabela`)
      setShowMessage(true)
    } else {
      setErrorMessage(`A soma não pode ser maior que 100. Escolha um número menor ou igual a ${100 - sum}`)
      setShowMessage(true)
    }
  }

  const data = [
    ["Name", "Participation"]
  ]

  allUsers.length > 0 && allUsers.map((user) => {
    data.push([`${user.first_name} ${user.last_name}`, user.participation])
  })

  const options = {
    pieHole: 0.4
  }

  useEffect(() => {
    getAllUsers()
    getSum()
  }, [])

  return (
    <Page>
      <GlobalStyle />
      <Header
        setFirstName={setFirstName}
        setLastName={setLastName}
        setParticipation={setParticipation}
        onSubmitForm={onSubmitForm}
        showMessage={showMessage}
        errorMessage={errorMessage}
      />

      <DataContainer>
        <TableContainer>
          <Table
            allUsers={allUsers}
          />
        </TableContainer>

        <Chart
          chartType="PieChart"
          data={data}
          options={options}
          width={"40vw"}
          height={"300px"}
        />
      </DataContainer>
    </Page>
  )
}

export default HomePage