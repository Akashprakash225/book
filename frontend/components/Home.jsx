import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { CgAddR } from "react-icons/cg";
import { FaTrashAlt, FaEdit, FaInfoCircle } from "react-icons/fa";
import axios from "axios";

function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get("http://localhost:5656/books");
      setBooks(response.data);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5656/books/${id}`);
      fetchBooks(); // Refresh the book list after deletion
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  const handleAddBook = () => {
    window.location.href = "/add-book";
  };

  const handleEditBook = (id) => {
    window.location.href = `/edit-book/${id}`;
  };

  const handleViewDetails = (id) => {
    window.location.href = `/book-details/${id}`;
  };

  return (
    <>
      <Navbar expand="lg" className="navbar">
        <Navbar.Brand>Books Store</Navbar.Brand>
      </Navbar>
      <div className="icon">
        <Button variant="primary" onClick={handleAddBook}>
          <CgAddR /> Add New Book
        </Button>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>NO</th>
            <th>Title</th>
            <th>Author</th>
            <th>Published Year</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={book._id}>
              <td>{index + 1}</td>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.publishYear}</td>
              <td>
                <Button
                  variant="info"
                  onClick={() => handleViewDetails(book._id)}
                >
                  <FaInfoCircle />
                </Button>{" "}
                <Button
                  variant="warning"
                  onClick={() => handleEditBook(book._id)}
                >
                  <FaEdit />
                </Button>{" "}
                <Button variant="danger" onClick={() => handleDelete(book._id)}>
                  <FaTrashAlt />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default Home;
