import { ApolloClient, ApolloProvider } from "@apollo/client";
import BookList from "./components/BookList";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div>
        <BookList />
      </div>
    </ApolloProvider>
  );
};

export default App;
