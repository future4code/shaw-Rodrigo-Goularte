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

export const DataContainer = styled.div`
  display: flex;
  align-items: center;

  padding: 0 10vw;

  width: 100%;
`

export const TableContainer = styled.div`
  width: 40vw;
`
