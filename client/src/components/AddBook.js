import { useQuery } from "@apollo/client";
import { useState } from "react";
import {
  addBookMutation,
  getAuthorsQuery,
  getBooksQuery,
} from "../queries/queries";
import { useMutation } from "@apollo/client";

const AddBook = () => {
  const [form, setForm] = useState({ name: "", genre: "", authorId: "" });
  const { loading, data } = useQuery(getAuthorsQuery);
  const [addTodo] = useMutation(addBookMutation);

  const displayAuthors = () => {
    if (loading) {
      return <option>Loading authors</option>;
    } else {
      return data.authors.map((author) => {
        return (
          <option key={author.id} value={author.id}>
            {author.name}
          </option>
        );
      });
    }
  };

  const submitForm = (e) => {
    e.preventDefault();
    addTodo({
      variables: {
        name: form.name,
        genre: form.genre,
        authorId: form.authorId,
      },
      refetchQueries: [{ query: getBooksQuery }],
    });
  };

  return (
    <form id="add-book" onSubmit={submitForm}>
      <div className="field">
        <label>Book name:</label>
        <input
          type="text"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
      </div>
      <div className="field">
        <label>Genre:</label>
        <input
          type="text"
          onChange={(e) => setForm({ ...form, genre: e.target.value })}
        />
      </div>
      <div className="field">
        <label>Author:</label>
        <select
          onChange={(e) => setForm({ ...form, authorId: e.target.value })}
        >
          <option>Select author</option>
          {displayAuthors()}
        </select>
      </div>
      <button>+</button>
    </form>
  );
};

export default AddBook;
