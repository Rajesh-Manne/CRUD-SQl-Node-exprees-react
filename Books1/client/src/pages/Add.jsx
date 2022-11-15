import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Add() {
  const [book, setBook] = useState({
    title: "",
    desc: "",
    price: null,
    cover: "",
  });
 
const navigate = useNavigate();

  const changeHandler = (e) => {
    e.preventDefault();
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/books", book);
      navigate("/")
    } catch (err) {
      console.log(err);
    }
  };
  console.log(book);
  return (
    <div className="form">
      <h1>Add New Book</h1>
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
      <button className="formButton" onClick={handleClick}>Add</button>
    </div>
  );
}
