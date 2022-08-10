import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`

export const Page = styled.div`
  display: flex;
  flex-direction: column;

  width: 100vw;
  height: 100vh;
`

export const TableContainer = styled.table`
  width: 40vw;
  height: 200px;

  border: 1px solid #4e4e4e;
  border-collapse: collapse;

  color: #4e4e4e;

  th, td{
    border: 1px solid #4e4e4e;
    border-collapse: collapse;
  }
`
export const DataContainer = styled.div`
  display: flex;
  align-items: center;

  padding: 0 10vw;

  width: 100%;
`

export const NumberColumn = styled.th`
  width: 32px;
  height: 32px;
`

export const NameColumn = styled.th`
  text-align: start;
  padding-left: 8px;
  width: 140px;
  height: 32px;
`

export const ParticipationColumn = styled.th`
  width: 64px;
  height: 32px;
`

export const UserRow = styled.tr`
  :hover{
    cursor: pointer;
    background-color: #e8e8e8;
  }
`

export const NumberRow = styled.td`
  text-align: center;
`

export const NameRow = styled.td`
  text-align: start;
  padding-left: 8px;
`

