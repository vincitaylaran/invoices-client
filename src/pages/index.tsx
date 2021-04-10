import React from "react"
import { useQuery, gql } from "@apollo/client"
import "../globals.css"
import { MarkAsPaidButton, NewInvoiceButton } from "../components/Button"

const INVOICES_QUERY = gql`
  query {
    invoices {
      _id
      clientName
    }
  }
`

const IndexPage = () => {
  const { data } = useQuery(INVOICES_QUERY)

  return (
    <main>
      <title>Invoices</title>
      <h1>Invoices</h1>
      <NewInvoiceButton />
      <MarkAsPaidButton />
    </main>
  )
}

export default IndexPage
