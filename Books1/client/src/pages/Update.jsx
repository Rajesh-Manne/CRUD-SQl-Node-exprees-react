import React, { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
export default function Update() {
  const [book, setBook] = useState({
    title: "",
    desc: "",
    cover: "",
    price: null,
  
  });
 
const navigate = useNavigate();
const location = useLocation();
const bookId = location.pathname.split("/")[2];

  const changeHandler = (e) => {
    e.preventDefault();
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    console.log("book"+JSON.stringify(book))
    e.preventDefault();
    try {
      await axios.put("http://localhost:8800/books/"+bookId, book);
      navigate("/")
    } catch (err) {
      console.log(err);
    }
  };
  console.log(book);
  return (
    <div className="form">
      <h1>Update Book</h1>
      <input
        type="text"
        placeholder="title"
        name="title"
        onChange={changeHandler}
      />
      <input
        type="text"
        placeholder="desc"
        name="desc"
        onChange={changeHandler}
      />
      <input
        type="text"
        placeholder="price"
        name="price"
        onChange={changeHandler}
      />
      <input
        type="text"
        placeholder="cover"
        name="cover"
        onChange={changeHandler}
      />
      <button className="formButton" onClick={handleClick}>Update</button>
    </div>
  );
}
