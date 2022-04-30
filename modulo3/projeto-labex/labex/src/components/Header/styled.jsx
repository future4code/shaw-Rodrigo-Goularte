import styled from "styled-components"

//Header

export const MainContainer = styled.div`
  display: flex;
  width: 100%;
  height: 10vh;
  align-items: center;
  justify-content: space-between;
  background-color: #52A5D9;
  padding: 0 100px;
`
export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bolder;
  font-size: 2em;
  height: 100%;
  width: 100px;

  :hover {
    cursor: pointer;
    background-color: #5faedf;
  }
`

export const AdminButton = styled.button`
  background-color: #7EB6D9;
  color: white;
  padding: 8px 30px;
  border-radius: 5px;
  border: none;
  transition-duration: 0.4s;
  font-weight: lighter;

  :hover {
    cursor: pointer;
    background-color: #1A75AE;
    border: 2px solid white;
  }
`
