import React from "react"
import styled from "styled-components"
import PlusIcon from "../images/icon-plus.svg"

const Button = styled.button`
  border-style: none;
  border-radius: 25px;
  font-weight: 600;
`

const StyledNewInvoiceButton = styled(Button)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 8px 15px 8px 8px;

  font-size: 0.937rem;
  letter-spacing: -0.25px;
  height: 48px;
  background-color: #7c5dfa;
  color: white;
  cursor: pointer;

  .plusIconContainer {
    display: flex;
    justify-content: center;
    align-items: center;

    margin-right: 16px;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    background-color: white;
  }

  &:hover {
    background-color: #9277ff;
  }
`

const StyledMarkAsPaidButton = styled(Button)`
  height: 48px;
  background-color: #7c5dfa;
  color: white;
  padding: 17px 24px;
  font-weight: 600;

  &:hover {
    background-color: #9277ff;
  }
`

export const NewInvoiceButton = () => {
  return (
    <StyledNewInvoiceButton>
      <div className="plusIconContainer">
        <PlusIcon />
      </div>
      <span>New Invoice</span>
    </StyledNewInvoiceButton>
  )
}

export const MarkAsPaidButton = () => {
  return <StyledMarkAsPaidButton>Mark as Paid</StyledMarkAsPaidButton>
}
