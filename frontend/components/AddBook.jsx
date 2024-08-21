import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const navigate = useNavigate();

  const handleAddBook = async () => {
    try {
      await axios.post("https://book-v41u.onrender.com/books", {
        title,
        author,
        publishYear,
      });
      navigate("/");
    } catch (error) {
      console.error("Error adding book:", error);
    }
  };

  return (
    <div>
      <h2>Add New Book</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <input
        type="text"
        placeholder="Published Year"
        value={publishYear}
        onChange={(e) => setPublishYear(e.target.value)}
      />
      <button onClick={handleAddBook}>Add Book</button>
    </div>
  );
}

export default AddBook;
