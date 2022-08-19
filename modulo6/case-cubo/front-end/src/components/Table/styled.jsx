import styled from "styled-components"

export const TableStyle = styled.table`
  border-collapse: collapse;

  color: #4e4e4e;

  th, td{
    border-collapse: collapse;
  }
`

export const TitleRow = styled.tr`
  height: 32px;
`

export const NumberColumn = styled.th`
  width: 32px;
`

export const NameColumn = styled.th`
  text-align: start;
  padding-left: 8px;
  width: 140px;
  border: 1px solid #4e4e4e;
`

export const ParticipationColumn = styled.th`
  width: 64px;
  border: 1px solid #4e4e4e;
`

export const UserRow = styled.tr`
  height: 32px;

  :hover{
    cursor: pointer;
    background-color: #e8e8e8;
  }
`

export const NumberRow = styled.td`
  text-align: center;
  border: 1px solid #4e4e4e;
`

export const NameRow = styled.td`
  text-align: start;
  padding-left: 8px;
  border: 1px solid #4e4e4e;
`

export const ButtonRow = styled.td`
  border: 1px solid white;
`