import React from 'react'
import ApolloClient from 'apollo-boost'
import {ApolloProvider} from '@apollo/react-hooks'

function App() {
  const client = new ApolloClient({
    uri: 'https://graphql-pokemon.now.sh'
  })
  
  return (
    <ApolloProvider client={client}>
      <h1>Hello</h1>

    </ApolloProvider>


  )
}

export default App
