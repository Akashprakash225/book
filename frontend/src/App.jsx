import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import AddBook from "../components/AddBook";
import EditBook from "../components/EditBook";
import BookDetails from "../components/BookDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-book" element={<AddBook />} />
        <Route path="/edit-book/:id" element={<EditBook />} />
        <Route path="/book-details/:id" element={<BookDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
