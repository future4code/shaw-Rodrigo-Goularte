import React, { useState } from "react"
import Modal from '@mui/material/Modal'
import { ModalButton, ModalComponent, ModalSelect, ModalTitle } from "./styled"


const SelectQuantityModal = ({ open, setOpen }) => {

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      closeAfterTransition
      BackdropProps={{
        timeout: 500,
      }}
    >
      <ModalComponent>
        <ModalTitle>Selecione a quantidade desejada</ModalTitle>

        <ModalSelect>
          {
            numbers.map((num) => {
              return (
                <option value={num}>{num}</option>
              )
            })
          }
        </ModalSelect>
        <ModalButton>
          ADICIONAR AO CARRINHO
        </ModalButton>
      </ModalComponent>
    </Modal>
  )
}

export default SelectQuantityModal