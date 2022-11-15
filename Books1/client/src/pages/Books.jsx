import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8800/books");
        console.log(res);
        setBooks(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllBooks();
  }, []);

  const deleteHandler = async (id) => {
    try {
      await axios.delete("http://localhost:8800/books/"+ id);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <h1>Book Shop</h1>
      <div className="books">
        {books.map((book) => (
          <div className="book" key={book.id}>
            {book.cover && <img src={book.cover} alt="" />}
            <div className="body">
              <h2>{book.title}</h2>
              <p>{book.desc}</p>
              <span>{book.price}</span>
              <div className="modifyButtons">
                <button
                  className="delete"
                  onClick={() => deleteHandler(book.id)}
                >
                  Delete
                </button>
                <button className="update"><Link to={`/update/${book.id}`}>Update</Link></button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="editbook">
        {" "}
        <Link to="/add">Add new book </Link>
      </button>
    </div>
  );
}
