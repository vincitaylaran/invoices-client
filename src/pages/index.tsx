import * as React from "react"
import { gql, useQuery } from "@apollo/client"

const INVOICES_QUERY = gql`
  query {
    invoices {
      _id
      clientName
    }
  }
`

// markup
const IndexPage = () => {
  const { data } = useQuery(INVOICES_QUERY)

  return (
    <main>
      <title>Invoices</title>
      <h1>Invoices</h1>
      {data &&
        data.invoices.map((i: any, index: number) => (
          <p key={index}>{i.clientName}</p>
        ))}
    </main>
  )
}

export default IndexPage
