import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import AddBook from "./components/AddBook";
import BookList from "./components/BookList";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div>
        <BookList />
        <AddBook />
      </div>
    </ApolloProvider>
  );
};

export default App;
