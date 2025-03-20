import React, { useState } from "react";
import GetUsers from "./Components/GetUsers";
import Footer from "./Components/Footer";
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from } from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import "./App.css";
import "./i18n";

const errorLink = onError(({ graphqlErrors }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message }) => {
      alert(`Graphql error ${message}`);
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: "https://rickandmortyapi.com/graphql" }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

function App() {
  const [loadingState, setLoadingState] = useState(true);

  const handleLoadingChange = (loading) => {
    setLoadingState(loading);
  };

  return (
    <ApolloProvider client={client}>
      <GetUsers onLoadingChange={handleLoadingChange} />
      {!loadingState && <Footer />}
    </ApolloProvider>
  );
}

export default App;
