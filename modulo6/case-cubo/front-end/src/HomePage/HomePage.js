import axios from "axios"
import React, { useEffect, useState } from "react"
import Header from "../components/Header/Header"
import { DataContainer, GlobalStyle, NameColumn, NameRow, NumberColumn, NumberRow, Page, ParticipationColumn, TableContainer, UserRow } from "./styled"
import { Chart } from "react-google-charts"

const HomePage = () => {

  const [allUsers, setAllUsers] = useState([])
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [participation, setParticipation] = useState("")

  const createUser = async () => {
    const body = { firstName, lastName, participation }
    await axios
      .post("http://localhost:3003/users", body)
      .then((res => { console.log(res.data) }))
      .catch((error) => { console.log(error) })
  }

  const getAllUsers = async () => {
    await axios
      .get("http://localhost:3003/users")
      .then((res => { setAllUsers(res.data) }))
      .catch((error) => { console.log(error.data) })
  }

  const onSubmitForm = () => {
    createUser()
  }

  const data = [
    ["Name", "Participation"]
  ]

  allUsers.length > 0 && allUsers.map((user) => {
    data.push([`${user.first_name} ${user.last_name}`, user.participation])
  })

  // console.log(data)

  const options = {
    // title: "Participation",
    pieHole: 0.4
  }

  useEffect(() => {
    getAllUsers()
  }, [])

  return (
    <Page>
      <GlobalStyle />
      <Header
        setFirstName={setFirstName}
        setLastName={setLastName}
        setParticipation={setParticipation}
        onSubmitForm={onSubmitForm}
      />

      <DataContainer>

        <TableContainer>
          <tr>
            <NumberColumn></NumberColumn>
            <NameColumn>First name</NameColumn>
            <NameColumn>Last name</NameColumn>
            <ParticipationColumn>Participation</ParticipationColumn>
          </tr>
          {allUsers.length > 0 &&
            allUsers.map((user) => {
              return (
                <UserRow key={user.id}>
                  <NumberRow>{allUsers.indexOf(user) + 1}</NumberRow>
                  <NameRow>{user.first_name}</NameRow>
                  <NameRow>{user.last_name}</NameRow>
                  <NumberRow>{user.participation}%</NumberRow>
                </UserRow>
              )
            })
          }
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