import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EditBook() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(`https://book-v41u.onrender.com/books/${id}`);
        setTitle(response.data.title);
        setAuthor(response.data.author);
        setPublishYear(response.data.publishYear);
      } catch (error) {
        console.error("Error fetching book details:", error);
      }
    };

    fetchBook();
  }, [id]);

  const handleUpdateBook = async () => {
    try {
      await axios.put(`https://book-v41u.onrender.com/books/${id}`, {
        title,
        author,
        publishYear,
      });
      navigate("/");
    } catch (error) {
      console.error("Error updating book:", error);
    }
  };
  return (
    <div>
      <h2>Edit Book</h2>
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
      <button onClick={handleUpdateBook}>Update Book</button>
    </div>
  );
}

export default EditBook;
