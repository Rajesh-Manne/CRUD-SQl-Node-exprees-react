// const express = require('express');

import express from "express";
const app = express();
import mysql from "mysql";
import cors from "cors";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "test",
});

app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.json("hello you are in home page from backend");
});

app.get("/books", (req, res) => {
  const q = "SELECT * FROM test.books";

  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/books", (req, res) => {
  const q = "INSERT INTO books (`title`, `desc`,`cover`, `price`) VALUES (?)";

  // const values = ["title from backend", "desc from backend", "Cover pic from backend"];
  const values = [
    req.body.title,
    req.body.desc,
    req.body.cover,
    req.body.price,
  ];

  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("Book has be created one");
  });
});
//Delete book

app.delete("/books/:id", (req, res) => {
  const bookId = req.params.id;
  const q = "DELETE FROM books WHERE id = ?";

  db.query(q, bookId, (err, data) => {
    if (err) return res.json(err);
    return res.json("BOOk has been deleted");
  });
});

//update
app.put("/books/:id", (req, res) => {
  const bookId = req.params.id;
  const q =
    "UPDATE books SET `title`= ?, `desc`= ?, `cover`= ? , `price` = ? WHERE id = ?";

const values = [
    req.body.title,
    req.body.desc,
    req.body.cover,
    req.body.price,
    ];

  db.query(q, [...values, bookId], (err, data) => {
    if (err) return res.json(err);
    return res.json("BOOk has been Updated Successfully");
  });
});

app.listen(8800, () => {
  console.log("Connected to Backend 123eeedidmt cjanhed");
});
