import React from "react"
import { NameColumn, NameRow, NumberColumn, NumberRow, ParticipationColumn, TableStyle, TitleRow, UserRow } from "./styled"

const Table = ({allUsers}) => {

  return (
    <TableStyle>
      <tbody>
        <TitleRow>
          <NumberColumn></NumberColumn>
          <NameColumn>First name</NameColumn>
          <NameColumn>Last name</NameColumn>
          <ParticipationColumn>Participation</ParticipationColumn>
        </TitleRow>
        {allUsers.length > 0 &&
          allUsers.map((user) => {
            return (
              <UserRow key={user.id}>
                <NumberRow>{allUsers.indexOf(user) + 1}</NumberRow>
                <NameRow>{user.first_name}</NameRow>
                <NameRow>{user.last_name}</NameRow>
                <NumberRow>{user.participation}%</NumberRow>
                {/* {showButton &&
                        <ButtonRow><button onClick={() => deleteUserById(user.id)}>Delete</button></ButtonRow>
                      } */}
              </UserRow>
            )
          })
        }
      </tbody>
    </TableStyle>
  )
}

export default Table