import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import PokemonsContainer from "./containers/PokemonsContainer";
import Header from "./components/Header";
import { Footer } from "./components/Footer";

function App() {
  const client = new ApolloClient({
    uri: "https://graphql-pokemon2.vercel.app",
  });

  return (
    <ApolloProvider client={client}>
      <main>
        <div className="container__pack">
          <Header />
          <PokemonsContainer />
        </div>
        {/* <Footer /> */}
      </main>
    </ApolloProvider>
  );
}

export default App;
