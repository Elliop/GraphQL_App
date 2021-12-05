import { useQuery } from "@apollo/client";
import { getBooksQuery } from "../queries/queries";
import BookDetails from "./BookDetails";

const BookList = () => {
  const { loading, data } = useQuery(getBooksQuery);
  const displayBooks = () => {
    if (loading) {
      return <div>Loading books...</div>;
    } else {
      return data.books.map((book) => {
        return <li key={book.id}>{book.name}</li>;
      });
    }
  };
  return (
    <div>
      <ul id="book-list">{displayBooks()}</ul>
      <BookDetails />
    </div>
  );
};

export default BookList;
